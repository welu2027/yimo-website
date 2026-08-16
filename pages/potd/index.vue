<template>
  <div class="content-page">
    <h1>Problem of the Day</h1>
    <p class="page-intro">
      One problem per division, every day. Open a problem to see the full worked solution.
    </p>

    <section v-for="group in groupedProblems" :key="group.division">
      <h2>Division {{ group.division }}</h2>
      <div class="potd-carousel">
        <button
          type="button"
          class="carousel-arrow"
          :aria-label="`Previous Division ${group.division} problem`"
          @click="step(group.division, -1, group.entries.length)"
        >
          &#8249;
        </button>

        <nuxt-link
          :key="currentEntry(group).slug"
          :to="`/potd/${currentEntry(group).slug}`"
          class="potd-card"
        >
          <p class="potd-date">{{ formatDate(currentEntry(group).date) }}</p>
          <!-- eslint-disable-next-line vue/no-v-html -- escaped in renderMarkdown -->
          <div class="md potd-problem" v-html="renderMarkdown(currentEntry(group).problem)"></div>
          <p class="potd-open">View solution &rarr;</p>
        </nuxt-link>

        <button
          type="button"
          class="carousel-arrow"
          :aria-label="`Next Division ${group.division} problem`"
          @click="step(group.division, 1, group.entries.length)"
        >
          &#8250;
        </button>
      </div>
      <p class="carousel-count">
        {{ activeIndex[group.division] + 1 }} / {{ group.entries.length }}
      </p>
    </section>
  </div>
</template>

<script>
import potdProblems from '~/data/potd'
import { renderMarkdown } from '~/utils/markdown'
import { formatDate, renderMathIn } from '~/utils/potd'

export default {
  data() {
    return {
      problems: potdProblems,
      // One carousel position per division, keyed by division number.
      activeIndex: {},
    }
  },
  computed: {
    groupedProblems() {
      const divisions = [...new Set(this.problems.map((entry) => entry.division))].sort()
      return divisions.map((division) => ({
        division,
        // Newest first, so each carousel opens on the most recent problem.
        entries: this.problems
          .filter((entry) => entry.division === division)
          .slice()
          .sort((a, b) => b.date.localeCompare(a.date)),
      }))
    },
  },
  created() {
    const start = {}
    this.groupedProblems.forEach((group) => {
      start[group.division] = 0
    })
    this.activeIndex = start
  },
  mounted() {
    this.renderMath()
  },
  updated() {
    this.renderMath()
  },
  methods: {
    renderMarkdown,
    formatDate,
    currentEntry(group) {
      return group.entries[this.activeIndex[group.division] || 0]
    },
    /** Move one card in `direction`, wrapping around at either end. */
    step(division, direction, total) {
      const current = this.activeIndex[division] || 0
      this.$set(this.activeIndex, division, (current + direction + total) % total)
    },
    renderMath() {
      renderMathIn(this.$el)
    },
  },
}
</script>

<style scoped>
.potd-carousel {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* Transparent hit-target sitting immediately beside the card; only the
   chevron itself is visible, and it warms to the accent colour on hover. */
.carousel-arrow {
  flex: none;
  padding: 0.25rem 0.4rem;
  border: 0;
  background: transparent;
  color: var(--text-dim);
  font-size: 2.2rem;
  line-height: 1;
  cursor: pointer;
  transition: color 0.2s;
}

.carousel-arrow:hover {
  color: var(--accent);
}

.carousel-count {
  margin: 0.75rem 0 0;
  text-align: center;
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  color: var(--text-dim);
}

.potd-card {
  display: block;
  flex: 1 1 auto;
  min-width: 0;
  /* .content-page a underlines every link, which ran a line under every word
     of the problem statement since the whole card is one link. */
  text-decoration: none;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--line-strong);
  border-radius: 12px;
  padding: 1.5rem;
  transition: border-color 0.2s, background 0.2s;
}

.potd-card:hover {
  background: rgba(255, 255, 255, 0.07);
  border-color: rgba(249, 115, 22, 0.3);
}

.potd-date {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  margin: 0 0 0.5rem;
}

.potd-problem {
  font-size: 0.95rem;
  color: var(--text-dim);
  line-height: 1.9;
}

.potd-open {
  margin: 1rem 0 0;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: var(--accent);
}

.potd-card:hover .potd-open {
  color: var(--accent-soft);
}
</style>
