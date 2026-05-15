<template>
  <div class="min-h-screen w-full" style="position: relative; background: #0a0805;">
    <div class="page-bg"></div>
    <div class="page-grid"></div>
    <div class="top-strip"></div>

    <nav class="nav">
      <nuxt-link to="/" class="nav-brand">
        <img src="/yimo-logo-gold.png" alt="YIMO" />
        <span class="nav-brand-name">YIMO</span>
      </nuxt-link>
      <div class="nav-links hidden md:flex">
        <nuxt-link to="/about" class="nav-link">Contest</nuxt-link>
        <nuxt-link to="/sponsors" class="nav-link">Partners</nuxt-link>
        <nuxt-link to="/staff" class="nav-link">Staff</nuxt-link>
        <nuxt-link to="/faq" class="nav-link">FAQ</nuxt-link>
      </div>
      <div class="nav-right">
        <a href="https://discord.gg/fkyDZvDMKT" target="_blank" rel="noopener" class="nav-link hidden md:inline-flex" aria-label="Discord">
          <img src="/Discord-Logo-White.png" alt="Discord" style="height:18px;width:18px;object-fit:contain;" />
        </a>
        <a href="https://forms.gle/QBDTLeHFffWiWbyN6" target="_blank" rel="noopener" class="nav-register">Register</a>
      </div>
    </nav>

    <main style="position: relative; z-index: 1;">
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {};
</script>
