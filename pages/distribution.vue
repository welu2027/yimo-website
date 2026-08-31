<template>
  <div class="content-page">
    <h1>Score Distribution</h1>
    <p class="page-intro">
      Award cutoffs by contest window and division, for each past YIMO.
    </p>

    <section>
      <ul class="cutoff-key">
        <li><strong>Finalist</strong> advanced to the final round</li>
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

    <template v-for="contest in contests">
      <section :key="contest.name" class="contest-block">
        <h2>{{ contest.name }}</h2>
        <p>All scores are out of {{ contest.maxScore }}.</p>

        <div v-for="group in contest.groups" :key="group.title" class="cutoff-group">
          <p class="cutoff-group-title">{{ group.title }}</p>
          <div class="cutoff-table">
            <div
              v-for="row in group.rows"
              :key="row.label"
              class="cutoff-row"
              :class="row.className"
            >
              <span class="cutoff-label">{{ row.label }}</span>
              <span class="cutoff-value">{{ row.value }}<em>/{{ contest.maxScore }}</em></span>
            </div>
          </div>
        </div>
      </section>
    </template>

    <p><nuxt-link to="/archive">&larr; Back to the archive</nuxt-link></p>
  </div>
</template>

<script>
/* Cutoffs are the minimum qualifying score. `median` is optional - it was only
   published for YIMO 1. */
const build = (title, { finalist, gold, silver, bronze, median }) => ({
  title,
  rows: [
    { label: 'Finalist', value: `≥ ${finalist}`, className: 'row-finalist' },
    { label: 'Gold', value: `≥ ${gold}`, className: 'row-gold' },
    { label: 'Silver', value: `≥ ${silver}`, className: 'row-silver' },
    { label: 'Bronze', value: `≥ ${bronze}`, className: 'row-bronze' },
    ...(median === undefined
      ? []
      : [{ label: 'Median', value: String(median), className: 'row-median' }]),
  ],
})

export default {
  data() {
    return {
      contests: [
        {
          name: 'YIMO II',
          maxScore: 20,
          groups: [
            build('Division 1, Window A', { finalist: 17, gold: 18, silver: 16, bronze: 13 }),
            build('Division 1, Window B', { finalist: 17, gold: 17, silver: 13, bronze: 11 }),
            build('Division 2, Window A', { finalist: 19, gold: 18, silver: 15, bronze: 12 }),
            build('Division 2, Window B', { finalist: 19, gold: 18, silver: 15, bronze: 12 }),
          ],
        },
        {
          name: 'YIMO 1',
          maxScore: 105,
          groups: [
            build('Window A, Division 1', { finalist: 31, gold: 59, silver: 48, bronze: 37, median: 23 }),
            build('Window A, Division 2', { finalist: 71, gold: 81, silver: 64, bronze: 48, median: 31 }),
            build('Window B, Division 1', { finalist: 30, gold: 58, silver: 50, bronze: 30, median: 11 }),
            build('Window B, Division 2', { finalist: 81, gold: 88, silver: 81, bronze: 67, median: 47 }),
          ],
        },
      ],
    }
  },
}
</script>

<style scoped>
.cutoff-key {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 0.5rem 1.5rem;
  padding-left: 1.25rem;
}

.cutoff-note {
  margin-top: 1rem;
}

.contest-block {
  margin-bottom: 3.5rem;
}

.cutoff-group {
  margin-top: 1.75rem;
}

.cutoff-group-title {
  margin-bottom: 0.6rem;
  color: var(--text);
  font-weight: 800;
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
  color: var(--text);
}

/* The denominator is the same on every row, so it sits back from the score. */
.cutoff-value em {
  font-style: normal;
  font-weight: 600;
  color: var(--text-faint);
}
</style>
