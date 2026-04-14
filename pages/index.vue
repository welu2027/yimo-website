<template>
  <div class="w-full">
    <!-- Hero Section -->
    <section class="hero-section py-20 md:py-32 px-4 relative overflow-hidden w-full max-w-none" style="margin-left: calc(50% - 50vw + 40px); margin-right: calc(50% - 50vw - 40px);">
      <div class="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
        <div class="flex-1 text-center md:text-left">
          <h1 class="text-5xl md:text-7xl font-black leading-tight tracking-wider text-white mb-4">Youth International Math Olympiad</h1>
          <p class="text-lg md:text-2xl text-white/90 mb-2">May 24/25, 2026 • Global Competition</p>
          <p class="text-white/80 text-sm md:text-base mb-4">All Students Welcome • No Experience Required</p>
          <p class="text-white/70 text-xs md:text-sm mb-6">Run by <a class="underline hover:text-white" href="https://www.nxthorizon.org/" target="_blank" rel="noopener">NxtHorizon</a> & <a class="underline hover:text-white" href="https://www.stemise.org/" target="_blank" rel="noopener">Stemise</a></p>
          <div class="flex flex-wrap gap-3 justify-center md:justify-start">
            <a class="rounded-full bg-white text-purple-900 font-bold px-5 py-2 hover:bg-white/90" href="https://forms.gle/QBDTLeHFffWiWbyN6" target="_blank" rel="noopener">Register by May 17</a>
            <a class="rounded-full border border-white text-white font-bold px-5 py-2 hover:bg-white/10" href="https://discord.gg/fkyDZvDMKT" target="_blank" rel="noopener">Join Discord</a>
          </div>
        </div>
        <img class="mx-auto h-80 w-80 md:h-96 md:w-96 object-contain" src="/yimo-logo.png" alt="YIMO logo" />
      </div>
    </section>

    <!-- Navigation Card Links -->
    <section class="py-16 px-4 max-w-6xl mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <a href="/about" class="bg-white/10 hover:bg-white/20 border border-white/20 rounded-3xl p-8 text-center text-white transition">
          <h3 class="text-2xl font-bold">About YIMO</h3>
          <p class="mt-3 text-white/80">Full competition mission, structure, and rules.</p>
        </a>
        <a href="/schedule" class="bg-white/10 hover:bg-white/20 border border-white/20 rounded-3xl p-8 text-center text-white transition">
          <h3 class="text-2xl font-bold">Schedule</h3>
          <p class="mt-3 text-white/80">Registration timeline, preparation, and contest day flow.</p>
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
