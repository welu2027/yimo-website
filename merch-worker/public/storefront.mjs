const CART_KEY = 'yimo-fourthwall-cart'

export function formatPrice(price) {
  if (!price || !Number.isFinite(Number(price.value)) || !price.currency) return ''
  try {
    return new Intl.NumberFormat(undefined, {
      style: 'currency', currency: price.currency
    }).format(Number(price.value))
  } catch {
    return `${price.value} ${price.currency}`
  }
}

export function availableVariants(product) {
  return product?.state?.type === 'SOLD_OUT' ? [] : Array.isArray(product?.variants)
    ? product.variants.filter((variant) => variant?.id && variant?.state?.type !== 'SOLD_OUT')
    : []
}

export function normalizeProducts(payload) {
  if (!Array.isArray(payload?.results)) return []
  return payload.results.filter((product) => product?.type === 'PRODUCT' && product.name && availableVariants(product).length)
}

const $ = (selector) => document.querySelector(selector)
const imageFor = (product) => product.images?.[0]?.url || product.image?.url || product.imageUrl || ''
const variantLabel = (variant) => variant.name || variant.description || 'Standard'
const request = async (path, options) => {
  const response = await fetch(path, options)
  const data = await response.json().catch(() => ({}))
  if (!response.ok) throw new Error(data.error || 'STORE_UNAVAILABLE')
  return data
}
const post = (path, body) => request(path, {
  method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body)
})

