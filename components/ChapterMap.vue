<template>
  <div class="chapter-map">
    <div ref="stage" class="chapter-map-stage">
      <svg
        ref="svg"
        :viewBox="`0 0 ${width} ${height}`"
        class="chapter-map-svg"
        role="group"
        aria-label="World map of chapters. Select a highlighted country to list its chapters."
      >
        <path
          v-for="shape in shapes"
          :key="shape.key"
          :d="shape.d"
          :fill="shape.fill"
          class="map-country"
          :class="{ 'has-chapters': shape.chapter, 'is-selected': isSelected(shape.chapter) }"
          :tabindex="shape.chapter ? 0 : null"
          :role="shape.chapter ? 'button' : null"
          :aria-label="shape.chapter ? label(shape.chapter) : null"
          :aria-pressed="shape.chapter ? String(isSelected(shape.chapter)) : null"
          @pointermove="shape.chapter && showTipAtPointer(shape.chapter, $event)"
          @pointerleave="tip = null"
          @focus="shape.chapter && showTipAtPoint(shape.chapter, shape.centroid)"
          @blur="tip = null"
          @click="shape.chapter && choose(shape.chapter)"
          @keydown.enter.prevent="shape.chapter && choose(shape.chapter)"
          @keydown.space.prevent="shape.chapter && choose(shape.chapter)"
        />

        <!-- Dots for countries too small to click, or missing from the 110m shapes.
             Only a country with no shape is its own tab stop; the rest already
             have a focusable path. -->
        <g
          v-for="marker in markers"
          :key="`marker-${marker.chapter.country}`"
          class="map-marker"
          :class="{ 'is-selected': isSelected(marker.chapter) }"
          :tabindex="marker.hasShape ? null : 0"
          :role="marker.hasShape ? null : 'button'"
          :aria-label="marker.hasShape ? null : label(marker.chapter)"
          :aria-hidden="marker.hasShape ? 'true' : null"
          @pointermove="showTipAtPointer(marker.chapter, $event)"
          @pointerleave="tip = null"
          @focus="showTipAtPoint(marker.chapter, [marker.x, marker.y])"
          @blur="tip = null"
          @click="choose(marker.chapter)"
          @keydown.enter.prevent="choose(marker.chapter)"
          @keydown.space.prevent="choose(marker.chapter)"
        >
          <circle :cx="marker.x" :cy="marker.y" r="12" class="map-marker-hit" />
          <circle :cx="marker.x" :cy="marker.y" r="4.5" :fill="marker.fill" class="map-marker-dot" />
        </g>
      </svg>

      <div
        v-if="tip"
        class="map-tooltip"
        :style="{ left: `${tip.x}px`, top: `${tip.y}px` }"
        aria-hidden="true"
      >
        <strong>{{ tip.count }} {{ tip.count === 1 ? 'chapter' : 'chapters' }}</strong>
        <span>{{ tip.country }}</span>
      </div>
    </div>

    <div class="map-legend">
      <span class="map-legend-title">Chapters per country</span>
      <span v-for="bin in legend" :key="bin.label" class="map-legend-item">
        <i :style="{ background: bin.fill }" aria-hidden="true"></i>{{ bin.label }}
      </span>
    </div>
  </div>
</template>

<script>
import { geoCentroid, geoEqualEarth, geoPath } from 'd3-geo'
import { feature } from 'topojson-client'
import world from 'world-atlas/countries-110m.json'

const WIDTH = 960

/* Chapter country name -> ISO 3166-1 numeric, the id world-atlas uses. */
const ISO_NUMERIC = {
  Afghanistan: '004', Algeria: '012', Angola: '024', Bangladesh: '050', Canada: '124',
  Chile: '152', China: '156', Egypt: '818', Ethiopia: '231', India: '356', Indonesia: '360',
  Iraq: '368', Japan: '392', Kazakhstan: '398', Kyrgyzstan: '417', Lebanon: '422',
  Malaysia: '458', Mauritius: '480', Mexico: '484', Mongolia: '496', Morocco: '504',
  Myanmar: '104', Nepal: '524', Pakistan: '586', Romania: '642', Russia: '643', Rwanda: '646',
  Serbia: '688', 'South Africa': '710', 'United Arab Emirates': '784', 'United Kingdom': '826',
  'United States': '840', Uzbekistan: '860', Vietnam: '704',
}

/* Countries absent from the 110m shapes, placed by [longitude, latitude]. */
const FALLBACK_COORDS = { Mauritius: [57.55, -20.25] }

/* Below this projected area (px² at WIDTH) a country is too small to click,
   especially once the map is scaled down to phone width, so it also gets a dot. */
const MIN_SHAPE_AREA = 130

const NEUTRAL_FILL = '#e4ddcf'

/* One-hue sequential ramp, darker = more chapters. Validated as an ordinal
   ramp against the page surface (monotone lightness, step gaps, contrast). */
const BINS = [
  { min: 10, fill: '#874516', label: '10+' },
  { min: 5, fill: '#b06027', label: '5-9' },
  { min: 2, fill: '#d27d3e', label: '2-4' },
  { min: 1, fill: '#e8995c', label: '1' },
]
const fillFor = (count) => BINS.find((bin) => count >= bin.min).fill

