<template>
  <div class="w-full">
    <!-- Hero Section -->
    <section class="hero-section py-20 md:py-32 px-4 relative overflow-hidden w-full max-w-none" style="margin-left: calc(50% - 50vw + 40px); margin-right: calc(50% - 50vw - 40px);">
      <div class="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
        <div class="flex-1 text-center md:text-left">
          <h1 class="text-5xl md:text-7xl font-black leading-tight tracking-wider text-white mb-6">Youth International Math Olympiad</h1>
          <p class="text-xl md:text-3xl font-semibold tracking-wide text-white mb-3">May 24/25, 2026 <span class="opacity-60 mx-2">•</span> Global Competition</p>
          <p class="text-base md:text-lg font-medium tracking-wide uppercase text-white/85 mb-4">All Students Welcome <span class="opacity-60 mx-1">•</span> No Experience Required</p>
          <p class="text-sm md:text-base font-light tracking-widest uppercase text-white/70 mb-8">Run by <a class="font-semibold underline decoration-white/40 underline-offset-4 hover:text-white hover:decoration-white" href="https://www.nxthorizon.org/" target="_blank" rel="noopener">NxtHorizon</a> &amp; <a class="font-semibold underline decoration-white/40 underline-offset-4 hover:text-white hover:decoration-white" href="https://www.stemise.org/" target="_blank" rel="noopener">Stemise</a></p>
          <div class="flex flex-wrap gap-4 justify-center md:justify-start">
            <a class="rounded-full bg-amber-50 text-purple-950 font-extrabold tracking-wide px-7 py-3 text-base md:text-lg shadow-lg hover:bg-white transition" href="https://forms.gle/QBDTLeHFffWiWbyN6" target="_blank" rel="noopener">Register by May 17</a>
            <a class="rounded-full bg-purple-900 text-white font-bold tracking-wide px-7 py-3 text-base md:text-lg shadow-lg hover:bg-purple-800 transition" href="https://discord.gg/fkyDZvDMKT" target="_blank" rel="noopener">Join Discord</a>
          </div>
        </div>
        <img class="mx-auto h-80 w-80 md:h-96 md:w-96 object-contain" src="/yimo-logo.png" alt="YIMO logo" />
      </div>
    </section>

    <!-- Navigation Card Links -->
    <section class="py-16 px-4 max-w-6xl mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <a href="/about" class="bg-white/10 hover:bg-white/20 border border-white/20 rounded-3xl p-8 text-center text-white transition">
          <h3 class="text-2xl font-bold">Contest</h3>
          <p class="mt-3 text-white/80">Divisions, format, schedule, registration, and prizes.</p>
        </a>
        <a href="/faq" class="bg-white/10 hover:bg-white/20 border border-white/20 rounded-3xl p-8 text-center text-white transition">
          <h3 class="text-2xl font-bold">FAQ</h3>
          <p class="mt-3 text-white/80">Common questions about joining and competing.</p>
        </a>
        <a href="/sponsors" class="bg-white/10 hover:bg-white/20 border border-white/20 rounded-3xl p-8 text-center text-white transition">
          <h3 class="text-2xl font-bold">Sponsors</h3>
          <p class="mt-3 text-white/80">Supporting organizations and sponsor prizes.</p>
        </a>
      </div>
    </section>
  </div>
</template>

<style>
h2::before {
  display: block;
  content: " ";
  margin-top: -104px;
  height: 104px;
  visibility: hidden;
  pointer-events: none;
}


</style>