if (typeof document !== 'undefined') {
  const productsNode = $('#products')
  const notice = $('#notice')
  const dialog = $('#cart-dialog')
  const cartItemsNode = $('#cart-items')
  const message = $('#cart-message')
  let shop
  let cart

  function showNotice(title, copy, retry = false) {
    notice.replaceChildren()
    const heading = document.createElement('h3')
    heading.textContent = title
    const text = document.createElement('p')
    text.textContent = copy
    notice.append(heading, text)
    if (retry) {
      const button = document.createElement('button')
      button.type = 'button'
      button.textContent = 'Try again'
      button.addEventListener('click', loadProducts)
      notice.append(button)
    }
    notice.hidden = false
  }

  function renderProducts(products) {
    productsNode.replaceChildren()
    if (!products.length) {
      $('#product-count').textContent = '0 pieces'
      showNotice('The first pieces are on their way.', 'YIMO merchandise will appear here as soon as the collection is released.')
      return
    }
    $('#product-count').textContent = `${products.length} ${products.length === 1 ? 'piece' : 'pieces'}`
    notice.hidden = true
    for (const product of products) {
      const variants = availableVariants(product)
      const card = document.createElement('article')
      card.className = 'product-card'
      const media = document.createElement('div')
      media.className = 'product-image'
      const image = document.createElement('img')
      image.alt = product.name
      image.loading = 'lazy'
      const imageUrl = imageFor(product)
      if (imageUrl) image.src = imageUrl
      else image.hidden = true
      media.append(image)
      const info = document.createElement('div')
      info.className = 'product-info'
      const name = document.createElement('h3')
      name.textContent = product.name
      const price = document.createElement('span')
      price.className = 'product-price'
      price.textContent = formatPrice(variants[0].unitPrice)
      const controls = document.createElement('div')
      controls.className = 'product-controls'
      const select = document.createElement('select')
      select.setAttribute('aria-label', `Choose an option for ${product.name}`)
      variants.forEach((variant) => {
        const option = document.createElement('option')
        option.value = variant.id
        option.textContent = variantLabel(variant)
        option.dataset.price = JSON.stringify(variant.unitPrice || {})
        select.append(option)
      })
      select.addEventListener('change', () => {
        price.textContent = formatPrice(JSON.parse(select.selectedOptions[0].dataset.price))
      })
      const add = document.createElement('button')
      add.className = 'add-button'
      add.type = 'button'
      add.textContent = 'Add to bag'
      add.addEventListener('click', async () => {
        add.disabled = true
        try {
          await addItem(select.value)
          $('#bag-count').textContent = String(cart.items?.reduce((sum, item) => sum + (item.quantity || 0), 0) || 0)
          $('#bag-count').setAttribute('aria-label', `${$('#bag-count').textContent} items`)
          add.textContent = 'Added'
          setTimeout(() => { add.textContent = 'Add to bag'; add.disabled = false }, 900)
        } catch {
          if (!dialog.open) dialog.showModal()
          add.textContent = 'Try again'
          add.disabled = false
        }
      })
      controls.append(select, add)
      info.append(name, price, controls)
      card.append(media, info)
      productsNode.append(card)
    }
  }

  async function loadProducts() {
    $('#product-count').textContent = 'Loading collection'
    showNotice('Loading the collection…', '')
    try {
      const [shopData, productData] = await Promise.all([request('/api/shop'), request('/api/products')])
      shop = shopData
      renderProducts(normalizeProducts(productData))
    } catch {
      $('#product-count').textContent = 'Collection unavailable'
      showNotice('We couldn’t load the collection.', 'Please try again in a moment.', true)
    }
  }

  async function getCart() {
    const id = localStorage.getItem(CART_KEY)
    if (!id) return null
    try { return await request(`/api/carts/${encodeURIComponent(id)}`) }
    catch (error) {
      if (error.message === 'CART_NOT_FOUND') localStorage.removeItem(CART_KEY)
      else throw error
      return null
    }
  }

  async function ensureCart() {
    if (!cart?.id) cart = await getCart()
    if (!cart?.id) {
      cart = await post('/api/carts', { currency: 'USD' })
      localStorage.setItem(CART_KEY, cart.id)
    }
    return cart
  }

  async function addItem(variantId) {
    message.textContent = ''
    try {
      let current = await ensureCart()
      try {
        cart = await post(`/api/carts/${encodeURIComponent(current.id)}/add`, { items: [{ variantId, quantity: 1 }] })
      } catch (error) {
        if (error.message !== 'CART_NOT_FOUND') throw error
        localStorage.removeItem(CART_KEY)
        cart = await post('/api/carts', { currency: 'USD' })
        if (!cart.id) throw new Error('STORE_UNAVAILABLE')
        localStorage.setItem(CART_KEY, cart.id)
        current = cart
        cart = await post(`/api/carts/${encodeURIComponent(current.id)}/add`, { items: [{ variantId, quantity: 1 }] })
      }
      renderCart()
    } catch (error) {
      message.textContent = error.message === 'CART_NOT_FOUND' ? 'Your bag expired. Please try adding the item again.' : 'The item could not be added. Please try again.'
      throw error
    }
  }

  function itemVariantId(item) { return item.variant?.id || item.variantId }
  function renderCart() {
    const items = cart?.items || []
    $('#bag-count').textContent = String(items.reduce((sum, item) => sum + (item.quantity || 0), 0))
    $('#bag-count').setAttribute('aria-label', `${$('#bag-count').textContent} items`)
    cartItemsNode.replaceChildren()
    if (!items.length) {
      const empty = document.createElement('p')
      empty.className = 'cart-empty'
      empty.textContent = 'Your bag is empty.'
      cartItemsNode.append(empty)
    }
    for (const item of items) {
      const row = document.createElement('article')
      row.className = 'cart-item'
      const image = document.createElement('img')
      image.alt = ''
      image.src = item.variant?.image?.url || item.product?.images?.[0]?.url || ''
      const detail = document.createElement('div')
      const title = document.createElement('h3')
      title.textContent = item.product?.name || item.variant?.product?.name || 'YIMO merchandise'
      const variant = document.createElement('p')
      variant.textContent = item.variant?.name || ''
      const controls = document.createElement('div')
      controls.className = 'cart-item-controls'
      const qty = document.createElement('span')
      qty.textContent = String(item.quantity)
      const decrease = document.createElement('button')
      decrease.type = 'button'
      decrease.setAttribute('aria-label', `Decrease quantity of ${title.textContent}`)
      decrease.textContent = '−'
      decrease.disabled = item.quantity <= 1
      decrease.addEventListener('click', () => mutateCart('change', item, item.quantity - 1))
      const increase = document.createElement('button')
      increase.type = 'button'
      increase.setAttribute('aria-label', `Increase quantity of ${title.textContent}`)
      increase.textContent = '+'
      increase.disabled = item.quantity >= 99
      increase.addEventListener('click', () => mutateCart('change', item, item.quantity + 1))
      const remove = document.createElement('button')
      remove.type = 'button'
      remove.textContent = 'Remove'
      remove.addEventListener('click', () => mutateCart('remove', item))
      controls.append(decrease, qty, increase, remove)
      detail.append(title, variant, controls)
      row.append(image, detail)
      cartItemsNode.append(row)
    }
    $('#subtotal').textContent = formatPrice(cart?.totals?.subtotal || cart?.subtotal)
    $('#checkout').disabled = !cart?.id || !items.length
  }

  async function mutateCart(operation, item, quantity = item.quantity) {
    message.textContent = ''
    try {
      const path = quantity < 1 ? 'remove' : operation
      cart = await post(`/api/carts/${encodeURIComponent(cart.id)}/${path}`, {
        items: [{ variantId: itemVariantId(item), quantity: path === 'remove' ? item.quantity : quantity }]
      })
      renderCart()
    } catch (error) {
      if (error.message === 'CART_NOT_FOUND') {
        localStorage.removeItem(CART_KEY)
        cart = null
        renderCart()
        message.textContent = 'Your bag expired. Add your items again.'
      } else {
        message.textContent = 'Your bag could not be updated. Please try again.'
      }
    }
  }

  $('#open-cart').addEventListener('click', async () => {
    message.textContent = ''
    dialog.showModal()
    try { cart = await getCart(); renderCart() }
    catch { message.textContent = 'Your bag could not be loaded. Please try again.' }
  })
  $('#close-cart').addEventListener('click', () => dialog.close())
  dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close() })
  $('#checkout').addEventListener('click', () => {
    const domain = shop?.publicDomain
    if (!domain || !cart?.id || !/^(?:[a-z0-9-]+\.)*fourthwall\.com$/i.test(domain)) {
      message.textContent = 'Checkout is temporarily unavailable.'
      return
    }
    const params = new URLSearchParams({ cartCurrency: cart.currency || 'USD', cartId: cart.id })
    window.location.assign(`https://${domain}/checkout/?${params}`)
  })
  renderCart()
  loadProducts()
}
