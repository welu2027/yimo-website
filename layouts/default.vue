<template>
  <div class="site-shell">
  <div
    class="min-h-screen w-full app-shell"
    :class="{ 'app-shell-ready': isReady }"
    style="position: relative; background: #0a0805;"
  >
    <div class="page-bg"></div>
    <div class="page-grid"></div>
    <div class="top-strip"></div>

    <nav class="nav" aria-label="Primary navigation">
      <nuxt-link to="/" class="nav-brand">
        <img src="/yimo-logo-gold.png" alt="YIMO" />
        <span class="nav-brand-name">YIMO</span>
      </nuxt-link>
      <div class="nav-links hidden md:flex">
        <nuxt-link to="/archive" class="nav-link" style="font-weight:800;">Archive</nuxt-link>
        <nuxt-link to="/potd" class="nav-link" style="font-weight:800;">POTD</nuxt-link>
        <a href="/#climb" class="nav-link">Divisions</a>
        <a href="/#format" class="nav-link">Format</a>
        <a href="/#people" class="nav-link">Staff</a>
        <a href="/#faq" class="nav-link">FAQ</a>
        <a href="/#partners" class="nav-link">Partners</a>
      </div>
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
export default {
  data() {
    return { isReady: false };
  },
  mounted() {
    // Wait a frame so the browser has actually painted the opacity:0 state
    // before we transition it, then reveal the app with a soft fade instead
    // of a hard pop the instant Vue finishes mounting.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.isReady = true;
      });
    });
  },
};
</script>

<style scoped>
.app-shell {
  opacity: 0;
  transition: opacity 0.35s ease;
}
.app-shell-ready {
  opacity: 1;
}
@media (prefers-reduced-motion: reduce) {
  .app-shell {
    opacity: 1;
    transition: none;
  }
}
</style>
