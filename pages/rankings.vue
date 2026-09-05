<template>
  <div class="content-page">
    <h1>WRITTEN EXAM RANKINGS</h1>
    <p class="page-intro">
      YIMO II. These rankings are based on the <strong>written exam only</strong>
      and do not include final round results. {{ note }}
    </p>

    <p class="tabs-hint">Select a division:</p>
    <div class="division-tabs">
      <button
        v-for="division in divisions"
        :key="division.key"
        type="button"
        class="division-tab"
        :class="{ 'is-active': activeDivision === division.key }"
        @click="activeDivision = division.key"
      >
        {{ division.label }}
      </button>
    </div>

    <section>
      <h2>Overall Top 20</h2>
      <ol class="rank-list">
        <li v-for="(entry, i) in active.overall" :key="i" class="rank-row">
          <span class="rank-number">{{ entry.rank }}</span>
          <span class="rank-name">{{ entry.name }}</span>
          <span class="rank-country">{{ entry.country || '—' }}</span>
        </li>
      </ol>
    </section>

    <section>
      <h2>Top 5 Per Country</h2>
      <div class="country-grid">
        <div v-for="group in active.countries" :key="group.country" class="country-card">
          <h3>{{ group.country }}</h3>
          <ol class="rank-list">
            <li v-for="(entry, i) in group.entries" :key="i" class="rank-row">
              <span class="rank-number">{{ entry.rank }}</span>
              <span class="rank-name">{{ entry.name }}</span>
            </li>
          </ol>
        </div>
      </div>
    </section>

    <p><nuxt-link to="/archive">&larr; Back to the archive</nuxt-link></p>
  </div>
</template>

<script>
import rankings from '~/data/rankings.json'

export default {
  data() {
    return {
      /* ?division=div2 lets the archive link straight to a division. */
      activeDivision: rankings[this.$route.query.division] ? this.$route.query.division : 'div1',
      divisions: [
        { key: 'div1', label: 'Division 1' },
        { key: 'div2', label: 'Division 2' },
      ],
      note: rankings.div1.note,
    }
  },
  computed: {
    active() {
      return rankings[this.activeDivision]
    },
  },
}
</script>

<style scoped>
.tabs-hint {
  margin: 0 0 0.6rem;
  color: var(--text-dim);
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.division-tabs {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.division-tab {
  padding: 0.55rem 1.2rem;
  border: 1px solid var(--line-strong);
  border-radius: 999px;
  background: transparent;
  color: var(--text-dim);
  font: inherit;
  font-weight: 800;
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease;
}

.division-tab:hover {
  border-color: var(--accent);
}

.division-tab.is-active {
  border-color: var(--accent);
  background: var(--accent);
  color: var(--on-accent);
}

.rank-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.3rem;
}

.rank-row {
  display: grid;
  grid-template-columns: 2.2rem minmax(0, 1fr) auto;
  align-items: baseline;
  gap: 0.75rem;
  margin: 0;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  background: var(--surface);
}

.country-card .rank-row {
  grid-template-columns: 2.2rem minmax(0, 1fr);
  background: transparent;
  padding: 0.3rem 0;
}

.rank-number {
  font-variant-numeric: tabular-nums;
  font-weight: 900;
  color: var(--accent-soft);
}

.rank-name {
  color: var(--text);
  font-weight: 600;
}

.rank-country {
  color: var(--text-dim);
  font-size: 0.85rem;
  text-align: right;
}

.country-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.25rem;
}

.country-card {
  padding: 1.1rem 1.25rem;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--panel);
}

.country-card h3 {
  margin: 0 0 0.6rem;
  color: var(--text);
  font-size: 1rem;
  font-weight: 800;
}
</style>