/* Projection work is identical for every visitor, so do it once at import. */
const land = feature(world, world.objects.countries).features.filter((f) => f.id !== '010')
const projection = geoEqualEarth().fitWidth(WIDTH, { type: 'FeatureCollection', features: land })
const path = geoPath(projection)
const HEIGHT = Math.ceil(path.bounds({ type: 'FeatureCollection', features: land })[1][1]) + 4
const geometry = land.map((f) => ({
  id: f.id,
  key: f.id || f.properties.name,
  d: path(f),
  area: path.area(f),
  centroid: projection(geoCentroid(f)),
}))
const geometryById = new Map(geometry.filter((g) => g.id).map((g) => [g.id, g]))

export default {
  props: {
    countries: { type: Array, required: true },
    selected: { type: String, default: null },
  },
  data() {
    return { width: WIDTH, height: HEIGHT, tip: null }
  },
  computed: {
    chapterById() {
      const byId = new Map()
      for (const country of this.countries) {
        const id = ISO_NUMERIC[country.country]
        if (id) byId.set(id, country)
        else if (process.env.NODE_ENV !== 'production') {
          console.warn(`ChapterMap: no ISO code for "${country.country}", it will not appear on the map.`)
        }
      }
      return byId
    },
    shapes() {
      return geometry
        .map((g) => {
          const chapter = (g.id && this.chapterById.get(g.id)) || null
          return { ...g, chapter, fill: chapter ? fillFor(chapter.locations.length) : NEUTRAL_FILL }
        })
        // Paint the selected country last so its outline is not covered.
        .sort((a, b) => Number(this.isSelected(a.chapter)) - Number(this.isSelected(b.chapter)))
    },
    markers() {
      const markers = []
      for (const country of this.countries) {
        const g = geometryById.get(ISO_NUMERIC[country.country])
        let point = null
        if (g && g.area < MIN_SHAPE_AREA) point = g.centroid
        else if (!g && FALLBACK_COORDS[country.country]) point = projection(FALLBACK_COORDS[country.country])
        if (point) {
          markers.push({
            chapter: country,
            hasShape: Boolean(g),
            x: point[0],
            y: point[1],
            fill: fillFor(country.locations.length),
          })
        }
      }
      return markers
    },
    legend() {
      return [{ label: 'None', fill: NEUTRAL_FILL }, ...BINS.slice().reverse()]
    },
  },
  methods: {
    isSelected(chapter) {
      return Boolean(chapter) && chapter.country === this.selected
    },
    label(chapter) {
      const n = chapter.locations.length
      return `${chapter.country}, ${n} ${n === 1 ? 'chapter' : 'chapters'}`
    },
    choose(chapter) {
      this.$emit('select', chapter.country)
    },
    showTipAtPointer(chapter, event) {
      const rect = this.$refs.stage.getBoundingClientRect()
      this.setTip(chapter, event.clientX - rect.left, event.clientY - rect.top)
    },
    showTipAtPoint(chapter, [x, y]) {
      const scale = this.$refs.svg.getBoundingClientRect().width / WIDTH
      this.setTip(chapter, x * scale, y * scale)
    },
    setTip(chapter, x, y) {
      this.tip = { country: chapter.country, count: chapter.locations.length, x, y }
    },
  },
}
</script>

<style scoped>
.chapter-map {
  margin: 0 0 1.25rem;
  padding: 1rem;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: #fbf9f5;
}

.chapter-map-stage {
  position: relative;
}

.chapter-map-svg {
  display: block;
  width: 100%;
  height: auto;
}

.map-country {
  stroke: #fbf9f5;
  stroke-width: 0.6px;
  transition: filter 0.15s ease;
}

.map-country.has-chapters {
  cursor: pointer;
}

.map-country.has-chapters:hover {
  filter: brightness(1.1);
}

.map-country.has-chapters:focus {
  outline: none;
  stroke: var(--text);
  stroke-width: 1.2px;
}

.map-country.is-selected {
  stroke: var(--text);
  stroke-width: 1.6px;
}

.map-marker {
  cursor: pointer;
  outline: none;
}

.map-marker-hit {
  fill: transparent;
}

/* A 2px surface ring separates the dot from the country shapes under it. */
.map-marker-dot {
  stroke: #fbf9f5;
  stroke-width: 2px;
}

.map-marker:hover .map-marker-dot,
.map-marker:focus .map-marker-dot,
.map-marker.is-selected .map-marker-dot {
  stroke: var(--text);
  stroke-width: 1.6px;
}

.map-tooltip {
  position: absolute;
  z-index: 2;
  display: grid;
  gap: 0.1rem;
  padding: 0.45rem 0.7rem;
  border: 1px solid var(--line-strong);
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0 6px 18px rgba(30, 58, 52, 0.14);
  transform: translate(-50%, calc(-100% - 12px));
  pointer-events: none;
  white-space: nowrap;
}

.map-tooltip strong {
  color: var(--text);
  font-size: 0.9rem;
  font-weight: 800;
}

.map-tooltip span {
  color: var(--text-dim);
  font-size: 0.78rem;
}

.map-legend {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.4rem 0.9rem;
  margin-top: 0.75rem;
  color: var(--text-dim);
  font-size: 0.78rem;
}

.map-legend-title {
  color: var(--text);
  font-weight: 800;
}

.map-legend-item {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

.map-legend-item i {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 3px;
}
</style>
