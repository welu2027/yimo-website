<template>
  <div ref="page" class="yimo-redesign">
    <section id="top" class="story-panel hero-panel">
      <canvas ref="mathCanvas" class="math-canvas" aria-hidden="true"></canvas>
      <div class="geometry-field" aria-hidden="true">
        <svg class="geometry-form form-orbit" viewBox="0 0 220 170">
          <ellipse cx="96" cy="86" rx="92" ry="36" />
          <ellipse cx="118" cy="84" rx="92" ry="36" transform="rotate(58 118 84)" />
          <ellipse cx="112" cy="85" rx="92" ry="36" transform="rotate(-47 112 85)" />
          <circle cx="112" cy="85" r="80" />
          <path d="M28 84 L112 22 L194 126 L62 138 Z" />
        </svg>
        <svg class="geometry-form form-poly" viewBox="0 0 180 180">
          <polygon points="88,12 160,54 144,140 70,168 18,104" />
          <polygon points="88,12 144,140 18,104 160,54 70,168" />
          <circle cx="90" cy="90" r="70" />
        </svg>
        <svg class="geometry-form form-triangle" viewBox="0 0 170 150">
          <polygon points="22,124 78,18 148,116" />
          <circle cx="82" cy="86" r="48" />
          <line x1="78" y1="18" x2="82" y2="124" />
          <line x1="22" y1="124" x2="148" y2="116" />
        </svg>
        <svg class="geometry-form form-cyclic" viewBox="0 0 180 180">
          <circle cx="90" cy="90" r="70" />
          <polygon points="44,55 132,36 148,124 62,144" />
          <line x1="44" y1="55" x2="148" y2="124" />
          <line x1="132" y1="36" x2="62" y2="144" />
        </svg>
        <svg class="geometry-form form-prism" viewBox="0 0 190 160">
          <polygon points="42,34 124,22 166,74 82,88" />
          <polygon points="42,34 82,88 72,136 28,82" />
          <polygon points="82,88 166,74 150,124 72,136" />
          <line x1="124" y1="22" x2="150" y2="124" />
        </svg>
      </div>
      <div class="hero-copy">
        <div class="logo-stage" aria-label="Youth International Math Olympiad">
          <img class="hero-logo" src="/yimo-logo-gold.png" alt="YIMO logo" />
          <div class="word-wheel">
            <span
              v-for="word in identityWords"
              :key="word"
              class="wheel-word"
            >
              {{ word }}
            </span>
          </div>
        </div>
        <h1>YIMO</h1>
        <p class="hero-subtitle">
          Youth International Math Olympiad returns August 29 and 30, 2026.
          A global online contest for students who like clean problems, fair
          rounds, and a serious climb.
        </p>
        <div class="hero-actions">
          <a class="primary-action" href="https://docs.google.com/forms/d/e/1FAIpQLSeLKMy5cPHpOFhFUc8fukPBjMiJHl35aB3u7rkClPTw_VziVg/viewform" target="_blank" rel="noopener">Register</a>
          <a class="secondary-action" href="#format">Format</a>
        </div>
      </div>
      <a href="#climb" class="scroll-cue" aria-label="Scroll to the climb section">
        <span></span>
      </a>
    </section>

    <section id="climb" class="story-panel climb-panel">
      <div class="climb-copy level-card rising-card">
        <p>Division 2</p>
        <h2>Rising Stars</h2>
        <span>AMC 10 to early AIME level. Built for students who are developing contest rhythm without needing prior olympiad experience.</span>
      </div>
      <div class="climb-copy level-card achiever-card">
        <p>Division 1</p>
        <h2>High Achievers</h2>
        <span>Early AIME to high AIME level. A sharper final round with computational and proof problems for the top eight.</span>
      </div>
      <div class="mountain-stage frame-stage" aria-label="Mountain climb frame animation">
        <img
          ref="mountainSequence"
          class="frame-sequence mountain-sequence"
          :src="mountainFrameSrc"
          alt="Animated mountain climb"
        />
      </div>
    </section>

    <section id="format" class="story-panel format-panel">
      <div class="leaderboard-side">
        <div class="leaderboard-steps frame-stage" aria-hidden="true">
          <img
            ref="podiumSequence"
            class="frame-sequence podium-sequence"
            :src="podiumFrameSrc"
            alt=""
          />
        </div>
        <div class="prize-counter">
          <span>Prize pool</span>
          <strong>${{ prizeDisplay }}</strong>
        </div>
      </div>

      <div class="written-side">
        <div class="written-board">
          <p class="section-kicker">Format</p>
          <h2>Problems with AIME texture.</h2>
          <div class="write-line">
            <h3>Problem Format</h3>
            <p>20 written problems: 10 multiple choice and 10 AIME-style integer answers.</p>
          </div>
          <div class="write-line">
            <h3>Contest Windows</h3>
            <p>Window A: August 29 at 21:30 EST. Window B: August 30 at 11:00 AM EST.</p>
          </div>
          <div class="write-line">
            <h3>Final Round</h3>
            <p>The top 8 students in each division advance to a final round with computational and proof-style problems.</p>
          </div>
          <div class="medal-grid">
            <span><strong>30%</strong> Bronze</span>
            <span><strong>20%</strong> Silver</span>
            <span><strong>10%</strong> Gold</span>
          </div>
        </div>
      </div>
    </section>

    <section id="people" class="content-band">
      <div class="band-heading">
        <p class="section-kicker">Team</p>
        <h2>Staff.</h2>
      </div>
      <div class="accordion-stack">
        <details class="accordion" open>
          <summary>Competition Directors</summary>
          <div class="staff-grid">
            <article v-for="member in leadership" :key="member.name" class="compact-staff-card">
              <img v-if="member.image" :src="member.image" :alt="member.name" />
              <div v-else class="staff-initial">{{ member.name[0] }}</div>
              <h3>{{ member.name }}</h3>
              <p>{{ member.role }}</p>
            </article>
          </div>
        </details>
        <details class="accordion">
          <summary>Problem, outreach, and operations staff</summary>
          <div class="staff-description-list">
            <details v-for="member in generalStaff" :key="member.name" class="staff-description">
              <summary>{{ member.name }}</summary>
              <p>{{ member.bio }}</p>
            </details>
          </div>
        </details>
      </div>
    </section>

    <section id="faq" class="content-band faq-band">
      <div class="band-heading">
        <p class="section-kicker">FAQ</p>
        <h2>Quick answers.</h2>
      </div>
      <div class="accordion-stack">
        <details v-for="item in faqs" :key="item.q" class="accordion">
          <summary>{{ item.q }}</summary>
          <p>{{ item.a }}</p>
        </details>
      </div>
    </section>

    <section id="partners" class="story-panel partners-panel">
      <div class="partner-heading">
        <p class="section-kicker">Partners</p>
        <h2>Backed by the right rooms.</h2>
      </div>
      <div class="partner-orbit">
        <a
          v-for="partner in partners"
          :key="partner.name"
          class="partner-logo-card"
          :href="partner.href"
          target="_blank"
          rel="noopener"
        >
          <img :src="partner.logo" :alt="partner.name" />
          <span>{{ partner.name }}</span>
        </a>
      </div>
      <div class="closing-cta">
        <h2>Climb on August 29 or 30.</h2>
        <p>Registration closes August 27, 23:59 EST. Pick one window and compete from anywhere.</p>
        <a class="primary-action" href="https://docs.google.com/forms/d/e/1FAIpQLSeLKMy5cPHpOFhFUc8fukPBjMiJHl35aB3u7rkClPTw_VziVg/viewform" target="_blank" rel="noopener">Register for YIMO</a>
      </div>
    </section>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

