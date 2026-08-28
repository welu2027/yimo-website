<template>
  <div class="content-page">
    <h1>Score Distribution</h1>
    <p class="page-intro">
      Award cutoffs and medians for YIMO 1, listed by contest window and division.
    </p>

    <section>
      <ul class="cutoff-key">
        <li><strong>Finalist</strong> top 8 in the division</li>
        <li><strong>Gold</strong> top 10%</li>
        <li><strong>Silver</strong> top 20%</li>
        <li><strong>Bronze</strong> top 30%</li>
      </ul>
      <p class="cutoff-note">
        Cutoffs are the minimum score needed to reach each award. Because the
        finalist cutoff is a fixed count rather than a percentage, it can sit
        below the medal cutoffs in a division.
      </p>
    </section>

    <section v-for="group in distributions" :key="group.title">
      <h2>{{ group.title }}</h2>
      <div class="cutoff-table">
        <div v-for="row in group.rows" :key="row.label" class="cutoff-row" :class="row.className">
          <span class="cutoff-label">{{ row.label }}</span>
          <span class="cutoff-value">{{ row.value }}</span>
        </div>
      </div>
    </section>

    <p><nuxt-link to="/archive">&larr; Back to the archive</nuxt-link></p>
  </div>
</template>

<script>
/* Cutoffs are the minimum qualifying score; median is the division median. */
const build = (title, finalist, gold, silver, bronze, median) => ({
  title,
  rows: [
    { label: 'Finalist', value: `≥ ${finalist}`, className: 'row-finalist' },
    { label: 'Gold', value: `≥ ${gold}`, className: 'row-gold' },
    { label: 'Silver', value: `≥ ${silver}`, className: 'row-silver' },
    { label: 'Bronze', value: `≥ ${bronze}`, className: 'row-bronze' },
    { label: 'Median', value: String(median), className: 'row-median' },
  ],
})

export default {
  data() {
    return {
      distributions: [
        build('Window A — Division 1', 31, 59, 48, 37, 23),
        build('Window A — Division 2', 71, 81, 64, 48, 31),
        build('Window B — Division 1', 30, 58, 50, 30, 11),
        build('Window B — Division 2', 81, 88, 81, 67, 47),
      ],
    }
  },
}
</script>

<style scoped>
.cutoff-key {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: 0.5rem 1.5rem;
  padding-left: 1.25rem;
}

.cutoff-note {
  margin-top: 1rem;
}

.cutoff-table {
  display: grid;
  gap: 0.4rem;
}

.cutoff-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.6rem 0.9rem;
  border-left: 3px solid var(--accent);
  border-radius: 8px;
  background: var(--surface);
}

.row-gold {
  border-left-color: #c8971f;
}

.row-silver {
  border-left-color: #8d979d;
}

.row-bronze {
  border-left-color: #a2652f;
}

/* The median is context rather than an award, so it reads quieter. */
.row-median {
  border-left-color: var(--line-strong);
  background: transparent;
}

.cutoff-label {
  font-weight: 800;
  color: var(--text);
}

.cutoff-value {
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: var(--text-dim);
}
</style>
