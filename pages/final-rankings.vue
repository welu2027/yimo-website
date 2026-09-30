<template>
  <div class="content-page">
    <h1>FINAL EXAM RANKINGS</h1>
    <p class="page-intro">
      YIMO II. These rankings are based on the <strong>final round only</strong>
      and do not include written round results. This list includes only
      participants who have given consent to be featured. Some participants may
      not appear.
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

    <section v-for="window in active" :key="window.title">
      <h2>{{ window.title }}</h2>
      <ol class="rank-list">
        <li v-for="(entry, i) in window.entries" :key="i" class="rank-row">
          <span :class="['rank-place', entry.rankClass]">{{ entry.place }}</span>
          <span class="rank-name">{{ entry.name }}</span>
          <span v-if="entry.showScore" class="rank-score">{{ entry.score }}<em>/20</em></span>
        </li>
      </ol>
    </section>

    <p><nuxt-link to="/archive">&larr; Back to the archive</nuxt-link></p>
  </div>
</template>

<script>
import { competitionRanks, medalClass, ordinalRank, showsScore } from '~/utils/competition-ranks.mjs'

/* Final round scoring: 7 points per proof, 3 per computational problem. */
const e = (name, score) => ({ name, score })

export default {
  data() {
    return {
      activeDivision: 'div1',
      divisions: [
        { key: 'div1', label: 'Division 1' },
        { key: 'div2', label: 'Division 2' },
      ],
      results: {
        div1: [
          {
            title: 'Window A',
            entries: [
              e('Kalymtay Galym', 20),
              e('Chinbuyan Tuvshintur', 20),
              e('Ritesh Kumar Mohapatra', 17),
              e('Zaah Michael Kodzo', 17),
              e('Garvit Pandey', 16),
              e('Lim, Jovan Valencio', 15),
              e('Bera Gumruk', 14),
              e('Safarboyev Behruzbek', 13),
              e('Abhik Das', 10),
              e('Koharu Shibata', 10),
              e('Asylkhan Aizada', 9),
              e('Carlo Bryan Sidabutar', 7),
            ],
          },
          {
            title: 'Window B',
            entries: [
              e('Aryav Karmakar', 20),
              e('Rishaan Bheda', 20),
              e('Tetteh Francis Etornam Marvin', 17),
              e('Tarek Abdellatif', 17),
              e('Abdulaziz Safarov', 13),
              e('Mazen Abdellatif', 3),
              e('Manh Huy Luong', 0),
            ],
          },
        ],
        div2: [
          {
            title: 'Window A',
            entries: [
              e('Azizbek Gayratov', 20),
              e('Nguyen Dinh Trong Khang', 20),
              e('Deepanshu Gupta', 9),
              e('Unnamed participant', 7),
              e('Alzhan Darmen Abayuli', 6),
              e('Nathalie Martin', 6),
              e('Unnamed participant', 5),
              e('Vishnav Nandigam', 4),
            ],
          },
          {
            title: 'Window B',
            entries: [
              e('Mohammed Hammad Zakir', 20),
              e('Sofiia Kvanina', 20),
              e('Ayan Nagar', 17),
              e('Baye Sidy Faye', 13),
              e('Shay Mukatira', 13),
              e('Altynbek Mansur', 3),
              e('Shubhra Shukla', 2),
              e('Demessinov Alzhan', 0),
            ],
          },
        ],
      },
    }
  },
  computed: {
    active() {
      return this.results[this.activeDivision].map((window) => {
        const ranks = competitionRanks(window.entries.map((entry) => entry.score))
        return {
          title: window.title,
          entries: window.entries.map((entry, index) => ({
            ...entry,
            rank: ranks[index],
            place: ordinalRank(ranks[index]),
            rankClass: medalClass(ranks[index]),
            showScore: showsScore(ranks[index]),
          })),
        }
      })
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
  grid-template-columns: 3rem minmax(0, 1fr) auto;
  align-items: baseline;
  gap: 0.75rem;
  margin: 0;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  background: var(--surface);
}

.rank-place {
  justify-self: start;
  padding: 0.05rem 0.25rem;
  border-radius: 4px;
  font-variant-numeric: tabular-nums;
  font-weight: 900;
  color: var(--accent-soft);
  font-size: 0.85rem;
}

.rank-place.rank-gold { color: #684c0d; background: #f2e4b5; }
.rank-place.rank-silver { color: #45545d; background: #e2e6e8; }
.rank-place.rank-bronze { color: #6e3e1f; background: #efd5bf; }

.rank-score {
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: var(--text);
  text-align: right;
}

.rank-score em {
  font-style: normal;
  font-weight: 600;
  color: var(--text-faint);
}

.rank-name {
  color: var(--text);
  font-weight: 600;
}

</style>