export default {
  data() {
    return {
      identityWords: ['Youth', 'International', 'Math', 'Olympiad'],
      prizeValue: 0,
      mountainFrameSrc: '/story-frames/mountain/ezgif-frame-001.jpg',
      podiumFrameSrc: '/story-frames/podium/ezgif-frame-001.jpg',
      cleanupFns: [],
      leadership: [
        { name: 'Wenhao', role: 'Competition Director', image: '/staff/wenhaolu.png' },
        { name: 'Ryan Ahn', role: 'Competition Director', image: '/staff/ryanahn.png' },
        { name: 'Andrew Zhang', role: 'Competition Director', image: '/staff/andrewzhang.png' },
        { name: 'Hyunjun Yi', role: 'Competition Director', image: '/staff/junyi.png' },
        { name: 'Daniel Edouard', role: 'Head of Marketing', image: '/staff/danieledouard.png' },
        { name: 'Kristen Zhou', role: 'Head of Outreach', image: '/staff/kristenzhou.png' },
        { name: 'Shining Sun', role: 'Head of Problem Setting' },
      ],
      generalStaff: [
        { name: 'Aarin Patkar', bio: 'Competitive speech and debate student with a strong passion for mathematics and Spanish.' },
        { name: 'Aaron Qin', bio: 'A 2x AIME qualifier interested in creative problem-solving, startup culture, filmmaking, songwriting, and coding.' },
        { name: 'Abhiram Jetty', bio: 'USAJMO qualifier, TXSEF finalist, Thermo Fisher finalist, and AMC 10 Distinguished Honor Roll recipient.' },
        { name: 'Atharv Karamcheti', bio: 'Freshman interested in biomedical engineering, robotics, chemistry, origami, digital art, photography, and piano.' },
        { name: 'Adithya Balakumar', bio: 'AIME qualifier with Math League International recognition and a state-level robotics innovation award.' },
        { name: 'Charlie Yang', bio: 'Three-time AIME qualifier with AMC 10 Distinguished Honor Roll and independent research presentation experience.' },
        { name: 'Christopher Huang', bio: 'STEMise education executive and Senior SAT Tutor at Schoolhouse.world, mentoring students internationally.' },
        { name: 'Collin Du', bio: 'National K-12 chess champion training for ISEF, with interests in fishing, skiing, and writing.' },
        { name: 'Damayne Anderson', bio: 'Student-athlete and Daily Math founder focused on USACO, AIME preparation, leadership, and community service.' },
        { name: 'George Paret', bio: '4x AIME qualifier with top algebra and geometry results across PUMaC, BMT, HMMT, MATHCOUNTS, and ARML.' },
        { name: 'Gonçalo Franco', bio: "Gonçalo has won multiple national math and technology olympiads. He manages his own digital agency and works on multiple projects, including this website's design." },
        { name: 'Jacob Rotella Riggers', bio: 'VEX VRC Worlds competitor with strong math, programming, robotics, distance running, and baseball experience.' },
        { name: 'Jayvant Rajesh', bio: "Jayvant serves as Chief of Staff at STEMise, where he leads organizational strategy, including revising the team's mission statement and shaping recruitment and overall direction." },
        { name: 'Justin Guo', bio: '4x AIME qualifier, HMMT top 50 placer, USACHO qualifier, and Olympiad Insider officer.' },
        { name: 'Karam Gill', bio: 'Karam Gill is a rising 8th grader who is passionate about math and is a 3x AIME qualifier. Outside of math, he enjoys basketball, board games, and card games.' },
        { name: 'Krish Kejriwal', bio: 'Aspiring mathematician with MATHCOUNTS and AMC 8 distinctions, writing problems for YIMO.' },
        { name: 'Leo Pattison', bio: 'Track and soccer athlete who volunteers at local workshops to teach math and coding.' },
        { name: 'Nathan Zaltsman', bio: 'Next Horizon alumnus turned mentor, competitive chess player, and regular competitive coding practitioner.' },
        { name: 'Pietro Loraschi', bio: 'USACO Silver competitor preparing for USAPhO via F=ma and World Scholar Cup top placer.' },
        { name: 'Rayoon Kim', bio: 'USAMO qualifier who enjoys difficult geometry problems and contest problem solving.' },
        { name: 'Siddh Mistry', bio: 'Siddh Mistry is a high school senior interested in mathematics and computer science. In his free time, he likes to watch anime and play sports.' },
        { name: 'Stanley Kem', bio: 'National writing competition placer, soccer captain, regional art award recipient, and hackathon builder.' },
        { name: 'Tashi Satish', bio: 'VEX VRC Worlds qualifier with robotics engineering experience and club soccer competition background.' },
        { name: 'Vihaan Vajpeyi', bio: 'Vihaan is an AIME qualifier with AMC 10 Distinguished Honor Roll and RoboCup Nationals recognition who is interested in quantitative finance.' },
        { name: 'Wyatt Choi', bio: 'AIME qualifier, KMO Silver medalist, BMO distinction recipient, and olympiad problem writer for Solvefire and YIMO.' },
      ],
      faqs: [
        {
          q: 'Who can join?',
          a: 'YIMO is open to all students. Division 2 is designed for students building competition experience.',
        },
        {
          q: 'Which division should I pick?',
          a: 'Rising Stars fits AMC 10 to early AIME level. High Achievers fits early AIME through high AIME competitors.',
        },
        {
          q: 'When is the contest?',
          a: 'Choose exactly one window: Saturday, August 29 at 21:30 EST or Sunday, August 30 at 11:00 AM EST.',
        },
        {
          q: 'What does the contest look like?',
          a: 'The written round has 20 problems, then the top 8 in each division advance to a final round with computational and proof problems.',
        },
        {
          q: 'How do I register?',
          a: 'Use the registration form and upload the parental consent form before August 27, 23:59 EST.',
        },
      ],
      partners: [
        { name: 'HRT', logo: '/hrt-logo.png', href: 'https://www.hudsonrivertrading.com/' },
        { name: 'AoPS', logo: '/aops-logo.png', href: 'https://artofproblemsolving.com/' },
        { name: 'USAMOguide', logo: '/Test_logo.png', href: 'https://www.usamoguide.com/' },
        { name: 'Saintly', logo: '/Saintly.png', href: 'https://saintlymath.com/' },
        { name: 'USAEO', logo: '/USAEO.png', href: 'https://usaeo.org/' },
      ],
    }
  },
  computed: {
    prizeDisplay() {
      return Math.round(this.prizeValue).toLocaleString('en-US')
    },
  },
  mounted() {
    this.initAnimations()
    this.initLenis()
    this.initThreeMath()
  },
  beforeDestroy() {
    this.cleanupFns.forEach((fn) => fn())
    this.cleanupFns = []
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
  },
  methods: {
    framePath(folder, frame) {
      return `/story-frames/${folder}/ezgif-frame-${String(frame).padStart(3, '0')}.jpg`
    },
    setSequenceFrame(refName, folder, count, progress) {
      const img = this.$refs[refName]
      if (!img) return
      const frame = gsap.utils.clamp(1, count, Math.round(gsap.utils.mapRange(0, 1, 1, count, progress)))
      const nextSrc = this.framePath(folder, frame)
      if (img.getAttribute('src') !== nextSrc) img.setAttribute('src', nextSrc)
    },
    preloadFrames(folder, count) {
      const queue = Array.from({ length: count }, (_, index) => this.framePath(folder, index + 1))
      const load = () => {
        queue.forEach((src) => {
          const img = new Image()
          img.decoding = 'async'
          img.src = src
        })
      }
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(load, { timeout: 1800 })
      } else {
        window.setTimeout(load, 900)
      }
    },
    async initLenis() {
      try {
        const LenisModule = await import('@studio-freight/lenis/dist/lenis.js')
        const Lenis = LenisModule.default || LenisModule
        const lenis = new Lenis({ lerp: 0.09, smoothWheel: true })
        lenis.on('scroll', ScrollTrigger.update)
        const ticker = (time) => {
          lenis.raf(time * 1000)
        }
        gsap.ticker.add(ticker)
        gsap.ticker.lagSmoothing(0)
        this.cleanupFns.push(() => {
          gsap.ticker.remove(ticker)
          lenis.destroy()
        })
      } catch (error) {
        console.warn('Lenis unavailable; native scroll remains active.', error)
      }
    },
    initAnimations() {
      const root = this.$refs.page
      if (!root) return

      const mm = gsap.matchMedia()
      const ctx = gsap.context(() => {
        gsap.set('.wheel-word', { autoAlpha: 0, y: 24, rotationX: -40 })
        const wordTl = gsap.timeline({ repeat: -1 })
        gsap.utils.toArray('.wheel-word').forEach((word) => {
          wordTl
            .to(word, { autoAlpha: 1, y: 0, rotationX: 0, duration: 0.25, ease: 'power3.out' })
            .to(word, { autoAlpha: 0, y: -18, rotationX: 24, duration: 0.22, ease: 'power3.in' }, '+=0.35')
        })

        const climbTl = gsap.timeline({
          scrollTrigger: {
            trigger: '.climb-panel',
            start: 'top top',
            end: '+=2200',
            scrub: 1,
            pin: true,
            onUpdate: (self) => {
              this.setSequenceFrame('mountainSequence', 'mountain', 180, self.progress)
            },
          },
        })
        climbTl
          .from('.mountain-sequence', { y: 46, scale: 0.98, duration: 0.55 })
          .fromTo('.rising-card', { autoAlpha: 0, x: 60 }, { autoAlpha: 1, x: 0, duration: 0.35 }, 0.85)
          .to('.rising-card', { autoAlpha: 0, x: 30, duration: 0.25 }, 1.55)
          .fromTo('.achiever-card', { autoAlpha: 0, x: -70 }, { autoAlpha: 1, x: 0, duration: 0.4 }, 2.15)

        const formatTl = gsap.timeline({
          scrollTrigger: {
            trigger: '.format-panel',
            start: 'top top',
            end: '+=2100',
            scrub: 1,
            pin: true,
            onUpdate: (self) => {
              this.setSequenceFrame('podiumSequence', 'podium', 180, self.progress)
              this.prizeValue = gsap.utils.clamp(0, 1500, gsap.utils.mapRange(0.08, 0.72, 0, 1500, self.progress))
            },
          },
        })
        formatTl
          .from('.written-board h2, .write-line, .medal-grid span', { y: 22, stagger: 0.08, duration: 0.7 }, 0.12)
          .from('.podium-sequence', { y: 70, scale: 0.96, duration: 0.55 }, 0.18)
          .from('.prize-counter strong', { y: 24, duration: 0.45 }, 0.92)
          .to('.prize-counter, .leaderboard-side', { autoAlpha: 0, y: -80, duration: 0.45 }, 1.42)

        gsap.from('.compact-staff-card, .accordion', {
          scrollTrigger: {
            trigger: '.content-band',
            start: 'top 75%',
          },
          autoAlpha: 0,
          y: 28,
          stagger: 0.05,
          duration: 0.55,
          ease: 'power2.out',
        })

        this.preloadFrames('mountain', 180)
        this.preloadFrames('podium', 180)
      }, root)

      mm.add('(prefers-reduced-motion: reduce)', () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.disable())
      })

      this.cleanupFns.push(() => {
        ctx.revert()
        mm.revert()
      })
    },
    async initThreeMath() {
      const canvas = this.$refs.mathCanvas
      if (!canvas) return

      try {
        const THREE = await import('three')
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        camera.position.z = 7

        const group = new THREE.Group()
        const material = new THREE.MeshBasicMaterial({ color: 0xf97316, wireframe: true, transparent: true, opacity: 0.28 })
        const geometries = [
          new THREE.TorusKnotGeometry(0.62, 0.13, 80, 8),
          new THREE.IcosahedronGeometry(0.78, 1),
          new THREE.OctahedronGeometry(0.7, 0),
        ]
        geometries.forEach((geometry, index) => {
          const mesh = new THREE.Mesh(geometry, material.clone())
          const positions = [
            [-3.8, 1.2, -1.4],
            [3.8, 1.0, -1.8],
            [3.2, -2.2, -2.2],
          ]
          mesh.position.set(positions[index][0], positions[index][1], positions[index][2])
          group.add(mesh)
        })
        scene.add(group)

        const resize = () => {
          const rect = canvas.getBoundingClientRect()
          renderer.setSize(rect.width, rect.height, false)
          camera.aspect = rect.width / Math.max(rect.height, 1)
          camera.updateProjectionMatrix()
        }
        resize()
        window.addEventListener('resize', resize)

        let rafId
        const animate = () => {
          group.children.forEach((mesh, index) => {
            mesh.rotation.x += 0.003 + index * 0.001
            mesh.rotation.y += 0.005
          })
          renderer.render(scene, camera)
          rafId = window.requestAnimationFrame(animate)
        }
        animate()

        this.cleanupFns.push(() => {
          window.cancelAnimationFrame(rafId)
          window.removeEventListener('resize', resize)
          geometries.forEach((geometry) => geometry.dispose())
          group.children.forEach((mesh) => mesh.material.dispose())
          renderer.dispose()
        })
      } catch (error) {
        console.warn('Three.js background unavailable.', error)
      }
    },
  },
}
</script>

