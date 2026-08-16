<template>
  <div v-if="entry" class="content-page">
    <nuxt-link to="/potd" class="potd-back">&larr; All problems</nuxt-link>

    <p class="section-kicker">Division {{ entry.division }}</p>
    <h1>{{ formatDate(entry.date) }}</h1>

    <section>
      <h2>Problem</h2>
      <!-- eslint-disable-next-line vue/no-v-html -- escaped in renderMarkdown -->
      <div class="md" v-html="renderMarkdown(entry.problem)"></div>
    </section>

    <section v-if="entry.answer">
      <h2>Answer</h2>
      <details class="potd-reveal" open>
        <summary>Show the answer</summary>
        <!-- eslint-disable-next-line vue/no-v-html -- escaped in renderMarkdown -->
        <div class="md" v-html="renderMarkdown(entry.answer)"></div>
      </details>
    </section>

    <section v-if="entry.solution">
      <h2>Solution</h2>
      <details class="potd-reveal" open>
        <summary>Show the full solution</summary>
        <!-- eslint-disable-next-line vue/no-v-html -- escaped in renderMarkdown -->
        <div class="md" v-html="renderMarkdown(entry.solution)"></div>
      </details>
    </section>

    <nav class="potd-nav">
      <nuxt-link v-if="previous" :to="`/potd/${previous.slug}`" class="potd-nav-link">
        &larr; {{ formatDate(previous.date) }}
      </nuxt-link>
      <span v-else></span>
      <nuxt-link v-if="next" :to="`/potd/${next.slug}`" class="potd-nav-link">
        {{ formatDate(next.date) }} &rarr;
      </nuxt-link>
    </nav>
  </div>

  <div v-else class="content-page">
    <h1>Problem not found</h1>
    <p class="page-intro">
      That problem is not in the archive.
      <nuxt-link to="/potd">Back to Problem of the Day</nuxt-link>.
    </p>
  </div>
</template>

<script>
import potdProblems from '~/data/potd'
import { renderMarkdown } from '~/utils/markdown'
import { formatDate, renderMathIn } from '~/utils/potd'

export default {
  computed: {
    entry() {
      return potdProblems.find((problem) => problem.slug === this.$route.params.slug) || null
    },
    /** Neighbours within the same division, oldest to newest. */
    siblings() {
      if (!this.entry) return []
      return potdProblems
        .filter((problem) => problem.division === this.entry.division)
        .slice()
        .sort((a, b) => a.date.localeCompare(b.date))
    },
    previous() {
      const at = this.siblings.indexOf(this.entry)
      return at > 0 ? this.siblings[at - 1] : null
    },
    next() {
      const at = this.siblings.indexOf(this.entry)
      return at !== -1 && at + 1 < this.siblings.length ? this.siblings[at + 1] : null
    },
  },
  head() {
    if (!this.entry) return { title: 'Problem not found' }
    return {
      title: `Division ${this.entry.division} - ${formatDate(this.entry.date)} | YIMO POTD`,
    }
  },
  watch: {
    // Moving between problems reuses this component, so re-typeset the new one
    // and start the reader at the top rather than mid-solution.
    '$route.params.slug'() {
      this.$nextTick(() => {
        this.renderMath()
        window.scrollTo(0, 0)
      })
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
.potd-back {
  display: inline-block;
  margin-bottom: 1.5rem;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: var(--accent);
}

.potd-back:hover {
  color: var(--accent-soft);
}

.content-page h1 {
  margin-bottom: 2rem;
}

.potd-reveal {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--line-strong);
  border-radius: 12px;
  padding: 1rem 1.5rem;
}

.potd-reveal > summary {
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--accent);
  list-style: none;
}

.potd-reveal > summary::-webkit-details-marker {
  display: none;
}

.potd-reveal > summary::before {
  content: '+ ';
}

.potd-reveal[open] > summary::before {
  content: '- ';
}

.potd-reveal[open] > summary {
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--line);
}

.potd-nav {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--line);
}

.potd-nav-link {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--accent);
}

.potd-nav-link:hover {
  color: var(--accent-soft);
}
</style>
