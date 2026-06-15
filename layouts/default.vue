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
        <div class="nav-dropdown">
          <button class="nav-link nav-dropdown-btn" @click="contestDropdown = !contestDropdown">
            Contest
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :style="{transform: contestDropdown ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s'}"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
          <div class="nav-dropdown-menu" v-if="contestDropdown">
            <nuxt-link to="/about" class="nav-dropdown-item" @click.native="contestDropdown = false">Current Contest</nuxt-link>
            <nuxt-link to="/archive" class="nav-dropdown-item" @click.native="contestDropdown = false">Archive</nuxt-link>
          </div>
        </div>
        <nuxt-link to="/sponsors" class="nav-link">Partners</nuxt-link>
        <nuxt-link to="/staff" class="nav-link">Staff</nuxt-link>
        <nuxt-link to="/faq" class="nav-link">FAQ</nuxt-link>
      </div>
      <div class="nav-right">
        <a href="https://discord.gg/fkyDZvDMKT" target="_blank" rel="noopener" class="nav-link hidden md:inline-flex" aria-label="Discord">
          <img src="/Discord-Logo-White.png" alt="Discord" style="height:18px;width:18px;object-fit:contain;" />
        </a>
        <a href="https://www.instagram.com/yimocomp_/" target="_blank" rel="noopener" class="nav-link hidden md:inline-flex" aria-label="Instagram">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
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
export default {
  data() {
    return {
      contestDropdown: false
    };
  },
  mounted() {
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-dropdown')) {
        this.contestDropdown = false;
      }
    });
  }
};
</script>