<style scoped>
.yimo-redesign {
  --story-bg: #0a0805;
  --paper: #f6f0e8;
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 70% 8%, rgba(249, 115, 22, 0.18), transparent 24rem),
    linear-gradient(180deg, #0a0805 0%, #080604 58%, #110b06 100%);
}

.story-panel {
  position: relative;
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 4.5rem 2rem 5.5rem;
}

.hero-panel {
  text-align: center;
  overflow: hidden;
}

.math-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0.14;
  filter: blur(0.2px);
}

.geometry-field {
  position: absolute;
  inset: 5.5rem 3rem 3rem;
  z-index: 1;
  pointer-events: none;
}

.geometry-form {
  position: absolute;
  width: clamp(120px, 17vw, 235px);
  height: auto;
  overflow: visible;
  opacity: 0.18;
  stroke: rgba(249, 115, 22, 0.56);
  stroke-width: 1.4;
  fill: none;
  filter: drop-shadow(0 0 18px rgba(249, 115, 22, 0.13));
}

.geometry-form * {
  vector-effect: non-scaling-stroke;
}

.form-orbit {
  left: 5%;
  top: 12%;
  width: clamp(180px, 24vw, 320px);
  opacity: 0.21;
}

.form-poly {
  right: 7%;
  top: 17%;
}

