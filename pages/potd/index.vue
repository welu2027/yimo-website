<template>
  <div class="content-page">
    <h1>Problem of the Day</h1>
    <p class="page-intro">
      One problem per division, every day. Open a problem to see the full worked solution.
    </p>

    <section v-for="group in groupedProblems" :key="group.division">
      <h2>Division {{ group.division }}</h2>
      <div class="potd-list">
        <nuxt-link
          v-for="entry in group.entries"
          :key="entry.slug"
          :to="`/potd/${entry.slug}`"
          class="potd-card"
        >
          <p class="potd-date">{{ formatDate(entry.date) }}</p>
          <!-- eslint-disable-next-line vue/no-v-html -- escaped in renderMarkdown -->
          <div class="md potd-problem" v-html="renderMarkdown(entry.problem)"></div>
          <p class="potd-open">View solution &rarr;</p>
        </nuxt-link>
      </div>
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
    }
  },
  computed: {
    groupedProblems() {
      const divisions = [...new Set(this.problems.map((entry) => entry.division))].sort()
      return divisions.map((division) => ({
        division,
        entries: this.problems
          .filter((entry) => entry.division === division)
          .slice()
          .sort((a, b) => a.date.localeCompare(b.date)),
      }))
    },
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
    renderMath() {
      renderMathIn(this.$el)
    },
  },
}
</script>

<style scoped>
.potd-list {
  display: grid;
  gap: 1rem;
}

.potd-card {
  display: block;
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
