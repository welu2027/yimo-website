<template>
  <div class="site-shell">
    <div class="top-strip"></div>

    <nav class="nav" aria-label="Primary navigation">
      <nuxt-link to="/" class="nav-brand">
        <img src="/yimo-logo-gold.png" alt="YIMO" />
        <span class="nav-brand-name">YIMO</span>
      </nuxt-link>
      <div class="nav-right">
        <nuxt-link to="/archive" class="nav-link nav-archive">Archive</nuxt-link>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeLKMy5cPHpOFhFUc8fukPBjMiJHl35aB3u7rkClPTw_VziVg/viewform" target="_blank" rel="noopener" class="nav-register">Register</a>
      </div>
    </nav>

    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {};
</script>