.form-triangle {
  right: 21%;
  bottom: 2%;
  opacity: 0.11;
}

.form-cyclic {
  left: 8%;
  bottom: 10%;
  opacity: 0.12;
}

.form-prism {
  right: 4%;
  bottom: 22%;
  opacity: 0.13;
}

.hero-copy {
  isolation: isolate;
}

.hero-copy {
  position: relative;
  z-index: 3;
  max-width: 820px;
  margin: 0 auto;
}

.logo-stage {
  display: grid;
  place-items: center;
  margin: 0 auto 1.3rem;
}

.hero-logo {
  width: clamp(82px, 10vw, 116px);
  height: clamp(82px, 10vw, 116px);
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 0 60px rgba(249, 115, 22, 0.34);
  will-change: transform;
}

.word-wheel {
  position: relative;
  min-height: 2.3rem;
  margin-top: 0.85rem;
  font-size: clamp(1rem, 2vw, 1.35rem);
  font-weight: 800;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--accent-soft);
}

.wheel-word {
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  white-space: nowrap;
}

.hero-copy h1 {
  font-family: 'Instrument Serif', serif !important;
  font-size: clamp(4.4rem, 13.5vw, 9.4rem);
  font-weight: 400;
  line-height: 0.82;
  color: var(--paper);
  margin: 0;
}

