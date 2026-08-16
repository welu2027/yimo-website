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
        <p class="hero-credit">
          Brought to you by
          <a href="https://stemise.org" target="_blank" rel="noopener">STEMise</a>
          and
          <a href="https://nxthorizon.org" target="_blank" rel="noopener">NXT Horizon</a>.
        </p>
      </div>
      <a href="#climb" class="scroll-cue" aria-label="Scroll to the climb section">
        <span></span>
      </a>
    </section>

    <section id="climb" class="story-panel climb-panel">
      <div class="climb-copy level-card rising-card">
        <p>Division 2</p>
        <h2>Beginner</h2>
        <span>AMC 10 to early AIME level. Built for students who are developing contest rhythm without needing prior olympiad experience.</span>
      </div>
      <div class="climb-copy level-card achiever-card">
        <p>Division 1</p>
        <h2>Advanced</h2>
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
      </div>

      <div class="written-side">
        <div class="written-board">
          <h2>Format</h2>
          <div class="write-line">
            <h3>Problem Format</h3>
            <p>20 written problems with integer answers.</p>
            <a class="scoring-guide-link" href="/YIMO_Scoring_guide.pdf" target="_blank" rel="noopener">Open scoring guide</a>
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
        <p class="section-kicker">Staff</p>
        <h2>Staff.</h2>
      </div>
      <div class="accordion-stack">
        <details class="accordion" open>
          <summary>Competition Directors</summary>
          <div class="staff-grid">
            <article
              v-for="member in executiveDirectors"
              :key="member.name"
              class="flip-card"
              :class="{ flipped: flipped['exec-' + member.name] }"
              @click="toggleFlip('exec-' + member.name)"
            >
              <div class="flip-inner">
                <div class="flip-front">
                  <img :src="member.image" :alt="member.name" />
                  <h3>{{ member.name }}</h3>
                </div>
                <div class="flip-back">
                  <h3>{{ member.name }}</h3>
                  <p class="flip-bio">{{ member.bio }}</p>
                </div>
              </div>
            </article>
          </div>
        </details>
        <details class="accordion">
          <summary>Leadership Emeritus</summary>
          <div class="staff-grid">
            <article v-for="member in formerDirectors" :key="member.name" class="compact-staff-card">
              <img v-if="member.image" :src="member.image" :alt="member.name" />
              <div v-else class="staff-initial">{{ member.name[0] }}</div>
              <h3>{{ member.name }}</h3>
              <p>{{ member.role }}</p>
            </article>
          </div>
        </details>
        <details class="accordion">
          <summary>Staff</summary>
          <p class="staff-subhead">Leadership</p>
          <div class="staff-grid">
            <article
              v-for="member in staffLeadership"
              :key="member.name"
              class="flip-card"
              :class="{ flipped: flipped['lead-' + member.name] }"
              @click="toggleFlip('lead-' + member.name)"
            >
              <div class="flip-inner">
                <div class="flip-front">
                  <img v-if="member.image" :src="member.image" :alt="member.name" />
                  <div v-else class="staff-initial">{{ member.name[0] }}</div>
                  <h3>{{ member.name }}</h3>
                  <p>{{ member.role }}</p>
                </div>
                <div class="flip-back">
                  <h3>{{ member.name }}</h3>
                  <p class="flip-bio">{{ member.bio }}</p>
                </div>
              </div>
            </article>
          </div>
          <p class="staff-subhead">Team</p>
          <div class="staff-grid">
            <article
              v-for="member in generalStaff"
              :key="member.name"
              class="flip-card flip-card-compact"
              :class="{ flipped: flipped['staff-' + member.name] }"
              @click="toggleFlip('staff-' + member.name)"
            >
              <div class="flip-inner">
                <div class="flip-front flip-front-nametag">
                  <h3>{{ member.name }}</h3>
                </div>
                <div class="flip-back">
                  <img v-if="member.image" :src="member.image" :alt="member.name" />
                  <div v-else class="staff-initial">{{ member.name[0] }}</div>
                  <h3>{{ member.name }}</h3>
                  <p class="flip-bio">{{ member.bio }}</p>
                </div>
              </div>
            </article>
          </div>
        </details>
      </div>
    </section>

    <section id="faq" class="content-band faq-band">
      <div class="band-heading">
        <h2>FAQ</h2>
      </div>
      <div class="accordion-stack">
        <details v-for="item in faqs" :key="item.q" class="accordion">
          <summary>{{ item.q }}</summary>
          <p v-html="item.a"></p>
        </details>
      </div>
      <p class="faq-note">
        Still have questions? Ask them in our
        <a href="https://discord.gg/fkyDZvDMKT" target="_blank" rel="noopener">Discord</a>.
      </p>
    </section>

    <section id="partners" class="story-panel partners-panel">
      <div id="sponsors" class="partner-group">
        <div class="partner-heading">
          <p class="section-kicker">Sponsors</p>
          <h2>Sponsors.</h2>
        </div>
        <div class="partner-orbit" :style="{ '--partner-columns': gridColumns(sponsors) }">
          <a
            v-for="sponsor in sponsors"
            :key="sponsor.name"
            class="partner-logo-card"
            :href="sponsor.href"
            target="_blank"
            rel="noopener"
          >
            <img :src="sponsor.logo" :alt="sponsor.name" />
            <span>{{ sponsor.name }}</span>
            <span v-if="sponsor.tier" class="partner-tier" :class="'tier-' + sponsor.tier.toLowerCase()">{{ sponsor.tier }} Sponsor</span>
          </a>
        </div>
      </div>

      <div class="partner-group">
        <div class="partner-heading">
          <p class="section-kicker">Partners</p>
          <h2>Partners.</h2>
        </div>
        <div class="partner-orbit" :style="{ '--partner-columns': gridColumns(partners) }">
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
      </div>

      <div class="closing-cta">
        <h2>Climb with us on August 29 or 30.</h2>
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
      mountainFrameSrc: '/story-frames/mountain/ezgif-frame-001.jpg',
      podiumFrameSrc: '/story-frames/podium/ezgif-frame-001.jpg',
      cleanupFns: [],
      flipped: {},
      executiveDirectors: [
        { name: 'Wenhao Lu', image: '/staff/wenhaolu.png', bio: 'is a USAJMO Honorable Mention who scored 11 on the AIME and competes in the USACO Platinum division. He loves combinatorics and algebra, and his club baseball team peaked at #75 nationally.' },
        { name: 'Hyunjun Yi', image: '/staff/junyi.png', bio: 'is an AMC-12 Perfect Scorer who now works as a Deputy Executive Director at STEMise. Growing up in the Netherlands, he likes to hang out with his friends and listen to music in his free time.' },
        { name: 'Daniel Edouard', image: '/staff/danieledouard.png', bio: 'is a Merit-Based Harvard Fellow who has conducted independent computational neuropsychology research under the supervision of a Yale professor. His work sits at the intersection of AI, applied math, and neuroscience, with a focus on developing computational applications for neurodivergent developmental disorders. A frequent presenter at national research conferences, he also serves on the Workshop and Outreach team for NXT Horizon. He is the founder of Les Enfants du Monde, a nonprofit focused on STEM, AI, and entrepreneurship education for youth in the Democratic Republic of the Congo. In his free time, he is an avid tennis and pickleball player and has played violin for six years.' },
        { name: 'Kristen Zhou', image: '/staff/kristenzhou.png', bio: 'is a student who enjoys competition math and teaching it. Despite missing AIME by 1.5 points, she has placed first and fourth at many regional MATHLEAGUE.ORG competitions. She is a four-year cross country runner who has qualified for the Central Coast Section three times. In her free time, she enjoys playing PJSK, watching Danganronpa, and listening to indie music.' },
        { name: 'Abhiram Jetty', image: '/staff/abhiramjetty.png', bio: 'is a USAJMO qualifier, TXSEF finalist, Thermo Fisher finalist, and AMC 10 Distinguished Honor Roll recipient. As a 9th grader, he likes to play video games, swim, and write math problems for contests like YIMO.' },
      ],
      staffLeadership: [
        { name: 'Rayoon Kim', role: 'Head of Logistics', bio: 'is a USAMO qualifier who can be found coordbashing the most diabolical geometry problem. In his free time, he enjoys playing various PvP games, watching murderous media, and listening to Ado, Billie Eilish, and various indie groups.' },
        { name: 'Shining Sun', role: 'Problem Czar', bio: 'is a 6x AIME qualifier and 2x USAJMO qualifier. He also works as a problem writer for national competitions in Nepal. In his free time, he enjoys playing video games and exploring random places with friends.' },
        { name: 'Karam Gill', role: 'Problem Czar', image: '/staff/karamgill.png', bio: 'is a rising 8th grader who is passionate about math and is a 3x AIME qualifier. Outside of math, he enjoys playing basketball, board games, and card games.' },
      ],
      formerDirectors: [
        { name: 'Ryan Ahn', role: 'Former Competition Director', image: '/staff/ryanahn.png' },
        { name: 'Andrew Zhang', role: 'Former Competition Director', image: '/staff/andrewzhang.png' },
      ],
      generalStaff: [
        { name: 'Adithya Balakumar', image: '/staff/adithyabalakumar.png', bio: 'is an AIME qualifier (2026) with a Bronze Medal at the Math League International Competition and a state-level robotics innovation award. He loves exploring local parks and drinking matcha.' },
        { name: 'Bryan Bu', bio: 'Bio coming soon.' },
        { name: 'Chloe Jin', bio: 'Bio coming soon.' },
        { name: 'Christopher Huang', image: '/staff/christopherhuang.png', bio: 'serves as the Executive of Education at STEMise, where he leads initiatives to make STEM learning more accessible. As a Senior SAT Tutor at Schoolhouse.world, he has mentored over 65 students across 20 countries and overseen more than 1,200 certifications. Beyond education, he has a personal interest in the intersection of dentistry and materials science.' },
        { name: 'George Paret', bio: 'is a 4x AIME qualifier, AMC 10/12 Distinguished Honor Roll recipient, PUMaC Top 10 Geometry, BMT Top 10 Geometry, BMT Top 10 Algebra, HMMT Top 25 Geometry, MATHCOUNTS Nationals Qualifier, ARML Perfect Scorer, and co-founder of GPMO. In his free time, he enjoys playing ping-pong and listening to music.' },
        { name: 'Gonçalo Franco', image: '/staff/goncalofranco.png', bio: "Gonçalo has won multiple national math and technology olympiads. Currently, he manages his own digital agency and works on multiple projects, including this website's design." },
        { name: 'Ira KC', bio: 'Bio coming soon.' },
        { name: 'Jacob Blais', bio: 'Bio coming soon.' },
        { name: 'Jayvant Rajesh', image: '/staff/jayvantrajesh.webp', bio: "Jayvant serves as Chief of Staff at STEMise, where he leads organizational strategy, including revising the team's mission statement and shaping recruitment and overall direction." },
        { name: 'Justin Guo', bio: 'is a 4x AIME qualifier, HMMT top 50 placer, USACHO qualifier, and Olympiad Insider officer. He enjoys chess, running, community service, and programming.' },
        { name: 'Kunal Modi', image: '/staff/kunalmodi.jpeg', bio: 'Student interested in business and entrepreneurship who competes in numerous math competitions, with competitive tennis as a hobby.' },
        { name: 'Lefteris Demosthenous', bio: 'is an AIME qualifier with distinction and a USACO Silver competitive coder. He likes to play piano and lift weights.' },
        { name: 'Philip Dong', image: '/staff/philipdong.jpg', bio: 'Philip Dong is an AMC 10 DHM, AIME qualifier, and USA(J)MO qualifier. He also competes in the US National Chemistry Olympiad and got Honors this year. He is interested in math, coding, and chemistry, and during his free time, he likes to play tennis, video games, and the piano and most importantly, eat.' },
        { name: 'Philip Zhang', bio: 'Bio coming soon.' },
        { name: 'Saahil Jain', bio: 'Bio coming soon.' },
        { name: 'Sean Puon', image: '/staff/seanpuon.png', bio: 'Student with strong academic focus in STEM and multi-language proficiency. Passionate about student wellness, community and entrepreneurship projects, along with athletic development (especially in volleyball).' },
        { name: 'Siddh Mistry', image: '/staff/siddhmistry.png', bio: 'Siddh Mistry is a high school senior interested in mathematics and computer science. In his free time he likes to watch anime and play sports (coordbashing).' },
        { name: 'Utkarsh Tewari', bio: 'Bio coming soon.' },
        { name: 'Vihaan Vajpeyi', image: '/staff/vihaanvajpeyi.jpeg', bio: 'Vihaan is an AIME qualifier with AMC 10 Distinguished Honor Roll and RoboCup Nationals winner who is interested in quantitative finance. In his free time, he enjoys playing video games and learning new math concepts.' },
        { name: 'Wyatt Choi', image: '/staff/wyattchoi.png', bio: 'is a 1x AIME qualifier with Honor Roll, a Silver medalist in the Korean Math Olympiad (KMO), and a distinction recipient in the British Math Olympiad Round 1. He has placed in the Top 8 Teams at the Caltech Harvey Mudd Competition, Top 10 Individual at the Brown University Math Olympiad, and 3rd at his regional Math Field Competition. He writes olympiad problems for Solvefire and YIMO, and in his free time plays electric guitar and builds robots for VEX Robotics.' },
      ],
      faqs: [
        {
          q: 'Who can join?',
          a: 'YIMO is open to all students. Division 2 is designed for students building competition experience.',
        },
        {
          q: 'Which division should I pick?',
          a: 'Beginner fits AMC 10 to early AIME level. Advanced fits early AIME through high AIME competitors.',
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
          q: 'Are calculators allowed?',
          a: "No, calculators aren't allowed.",
        },
        {
          q: 'Are awards and certificates available?',
          a: 'Awards are given to both divisions, and participation certificates are available.',
        },
        {
          q: 'Where can I study?',
          a: 'Check the <a href="/archive">Archive</a> and <a href="https://saintlymath.com/" target="_blank" rel="noopener">Saintly</a> for practice.',
        },
        {
          q: 'How do I register?',
          a: 'Use the free registration form and upload the parental consent form before August 27, 23:59 EST.',
        },
      ],
      sponsors: [
        { name: 'HRT', logo: '/hrt-logo.png', href: 'https://www.hudsonrivertrading.com/', tier: 'Platinum' },
        { name: 'PiMath', logo: '/PiMath-noBG.png', href: 'https://www.paquinmath.org/', tier: 'Silver' },
        { name: 'AoPS', logo: '/aops-logo.png', href: 'https://artofproblemsolving.com/', tier: 'Bronze' },
      ],
      partners: [
        { name: 'USAMOguide', logo: '/Test_logo.png', href: 'https://www.usamoguide.com/' },
        { name: 'Saintly', logo: '/Saintly.png', href: 'https://saintlymath.com/' },
        { name: 'Solvefire', logo: '/solvefire.png', href: 'https://solvefire.net' },
        { name: 'Euler Circle', logo: '/eulercircle.svg', href: 'https://eulercircle.com' },
      ],
    }
  },
  mounted() {
    // Kick these off first: the mountain/podium frame sequences are what the
    // very next scroll needs, so they shouldn't wait behind idle callbacks.
    this.preloadFrames('mountain', 180)
    this.preloadFrames('podium', 180)
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
    toggleFlip(id) {
      this.$set(this.flipped, id, !this.flipped[id])
    },
    gridColumns(list) {
      return Math.min(list.length, 5)
    },
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
      // Fetch immediately rather than waiting on requestIdleCallback: these
      // sequences are ~3MB each and drive the very next scroll animation, so
      // deferring the fetch is what caused frames to visibly pop in late.
      for (let index = 0; index < count; index += 1) {
        const img = new Image()
        img.decoding = 'async'
        img.src = this.framePath(folder, index + 1)
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

      // The word wheel is a self-running crossfade with no scroll dependency,
      // so it is built for every visitor: the four words are absolutely
      // stacked on each other and only this timeline separates them.
      const ctx = gsap.context(() => {
        gsap.set('.wheel-word', { autoAlpha: 0, y: 24, rotationX: -40 })
        const wordTl = gsap.timeline({ repeat: -1 })
        gsap.utils.toArray('.wheel-word').forEach((word) => {
          wordTl
            .to(word, { autoAlpha: 1, y: 0, rotationX: 0, duration: 0.25, ease: 'power3.out' })
            .to(word, { autoAlpha: 0, y: -18, rotationX: 24, duration: 0.22, ease: 'power3.in' }, '+=0.35')
        })
      }, root)

      // Everything below is scroll-driven, and every one of these tweens
      // writes its `from` state to the DOM the moment it is created - the
      // staff and FAQ cards get `opacity: 0; visibility: hidden` and stay
      // that way until the ScrollTrigger plays them back. Building them and
      // then calling trigger.disable() for reduced-motion visitors (as this
      // used to do) left that hidden state on screen permanently, so the
      // whole staff section rendered blank. Build them only when the visitor
      // has not asked for reduced motion; the sections then keep their plain
      // CSS appearance for everyone else.
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
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
            },
          },
        })
        formatTl
          .from('.written-board h2, .write-line, .medal-grid span', { y: 22, stagger: 0.08, duration: 0.7 }, 0.12)
          .from('.podium-sequence', { y: 70, scale: 0.96, duration: 0.55 }, 0.18)
          .to('.leaderboard-side', { autoAlpha: 0, y: -80, duration: 0.45 }, 1.42)

        gsap.from('.compact-staff-card, .flip-card, .accordion', {
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

        // Only worth fetching the 360 sequence frames when they will scrub.
        this.preloadFrames('mountain', 180)
        this.preloadFrames('podium', 180)
      }, root)

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
  /* Match GSAP's initial autoAlpha(0) state so words don't flash stacked
     and visible for a frame before JS takes over. */
  opacity: 0;
  visibility: hidden;
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

