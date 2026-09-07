<template>
  <div class="content-page">
    <h1>Chapters</h1>
    <p class="page-intro">
      Our chapters focus on providing accessible math and computer science
      education to under-resourced schools.
    </p>

    <section id="where-we-are">
      <h2>Where we are</h2>
      <p>
        Every chapter is run by a student lead who brings our material to their
        own community.
      </p>

      <div class="chapter-stats">
        <div v-for="stat in chapterStats" :key="stat.label" class="chapter-stat">
          <strong>{{ stat.value }}</strong>
          <span>{{ stat.label }}</span>
        </div>
      </div>

      <div class="chapter-countries">
        <div v-for="country in chapters" :key="country.country" class="chapter-country">
          <p class="chapter-country-head">
            <span class="chapter-flag" aria-hidden="true">{{ country.flag }}</span>
            <span class="chapter-country-name">{{ country.country }}</span>
            <span class="chapter-count">
              {{ country.locations.length }}
              {{ country.locations.length === 1 ? 'chapter' : 'chapters' }}
            </span>
          </p>
          <ul class="chapter-location-list">
            <li v-for="location in country.locations" :key="location.name">
              <span class="chapter-location-name">{{ location.name }}</span>
              <a :href="'mailto:' + location.contact">{{ location.contact }}</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      /* Live chapters, grouped by country. `continent` only drives the
         continent count in the stats row. */
      chapters: [
        {
          country: 'Uzbekistan', flag: '🇺🇿', continent: 'Asia',
          locations: [
            { name: 'Tashkent Z', contact: 'vakhabova25@gmail.com' },
            { name: 'Tashkent A', contact: 'abdulazizsfrv3000@gmail.com' },
            { name: 'Gulistan', contact: 'bunyodroziqulov0506@gmail.com' },
            { name: 'Nurota', contact: 'ochilovaodina35@gmail.com' },
          ],
        },
        {
          country: 'Pakistan', flag: '🇵🇰', continent: 'Asia',
          locations: [
            { name: 'Islamabad A', contact: 'dr.nidaamin@gmail.com' },
            { name: 'Islamabad M', contact: 'mahrukh.fm1@gmail.com' },
            { name: 'Gujranwala Cantt', contact: 'abdullahahmad7869@gmail.com' },
            { name: 'Faisalabad', contact: 'sumama138c@gmail.com' },
          ],
        },
        {
          country: 'Ethiopia', flag: '🇪🇹', continent: 'Africa',
          locations: [{ name: 'Hawassa', contact: 'selamzenbaba178@gmail.com' }],
        },
        {
          country: 'Kazakhstan', flag: '🇰🇿', continent: 'Asia',
          locations: [{ name: 'Oskemen', contact: 'zeresha.e.n.09@gmail.com' }],
        },
        {
          country: 'Malaysia', flag: '🇲🇾', continent: 'Asia',
          locations: [{ name: 'Subang Jaya', contact: 'mammetmyrat88@gmail.com' }],
        },
        {
          country: 'Vietnam', flag: '🇻🇳', continent: 'Asia',
          locations: [{ name: 'Ho Chi Minh City', contact: 'nguyendinhtrongkhang2212@gmail.com' }],
        },
        {
          country: 'United States', flag: '🇺🇸', continent: 'North America',
          locations: [{ name: 'Memphis', contact: 'mukatirashay@gmail.com' }],
        },
      ],
    }
  },
  computed: {
    /* Counted from the list above so the headline numbers cannot drift out of
       step with the chapters actually shown. */
    chapterStats() {
      return [
        { value: this.chapters.reduce((n, c) => n + c.locations.length, 0), label: 'Chapters' },
        { value: this.chapters.length, label: 'Countries' },
        { value: new Set(this.chapters.map((c) => c.continent)).size, label: 'Continents' },
      ]
    },
  },
  head() {
    return {
      title: 'YIMO Chapters',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'YIMO chapters bringing math and computer science education to under-resourced schools worldwide.',
        },
      ],
    }
  },
}
</script>

<style scoped>
.chapter-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  margin: 1.75rem 0 2.25rem;
}

.chapter-stat {
  padding: 1.1rem 1.25rem;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--panel);
  text-align: center;
}

.chapter-stat strong {
  display: block;
  color: var(--text);
  font-size: clamp(1.9rem, 4vw, 2.6rem);
  font-weight: 900;
  line-height: 1;
}

.chapter-stat span {
  display: block;
  margin-top: 0.4rem;
  color: var(--accent-soft);
  font-size: 0.7rem;
  font-weight: 900;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.chapter-countries {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.25rem;
}

.chapter-country {
  padding: 1.25rem;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--panel);
}

.chapter-country-head {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0 0 0.9rem;
}

.chapter-flag {
  font-size: 1.35rem;
  line-height: 1;
}

.chapter-country-name {
  color: var(--text);
  font-weight: 800;
}

.chapter-count {
  color: var(--text-faint);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.chapter-location-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.7rem;
}

.chapter-location-list li {
  display: grid;
  gap: 0.15rem;
}

.chapter-location-name {
  color: var(--text);
  font-weight: 700;
  font-size: 0.92rem;
}

.chapter-location-list a {
  color: var(--accent-soft);
  font-size: 0.78rem;
  text-decoration: none;
  overflow-wrap: anywhere;
}

.chapter-location-list a:hover {
  text-decoration: underline;
}
</style>