.hero-subtitle {
  max-width: 690px;
  margin: 1.35rem auto 0;
  color: var(--text-dim);
  font-size: clamp(1rem, 1.8vw, 1.22rem);
  line-height: 1.75;
}

.hero-actions,
.closing-cta {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.85rem;
  margin-top: 1.55rem;
}

.primary-action,
.secondary-action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0 1.3rem;
  border-radius: 6px;
  font-weight: 800;
  text-decoration: none;
  transition: transform 0.2s, background 0.2s, border-color 0.2s;
}

.primary-action {
  color: white;
  background: var(--accent);
}

.secondary-action {
  color: var(--text);
  border: 1px solid var(--line-strong);
  background: rgba(255, 255, 255, 0.04);
}

.primary-action:hover,
.secondary-action:hover {
  transform: translateY(-2px);
}

.scroll-cue {
  position: absolute;
  bottom: 1.3rem;
  left: 50%;
  z-index: 4;
  width: 28px;
  height: 48px;
  margin-left: -14px;
  border: 1px solid rgba(246, 240, 232, 0.45);
  border-radius: 20px;
}

.scroll-cue span {
  position: absolute;
  left: 50%;
  top: 9px;
  width: 5px;
  height: 5px;
  margin-left: -2.5px;
  border-radius: 50%;
  background: var(--accent);
  animation: cue 1.4s infinite;
}

