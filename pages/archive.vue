<template>
  <div class="content-page">
    <h1>Contest Archive</h1>
    <p class="page-intro">Download contest materials from past YIMO competitions below.</p>

    <section>
      <h2>YIMO II</h2>
      <ul>
        <li><strong>Score Distribution:</strong> <nuxt-link to="/distribution#yimo-ii">View →</nuxt-link></li>
        <li><strong>Written Round Problems:</strong> <a href="/solutions/yimo-2-written-round-problems.pdf" target="_blank" rel="noopener">View →</a></li>
        <li><strong>Written Round Solutions:</strong> <a href="/solutions/yimo-2-written-round-solutions.pdf" target="_blank" rel="noopener">View →</a></li>
        <li><strong>Final Round Problems:</strong> <a href="/solutions/yimo-2-final-round-problems.pdf" target="_blank" rel="noopener">View →</a></li>
        <li><strong>Final Round Solutions:</strong> <a href="/solutions/yimo-2-final-round-solutions.pdf" target="_blank" rel="noopener">View →</a></li>
        <li><strong>Awards Ceremony:</strong> <a href="https://www.youtube.com/watch?v=_ggXrGdegq8" target="_blank" rel="noopener">Watch →</a></li>
        <li><strong>Awards Ceremony Slideshow:</strong> <a href="/solutions/yimo-2-awards-ceremony.pdf" target="_blank" rel="noopener">View →</a></li>
      </ul>

      <p class="subhead">Workshops</p>
      <ul>
        <li v-for="workshop in yimo2Workshops" :key="workshop.href">
          <strong>{{ workshop.title }}:</strong>
          <a :href="workshop.href" target="_blank" rel="noopener">Watch →</a>
        </li>
      </ul>
    </section>

    <section>
      <h2>YIMO 1</h2>
      <a href="/YIMO_2026_Flyer.pdf" target="_blank" rel="noopener" style="float:right;width:360px;max-width:55%;margin:0 0 1rem 1.5rem;">
        <img src="/yimo-2026-flyer.png" alt="YIMO 2026 flyer" style="display:block;width:100%;border-radius:10px;" />
      </a>
      <ul>
        <li><strong>Score Distribution:</strong> <nuxt-link to="/distribution#yimo-1">View →</nuxt-link></li>
        <li><strong>Written Round Problems:</strong> <a href="/solutions/yimo-1-written-round-problems.pdf" target="_blank" rel="noopener">View →</a></li>
        <li><strong>Written Round Solutions:</strong> <a href="/solutions/yimo-1-written-round-solutions.pdf" target="_blank" rel="noopener">View →</a></li>
        <li><strong>Final Round Problems:</strong> <a href="/solutions/yimo-1-final-round-problems.pdf" target="_blank" rel="noopener">View →</a></li>
        <li><strong>Final Round Solutions:</strong> <a href="/solutions/yimo-1-final-round-solutions.pdf" target="_blank" rel="noopener">View →</a></li>
        <li><strong>Window A Awards Ceremony:</strong> <a href="https://drive.google.com/file/d/1G-yiurPMI482UgBuHrC6nesXBHA9H1Vv/view?usp=sharing" target="_blank" rel="noopener">Watch →</a></li>
        <li><strong>Window B Awards Ceremony:</strong> <a href="https://drive.google.com/file/d/1U8lIAZQBRyUb5RTtIY40Q1zzih_q6iUM/view?usp=sharing" target="_blank" rel="noopener">Watch →</a></li>
      </ul>

      <p class="subhead">Workshops</p>
      <ul>
        <li v-for="workshop in yimo1Workshops" :key="workshop.href">
          <strong>{{ workshop.title }}:</strong>
          <a :href="workshop.href" target="_blank" rel="noopener">View →</a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      /* Streams from youtube.com/@YIMO-g5t/streams. */
      yimo2Workshops: [
        { title: 'Brawl Stars Workshop (Window A)', href: 'https://www.youtube.com/watch?v=kIiVYRFlnrY' },
        { title: 'Brawl Stars Workshop (Window B)', href: 'https://www.youtube.com/watch?v=rY8II50BStI' },
        { title: 'YIMO Brawl Stars', href: 'https://www.youtube.com/watch?v=wBk3Z_EG4Yc' },
      ],
      yimo1Workshops: [
        { title: 'Estimathon Workshop', href: 'https://drive.google.com/file/d/1oh6rpw89WBEReqoPNOspdsYvr8wfMhRN/view?usp=sharing' },
        { title: 'Public Health & Math Workshop', href: '/solutions/yimo-1-public-health-math-workshop.pdf' },
      ],
    }
  },
}
</script>

<style scoped>
/* .staff-subhead lives in index.vue's scoped block, so this page needs its
   own rule rather than borrowing that class name. */
.subhead {
  margin: 1.75rem 0 0.6rem;
  color: var(--accent-soft);
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.16em;
}
</style>
