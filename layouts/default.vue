<template>
  <div class="min-h-screen bg-fixed bg-base bg-graphing dark:bg-graph-dark w-screen">
    <nav class="nav-container">
      <div class="nav-brand flex items-center justify-between w-full gap-8">
        <div class="flex items-center gap-3">
          <img class="nav-logo" src="/yimo-logo-gold.png" alt="Youth International Math Olympiad gold logo" />
          <a class="nav-title" href="/">Youth International Math Olympiad</a>
        </div>

        <div class="hidden md:flex items-center gap-3 ml-auto justify-end">
          <a class="menu-link" href="/about">Contest</a>
          <a class="menu-link" href="/sponsors">Sponsors</a>
          <a class="menu-link" href="/faq">FAQ</a>
          <a class="rounded-full border border-white bg-white/10 px-4 py-2 text-white font-bold hover:bg-white/20" href="https://forms.gle/QBDTLeHFffWiWbyN6" target="_blank" rel="noopener">Register</a>
          <a class="p-1 text-white hover:text-purple-300 transition" href="https://discord.gg/fkyDZvDMKT" target="_blank" rel="noopener" aria-label="Discord">
            <img class="h-6 w-6" src="/Discord-Logo-White.png" alt="Discord" />
          </a>
          <a class="p-1 text-white hover:text-purple-300 transition" href="/" aria-label="Home">
            <img class="h-7 w-7 -mt-1" src="/home-logo.png" alt="Home" />
          </a>
        </div>

        <menu-icon
          @click="menu = !menu"
          class="menu-toggle"
        />
      </div>
    </nav>
    <div class="content-wrapper">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import { MenuIcon } from "vue-feather-icons";
import { HomeIcon } from "vue-feather-icons";

export default {
  components: {
    MenuIcon,
    HomeIcon,
  },
  data: () => ({
    menu: false,
  }),
};
</script>