@keyframes cue {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(22px); opacity: 0; }
}

.mountain-stage {
  position: relative;
  width: min(980px, 92vw);
  aspect-ratio: 16 / 9;
  height: auto;
}

.frame-stage {
  overflow: hidden;
  background: transparent;
}

.frame-sequence {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
  pointer-events: none;
  will-change: transform;
}

.mountain-sequence {
  object-position: center center;
}

.level-card {
  position: absolute;
  z-index: 4;
  width: min(330px, 86vw);
  padding: 1.2rem;
  border: 1px solid rgba(246, 240, 232, 0.12);
  background: rgba(10, 8, 5, 0.72);
  backdrop-filter: blur(14px);
}

.rising-card {
  right: 8vw;
  top: 39vh;
}

.achiever-card {
  left: 8vw;
  top: 24vh;
}

.level-card p,
.section-kicker {
  margin: 0 0 0.55rem;
  color: var(--accent);
  font-size: 0.74rem;
  font-weight: 900;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.level-card h2,
.band-heading h2,
.partner-heading h2,
.written-board h2,
.closing-cta h2 {
  color: var(--paper);
  font-size: clamp(2rem, 5vw, 4rem);
  margin: 0;
}

.level-card span,
.closing-cta p {
  display: block;
  margin-top: 0.75rem;
  color: var(--text-dim);
  line-height: 1.65;
}

.format-panel {
  grid-template-columns: minmax(260px, 0.75fr) minmax(320px, 1.25fr);
  gap: clamp(2rem, 6vw, 5rem);
  align-items: center;
}

.leaderboard-side,
.written-side {
  position: relative;
  width: 100%;
  max-width: 580px;
}

.leaderboard-steps {
  position: relative;
  width: min(248px, 31vw);
  aspect-ratio: 9 / 16;
  height: auto;
  margin-inline: auto;
}

.prize-counter {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 0.9rem;
  margin-top: 0.75rem;
  color: var(--text-dim);
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.72rem;
}

.prize-counter strong {
  display: inline-block;
  color: var(--paper);
  font-size: clamp(2rem, 4vw, 3.9rem);
  line-height: 1;
  letter-spacing: 0;
}

.written-board {
  position: relative;
  padding: clamp(1.5rem, 4vw, 3rem);
  border: 1px solid rgba(246, 240, 232, 0.14);
  background: rgba(246, 240, 232, 0.045);
}

.write-line {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(246, 240, 232, 0.1);
}

.write-line h3 {
  margin: 0 0 0.35rem;
  color: var(--paper);
  font-size: 1rem;
}

.write-line p {
  margin: 0;
  color: var(--text-dim);
  line-height: 1.65;
}

.medal-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
  margin-top: 1.7rem;
}

