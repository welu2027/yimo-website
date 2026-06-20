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
        <nuxt-link to="/archive" class="nav-link">Archive</nuxt-link>
        <a href="/#faq" class="nav-link">FAQ</a>
      </div>
      <div class="nav-right">
        <a href="https://discord.gg/fkyDZvDMKT" target="_blank" rel="noopener" class="nav-link hidden md:inline-flex" aria-label="Discord">
          <img src="/Discord-Logo-White.png" alt="Discord" style="height:18px;width:18px;object-fit:contain;" />
        </a>
        <a href="https://www.instagram.com/yimocomp_/" target="_blank" rel="noopener" class="nav-link hidden md:inline-flex" aria-label="Instagram">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
        </a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeLKMy5cPHpOFhFUc8fukPBjMiJHl35aB3u7rkClPTw_VziVg/viewform" target="_blank" rel="noopener" class="nav-register">Register</a>
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