.hero-credit {
  margin-top: 1.1rem;
  color: var(--text-dim);
  font-size: 0.95rem;
  letter-spacing: 0.01em;
}

.hero-credit a {
  color: var(--accent-soft);
  text-decoration: none;
  font-weight: 600;
}

.hero-credit a:hover {
  text-decoration: underline;
}

.faq-note {
  margin-top: 1.6rem;
  text-align: center;
  color: var(--text-dim);
  font-size: 1rem;
}

.faq-note a {
  color: var(--accent-soft);
  text-decoration: none;
  font-weight: 600;
}

.faq-note a:hover {
  text-decoration: underline;
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

.scoring-guide-link {
  display: inline-block;
  margin-top: 0.8rem;
  color: var(--accent);
  font-weight: 800;
  text-decoration: underline;
  text-underline-offset: 0.22em;
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
  align-items: start;
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

.staff-subhead {
  margin: 0.25rem 0 0.85rem;
  padding: 0 1.25rem;
  color: var(--accent-soft);
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.16em;
}

.flip-card {
  perspective: 1000px;
  cursor: pointer;
  min-height: 250px;
  background: transparent;
  padding: 0;
}

.flip-inner {
  position: relative;
  width: 100%;
  min-height: 250px;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card.flipped .flip-inner {
  transform: rotateY(180deg);
}

.flip-front,
.flip-back {
  position: absolute;
  inset: 0;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1.1rem;
  border-radius: 14px;
  border: 1px solid rgba(246, 240, 232, 0.1);
  background: rgba(10, 8, 5, 0.45);
}

.flip-back {
  transform: rotateY(180deg);
  justify-content: flex-start;
  overflow-y: auto;
}

.flip-front img,
.flip-back img,
.flip-card .staff-initial {
  width: 72px;
  height: 72px;
  margin: 0 auto 0.7rem;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid rgba(246, 240, 232, 0.15);
  flex-shrink: 0;
}

.flip-front h3,
.flip-back h3 {
  margin: 0;
  color: var(--paper);
  font-size: 0.96rem;
}

.flip-front p {
  margin: 0.3rem 0 0;
  color: var(--accent-soft);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.flip-bio {
  margin: 0.55rem 0 0;
  color: var(--text-dim);
  font-size: 0.82rem;
  line-height: 1.5;
}

.flip-hint {
  margin-top: 0.55rem;
  color: var(--text-dim);
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  opacity: 0.55;
}

.flip-front-nametag {
  justify-content: center;
  padding: 0.55rem 0.75rem;
}

.flip-front-nametag h3 {
  font-size: 0.92rem;
  font-weight: 700;
  letter-spacing: 0.01em;
}

/* Compact staff cards: tiny nametag until clicked, then expand */
.flip-card-compact {
  min-height: 48px;
  transition: min-height 0.45s ease;
}

.flip-card-compact .flip-inner {
  min-height: 48px;
}

.flip-card-compact.flipped {
  min-height: 250px;
}

.flip-card-compact.flipped .flip-inner {
  min-height: 250px;
}

.flip-card-compact.flipped .flip-front-nametag h3 {
  font-size: 1.2rem;
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

.partner-group {
  width: min(1120px, 100%);
}

.partner-group + .partner-group {
  margin-top: 3.5rem;
}

.partner-heading {
  margin-bottom: 2rem;
}

.partner-orbit {
  display: grid;
  grid-template-columns: repeat(var(--partner-columns, 5), minmax(120px, 1fr));
  gap: 1rem;
  width: 100%;
  /* Cards stay the width they had in the combined five-across grid whatever a
     group's item count is, and a short row is centred rather than stranded
     against the left edge. */
  max-width: calc(var(--partner-columns, 5) * 224px + (var(--partner-columns, 5) - 1) * 1rem);
  margin-inline: auto;
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

.partner-tier {
  margin-top: 0.15rem;
  padding: 0.18rem 0.6rem;
  border-radius: 999px;
  font-size: 0.6rem !important;
  letter-spacing: 0.1em !important;
  border: 1px solid currentColor;
}

.partner-tier.tier-platinum {
  color: #d7dbe3;
  background: rgba(215, 219, 227, 0.08);
}

.partner-tier.tier-silver {
  color: #b8bcc4;
  background: rgba(184, 188, 196, 0.08);
}

.partner-tier.tier-bronze {
  color: #d08a4e;
  background: rgba(208, 138, 78, 0.1);
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
    max-width: none;
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