.medal-grid span {
  border-left: 2px solid var(--accent);
  padding: 0.85rem 1rem;
  color: rgba(246, 240, 232, 0.86);
  background: rgba(255, 255, 255, 0.04);
  font-size: 0.88rem;
}

.medal-grid strong {
  display: block;
  color: var(--paper);
  font-size: 1.6rem;
  line-height: 1;
}

.content-band {
  position: relative;
  z-index: 3;
  max-width: 1180px;
  margin: 0 auto;
  padding: 7rem 2rem;
}

.band-heading {
  max-width: 620px;
  margin-bottom: 2rem;
}

.accordion-stack {
  display: grid;
  gap: 0.85rem;
}

.accordion {
  border: 1px solid rgba(246, 240, 232, 0.12);
  background: rgba(255, 255, 255, 0.035);
}

.accordion summary {
  cursor: pointer;
  padding: 1.1rem 1.25rem;
  color: var(--paper);
  font-weight: 900;
  list-style: none;
}

.accordion summary::-webkit-details-marker {
  display: none;
}

.accordion summary::after {
  content: '+';
  float: right;
  color: var(--accent);
}

.accordion[open] summary::after {
  content: '-';
}

.accordion > p {
  margin: 0;
  padding: 0 1.25rem 1.25rem;
  color: var(--text-dim);
  line-height: 1.7;
}

