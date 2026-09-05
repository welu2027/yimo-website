<template>
  <div class="content-page">
    <h1>Contest Archive</h1>
    <p class="page-intro">Download contest materials from past YIMO competitions below.</p>

    <section id="yimo-ii">
      <h2>YIMO II</h2>
      <div class="section-split">
        <div class="section-links">
        <ul>
        <li><strong>Written Exam Rankings:</strong> <nuxt-link to="/rankings">View →</nuxt-link></li>
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
        </div>

        <aside class="section-stats">
          <p class="subhead">Participation</p>
          <table class="stats-table">
            <thead>
              <tr><th>Division</th><th>Window</th><th>Registrants</th><th>Countries</th></tr>
            </thead>
            <tbody>
              <tr v-for="row in yimo2Stats" :key="row.division + row.window">
                <td>{{ row.division }}</td>
                <td>{{ row.window }}</td>
                <td class="num">{{ row.registrants }}</td>
                <td class="num">{{ row.countries }}</td>
              </tr>
            </tbody>
          </table>
        </aside>
      </div>
    </section>

    <section class="flyer-section">
      <a href="/YIMO_2026_Flyer.pdf" target="_blank" rel="noopener" class="flyer-link">
        <img src="/yimo-2026-flyer.png" alt="YIMO 2026 flyer" />
      </a>
    </section>

    <section>
      <h2>YIMO 1</h2>
      <div class="section-split">
        <div class="section-links">
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
        </div>

        <aside class="section-stats">
          <p class="subhead">Participation</p>
          <table class="stats-table">
            <thead>
              <tr><th>Division</th><th>Window</th><th>Registrants</th><th>Countries</th></tr>
            </thead>
            <tbody>
              <tr v-for="row in yimo1Stats" :key="row.division + row.window">
                <td>{{ row.division }}</td>
                <td>{{ row.window }}</td>
                <td class="num">{{ row.registrants }}</td>
                <td class="num">{{ row.countries }}</td>
              </tr>
            </tbody>
          </table>
        </aside>
      </div>
    </section>

    <section>
      <p class="subhead">Problem of the Day</p>
      <ul>
        <li><strong>POTD Archive:</strong> <nuxt-link to="/potd">View →</nuxt-link></li>
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
      /* Registration counts by division and window. */
      yimo2Stats: [
        { division: 'Div 1 (Advanced)', window: 'A', registrants: 404, countries: '~62' },
        { division: 'Div 1 (Advanced)', window: 'B', registrants: 363, countries: '~70' },
        { division: 'Div 2 (Beginner)', window: 'A', registrants: 921, countries: '~82' },
        { division: 'Div 2 (Beginner)', window: 'B', registrants: 946, countries: '~104' },
      ],
      yimo1Stats: [
        { division: 'Div 1 (Advanced)', window: 'A', registrants: 50, countries: '~20' },
        { division: 'Div 1 (Advanced)', window: 'B', registrants: 52, countries: '~22' },
        { division: 'Div 2 (Beginner)', window: 'A', registrants: 100, countries: '~28' },
        { division: 'Div 2 (Beginner)', window: 'B', registrants: 100, countries: '~32' },
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
.section-split {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 2.5rem;
  align-items: start;
}

.section-stats {
  min-width: 0;
}

.stats-table {
  border-collapse: collapse;
  font-size: 0.85rem;
}

.stats-table th,
.stats-table td {
  padding: 0.45rem 0.85rem;
  text-align: left;
  white-space: nowrap;
  border-bottom: 1px solid var(--line);
}

.stats-table th {
  color: var(--text);
  font-weight: 800;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: var(--surface);
}

.stats-table td {
  color: var(--text-dim);
}

.stats-table tbody tr:last-child td {
  border-bottom: 0;
}

.stats-table .num {
  text-align: right;
  font-variant-numeric: tabular-nums;
  color: var(--text);
  font-weight: 700;
}

.flyer-section {
  display: flex;
  justify-content: center;
}

.flyer-link img {
  display: block;
  width: 420px;
  max-width: 100%;
  border-radius: 10px;
}

/* Below this the table would squeeze the link list, so it drops underneath. */
@media (max-width: 820px) {
  .section-split {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  .stats-table {
    width: 100%;
  }
}

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
