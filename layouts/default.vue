<template>
  <div
    class="min-h-screen w-full app-shell"
    :class="{ 'app-shell-ready': isReady }"
    style="position: relative; background: #f6f2e9;"
  >
    <div class="page-bg"></div>
    <div class="page-grid"></div>
    <div class="top-strip"></div>

    <nav class="nav">
      <nuxt-link to="/" class="nav-brand">
        <img src="/yimo-logo-gold.png" alt="YIMO" />
        <span class="nav-brand-name">YIMO</span>
      </nuxt-link>
      <div class="nav-links hidden md:flex">
        <nuxt-link to="/archive" class="nav-link" style="font-weight:800;">Archive</nuxt-link>
        <a href="/#format" class="nav-link">Format</a>
        <a href="/#people" class="nav-link">Staff</a>
        <a href="/#faq" class="nav-link">FAQ</a>
        <a href="/#sponsors" class="nav-link">Sponsors</a>
        <a href="/#contact" class="nav-link">Contact</a>
      </div>
      <div class="nav-right">
        <a href="https://discord.gg/fkyDZvDMKT" target="_blank" rel="noopener" class="nav-link hidden md:inline-flex" aria-label="Discord">
          <img src="/Discord-Logo-Black.png" alt="Discord" style="height:28px;width:28px;object-fit:contain;opacity:0.75;" />
        </a>
        <a href="https://www.instagram.com/yimocomp_/" target="_blank" rel="noopener" class="nav-link hidden md:inline-flex" aria-label="Instagram">
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
        </a>
        <nuxt-link to="/chapters" class="nav-link nav-chapters">Chapters</nuxt-link>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeLKMy5cPHpOFhFUc8fukPBjMiJHl35aB3u7rkClPTw_VziVg/viewform" target="_blank" rel="noopener" class="nav-register">Register</a>
      </div>
    </nav>

    <main style="position: relative; z-index: 1;">
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