.staff-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(145px, 1fr));
  gap: 1rem;
  padding: 0 1.25rem 1.25rem;
}

.compact-staff-card {
  min-height: 170px;
  padding: 1rem;
  text-align: center;
  background: rgba(10, 8, 5, 0.4);
}

.compact-staff-card img,
.staff-initial {
  width: 72px;
  height: 72px;
  margin: 0 auto 0.8rem;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid rgba(246, 240, 232, 0.15);
}

.staff-initial {
  display: grid;
  place-items: center;
  color: var(--accent);
  font-weight: 900;
  background: rgba(249, 115, 22, 0.1);
}

.compact-staff-card h3 {
  margin: 0;
  color: var(--paper);
  font-size: 0.96rem;
}

.compact-staff-card p {
  margin: 0.25rem 0 0;
  color: var(--accent-soft);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.name-river {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0 1.25rem 1.25rem;
}

.staff-description-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 0.65rem;
  padding: 0 1.25rem 1.25rem;
}

.staff-description {
  border: 1px solid rgba(246, 240, 232, 0.1);
  background: rgba(10, 8, 5, 0.34);
}

.staff-description summary {
  padding: 0.85rem 0.95rem;
  color: var(--paper);
  font-weight: 800;
  cursor: pointer;
  list-style: none;
}

.staff-description summary::-webkit-details-marker {
  display: none;
}

.staff-description p {
  margin: 0;
  padding: 0 0.95rem 0.95rem;
  color: var(--text-dim);
  font-size: 0.9rem;
  line-height: 1.58;
}

.name-river span {
  padding: 0.42rem 0.62rem;
  color: var(--text-dim);
  border: 1px solid rgba(246, 240, 232, 0.1);
  background: rgba(255, 255, 255, 0.035);
  font-size: 0.84rem;
}

.partners-panel {
  min-height: 110vh;
  align-content: center;
  text-align: center;
}

.partner-heading {
  margin-bottom: 2rem;
}

.partner-orbit {
  display: grid;
  grid-template-columns: repeat(5, minmax(120px, 1fr));
  gap: 1rem;
  width: min(1120px, 100%);
}

.partner-logo-card {
  min-height: 150px;
  display: grid;
  place-items: center;
  gap: 0.7rem;
  padding: 1.25rem;
  color: rgba(246, 240, 232, 0.9);
  text-decoration: none;
  background: transparent;
  border: 1px solid rgba(246, 240, 232, 0.12);
}

.partner-logo-card img {
  max-width: 150px;
  max-height: 72px;
  object-fit: contain;
  filter: none;
}

.partner-logo-card span {
  font-size: 0.75rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.closing-cta {
  display: block;
  max-width: 660px;
  margin: 4rem auto 0;
}

.closing-cta .primary-action {
  margin-top: 1.2rem;
}

@media (max-width: 900px) {
  .format-panel {
    grid-template-columns: 1fr;
  }

  .partner-orbit {
    grid-template-columns: repeat(2, minmax(130px, 1fr));
  }

  .rising-card,
  .achiever-card {
    left: 1rem;
    right: 1rem;
    top: auto;
    bottom: 8vh;
  }

  .achiever-card {
    bottom: 22vh;
  }
}

@media (max-width: 640px) {
  .story-panel {
    padding: 4.5rem 1rem 5rem;
  }

  .math-canvas {
    display: none;
  }

  .geometry-field {
    display: none;
  }

  .hero-copy h1 {
    font-size: clamp(4rem, 24vw, 5.3rem);
  }

  .medal-grid,
  .partner-orbit {
    grid-template-columns: 1fr;
  }

  .leaderboard-steps {
    width: min(260px, 78vw);
  }
}

@media (prefers-reduced-motion: reduce) {
  .scroll-cue span {
    animation: none;
  }
}
</style>
