<template>
  <div class="yimo-page">
    <section id="top" class="hero-section">
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

      <div class="hero-layout content-width">
        <div class="hero-main">
          <p class="hero-kicker">Second edition</p>
          <img class="hero-logo" src="/yimo-logo-gold.png" alt="YIMO logo" />
          <p class="hero-name">Youth International Math Olympiad</p>
          <h1>YIMO</h1>
          <p class="hero-subtitle">
            A global online contest for students who like clean problems, fair rounds,
            and a serious climb. Join us on August 29 or 30, 2026.
          </p>
          <div class="hero-actions">
            <a class="action action-primary" href="https://docs.google.com/forms/d/e/1FAIpQLSeLKMy5cPHpOFhFUc8fukPBjMiJHl35aB3u7rkClPTw_VziVg/viewform" target="_blank" rel="noopener">Register</a>
            <a class="action action-secondary" href="#format">View format</a>
          </div>
          <p class="hero-credit">
            Presented by
            <a href="https://stemise.org" target="_blank" rel="noopener">STEMise</a>
            and
            <a href="https://nxthorizon.org" target="_blank" rel="noopener">NXT Horizon</a>.
          </p>
        </div>

        <aside class="hero-facts" aria-label="Contest dates">
          <p class="fact-label">The next edition</p>
          <p class="fact-date">August 29<br />&amp; 30</p>
          <p class="fact-copy">Choose one contest window and compete from anywhere.</p>
        </aside>
      </div>
    </section>

    <section id="climb" class="section-shell">
      <div class="section-intro content-width">
        <div>
          <h2>Choose your climb.</h2>
          <p>Two levels, one clear standard: thoughtful solutions and careful work.</p>
        </div>
      </div>

      <div class="story-grid content-width">
        <figure class="story-figure">
          <div class="story-frame mountain-frame">
            <img src="/story-frames/mountain/ezgif-frame-180.jpg" alt="A student reaching the flag at the top of a mountain." loading="lazy" />
          </div>
          <figcaption>Every division leads to the same summit.</figcaption>
        </figure>

        <div class="division-list">
          <article class="division-entry">
            <p class="entry-index">Division 02</p>
            <div>
              <h3>Beginner</h3>
              <p>AMC 10 to early AIME level. Built for students developing contest rhythm without needing prior olympiad experience.</p>
            </div>
          </article>
          <article class="division-entry">
            <p class="entry-index">Division 01</p>
            <div>
              <h3>Advanced</h3>
              <p>Early AIME to high AIME level. A sharper final round with computational and proof problems for the top eight.</p>
            </div>
          </article>
          <div class="division-note">
            <span>Open entry</span>
            <strong>All students through middle and high school are welcome.</strong>
          </div>
        </div>
      </div>
    </section>

    <section id="format" class="section-shell format-section">
      <div class="section-intro content-width">
        <div>
          <h2>A clear contest from round one to finals.</h2>
          <p>Know the structure before you start. Pick one window, solve carefully, and let the work speak.</p>
        </div>
      </div>

      <div class="format-grid content-width">
        <figure class="story-figure podium-figure">
          <div class="story-frame podium-frame">
            <img src="/story-frames/podium/ezgif-frame-180.jpg" alt="A student holding a trophy on the first-place podium." loading="lazy" />
          </div>
          <figcaption>Recognition for careful, original work.</figcaption>
        </figure>

        <div class="format-content">
          <div class="format-list">
            <article class="format-row">
              <p class="entry-index">01 / Problem format</p>
              <div>
                <h3>20 written problems with integer answers.</h3>
                <a class="inline-link" href="/YIMO_Scoring_guide.pdf" target="_blank" rel="noopener">Open the scoring guide</a>
              </div>
            </article>
            <article class="format-row">
              <p class="entry-index">02 / Contest windows</p>
              <div>
                <h3>Choose exactly one window.</h3>
                <p>Window A: August 29 at 21:30 EST. Window B: August 30 at 11:00 AM EST.</p>
              </div>
            </article>
            <article class="format-row">
              <p class="entry-index">03 / Final round</p>
              <div>
                <h3>The top eight students in each division advance.</h3>
                <p>The final round includes computational and proof-style problems designed to distinguish the strongest solutions.</p>
              </div>
            </article>
          </div>

          <div class="format-footer">
            <div class="award-summary">
              <span><strong>30%</strong> Bronze</span>
              <span><strong>20%</strong> Silver</span>
              <span><strong>10%</strong> Gold</span>
            </div>
            <div class="prize-summary">
              <span>Prize pool</span>
              <strong>$1,500</strong>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="staff" class="section-shell people-section">
      <div class="section-intro content-width">
        <div>
          <h2>The people behind the problems.</h2>
          <p>Meet the students, educators, and organizers building a more thoughtful competition.</p>
        </div>
      </div>

      <div class="people-content content-width">
        <details class="group-panel" open>
          <summary>Competition directors</summary>
          <div class="person-list">
            <details v-for="member in executiveDirectors" :key="member.name" class="person-row">
              <summary>
                <span class="person-identity">
                  <img :src="member.image" :alt="member.name" loading="lazy" />
                  <span><strong>{{ member.name }}</strong><small>Competition director</small></span>
                </span>
              </summary>
              <p>{{ member.bio }}</p>
            </details>
          </div>
        </details>

        <details class="group-panel">
          <summary>Leadership emeritus</summary>
          <div class="former-list">
            <div v-for="member in formerDirectors" :key="member.name" class="former-row">
              <img v-if="member.image" :src="member.image" :alt="member.name" loading="lazy" />
              <span v-else class="staff-initial">{{ member.name[0] }}</span>
              <span><strong>{{ member.name }}</strong><small>{{ member.role }}</small></span>
            </div>
          </div>
        </details>

        <details class="group-panel">
          <summary>Staff leadership</summary>
          <div class="person-list">
            <details v-for="member in staffLeadership" :key="member.name" class="person-row">
              <summary>
                <span class="person-identity">
                  <img v-if="member.image" :src="member.image" :alt="member.name" loading="lazy" />
                  <span v-else class="staff-initial">{{ member.name[0] }}</span>
                  <span><strong>{{ member.name }}</strong><small>{{ member.role }}</small></span>
                </span>
              </summary>
              <p>{{ member.bio }}</p>
            </details>
          </div>
        </details>

        <details class="group-panel">
          <summary>Team</summary>
          <div class="person-list">
            <details v-for="member in generalStaff" :key="member.name" class="person-row">
              <summary>
                <span class="person-identity">
                  <img v-if="member.image" :src="member.image" :alt="member.name" loading="lazy" />
                  <span v-else class="staff-initial">{{ member.name[0] }}</span>
                  <span><strong>{{ member.name }}</strong><small>{{ member.role || 'Staff' }}</small></span>
                </span>
              </summary>
              <p>{{ member.bio }}</p>
            </details>
          </div>
        </details>
      </div>
    </section>

    <section id="faq" class="section-shell faq-section">
      <div class="section-intro content-width">
        <div>
          <h2>Good questions deserve clear answers.</h2>
          <p>The practical details, in one place.</p>
        </div>
      </div>

      <div class="faq-list content-width">
        <details v-for="item in faqs" :key="item.q" class="faq-item">
          <summary>{{ item.q }}</summary>
          <div class="faq-answer"><p v-html="item.a"></p></div>
        </details>
      </div>
      <p class="faq-note content-width">Still have a question? Ask in our <a href="https://discord.gg/fkyDZvDMKT" target="_blank" rel="noopener">Discord</a>.</p>
    </section>

    <section id="partners" class="section-shell partners-section">
      <div class="section-intro content-width">
        <div>
          <h2>Built with good company.</h2>
          <p>Organizations supporting access, rigor, and the next generation of problem solvers.</p>
        </div>
      </div>

      <div class="partner-list content-width">
        <a v-for="partner in partners" :key="partner.name" class="partner-row" :href="partner.href" target="_blank" rel="noopener">
          <span class="partner-logo"><img :src="partner.logo" :alt="partner.name" loading="lazy" /></span>
          <span class="partner-copy"><strong>{{ partner.name }}</strong><small v-if="partner.tier">{{ partner.tier }} sponsor</small></span>
        </a>
      </div>

      <div class="closing-block content-width">
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
        <p>Registration closes August 27 at 23:59 EST. Pick one window and compete from anywhere.</p>
        <a class="action action-primary" href="https://docs.google.com/forms/d/e/1FAIpQLSeLKMy5cPHpOFhFUc8fukPBjMiJHl35aB3u7rkClPTw_VziVg/viewform" target="_blank" rel="noopener">Register for YIMO</a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
        { q: 'Who can join?', a: 'YIMO is open to all students. Division 2 is designed for students building competition experience.' },
        { q: 'Which division should I pick?', a: 'Beginner fits AMC 10 to early AIME level. Advanced fits early AIME through high AIME competitors.' },
        { q: 'When is the contest?', a: 'Choose exactly one window: Saturday, August 29 at 21:30 EST or Sunday, August 30 at 11:00 AM EST.' },
        { q: 'What does the contest look like?', a: 'The written round has 20 problems, then the top 8 in each division advance to a final round with computational and proof problems.' },
        { q: 'Are calculators allowed?', a: "No, calculators aren't allowed." },
        { q: 'Are awards and certificates available?', a: 'Awards are given to both divisions, and participation certificates are available.' },
        { q: 'Where can I study?', a: 'Check the <a href="/archive">Archive</a> and <a href="https://saintlymath.com/" target="_blank" rel="noopener">Saintly</a> for practice.' },
        { q: 'How do I register?', a: 'Use the free registration form and upload the parental consent form before August 27, 23:59 EST.' },
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
.yimo-page {
  --page-bg: #0a0805;
  --page-bg-soft: #100c08;
  --paper: #f6f0e8;
  --muted: #b9afa1;
  --faint: #82786e;
  --line: rgba(246, 240, 232, 0.16);
  --line-soft: rgba(246, 240, 232, 0.09);
  --accent: #f97316;
  --accent-soft: #ffb26e;
  min-height: 100vh;
  overflow: hidden;
  color: var(--paper);
  background: var(--page-bg);
}

.content-width {
  width: min(1180px, calc(100% - 4rem));
  margin-inline: auto;
}

.hero-section,
.section-shell {
  position: relative;
  border-bottom: 1px solid var(--line-soft);
}

.hero-section {
  min-height: calc(100vh - 66px);
  display: grid;
  align-items: center;
  padding: 7rem 0 6rem;
}

.geometry-field {
  position: absolute;
  inset: 3rem 2rem 2rem;
  pointer-events: none;
}

.geometry-form {
  position: absolute;
  width: 220px;
  height: auto;
  overflow: visible;
  fill: none;
  stroke: rgba(249, 115, 22, 0.45);
  stroke-width: 1.1;
  opacity: 0.38;
}

.geometry-form * {
  vector-effect: non-scaling-stroke;
}

.form-orbit {
  top: 2%;
  left: 1%;
  width: 300px;
}

.form-poly {
  top: 8%;
  right: 3%;
}

.form-triangle {
  right: 20%;
  bottom: 1%;
}

.form-cyclic {
  left: 7%;
  bottom: 3%;
}

.form-prism {
  right: 1%;
  bottom: 24%;
}

.hero-layout {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 220px;
  gap: 5rem;
  align-items: end;
}

.hero-main {
  max-width: 720px;
}

.hero-kicker,
.entry-index,
.fact-label {
  margin: 0;
  color: var(--accent);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  line-height: 1.4;
  text-transform: uppercase;
}

.hero-logo {
  display: block;
  width: 92px;
  height: 92px;
  margin: 2rem 0 1.4rem;
  object-fit: cover;
}

.hero-name {
  max-width: 470px;
  margin: 0 0 0.55rem;
  color: var(--accent-soft);
  font-size: 0.94rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
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
  color: var(--paper);
  font-family: Georgia, 'Times New Roman', serif !important;
  font-size: 8rem;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 0.8;
}

.hero-subtitle {
  max-width: 620px;
  margin: 2rem 0 0;
  color: var(--muted);
  font-size: 1.1rem;
  line-height: 1.75;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2rem;
}

.action {
  display: inline-flex;
  min-height: 46px;
  align-items: center;
  justify-content: center;
  padding: 0 1.1rem;
  border: 1px solid transparent;
  border-radius: 0;
  font-size: 0.9rem;
  font-weight: 800;
  text-decoration: none;
}

.action-primary {
  color: #1b0d04;
  background: var(--accent);
}

.action-primary:hover,
.action-primary:focus-visible {
  color: #1b0d04;
  background: var(--accent-soft);
}

.action-secondary {
  color: var(--paper);
  border-color: var(--line);
  background: transparent;
}

.action-secondary:hover,
.action-secondary:focus-visible {
  border-color: var(--accent);
  color: var(--accent-soft);
}

.hero-credit,
.faq-note {
  margin: 1.6rem 0 0;
  color: var(--faint);
  font-size: 0.86rem;
}

.faq-note {
  text-align: center;
}

.hero-credit a,
.faq-note a,
.inline-link {
  color: var(--accent-soft);
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 0.2em;
}

.hero-facts {
  padding: 1.2rem 0 0 1.4rem;
  border-left: 1px solid var(--accent);
}

.fact-date {
  margin: 0.8rem 0 0;
  color: var(--paper);
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 2.1rem;
  line-height: 1.05;
}

.fact-copy {
  margin: 1rem 0 0;
  color: var(--muted);
  font-size: 0.88rem;
  line-height: 1.6;
}

.section-shell {
  padding: 7rem 0 8rem;
}

.section-intro {
  display: block;
  padding-bottom: 3rem;
}

.section-intro h2,
.closing-block h2 {
  margin: 0;
  color: var(--paper);
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 3.7rem;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1;
}

.section-intro div > p,
.closing-block > p {
  max-width: 560px;
  margin: 1.1rem 0 0;
  color: var(--muted);
  font-size: 1rem;
  line-height: 1.7;
}

.story-grid,
.format-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(340px, 0.92fr);
  gap: 5rem;
  align-items: start;
}

.story-figure {
  margin: 0;
}

.story-frame {
  overflow: hidden;
  border: 1px solid var(--line);
  background: #050403;
}

.mountain-frame {
  aspect-ratio: 16 / 9;
}

.podium-frame {
  width: min(100%, 390px);
  aspect-ratio: 9 / 16;
  margin-inline: auto;
}

.story-frame img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.podium-frame img {
  object-fit: contain;
}

.story-figure figcaption {
  margin-top: 0.85rem;
  color: var(--faint);
  font-size: 0.8rem;
}

.division-list,
.format-list {
  border-top: 1px solid var(--line);
}

.division-entry,
.format-row {
  display: grid;
  grid-template-columns: 120px minmax(0, 1fr);
  gap: 1.5rem;
  padding: 1.6rem 0;
  border-bottom: 1px solid var(--line-soft);
}

.division-entry h3,
.format-row h3 {
  margin: 0;
  color: var(--paper);
  font-size: 1.15rem;
  font-weight: 700;
  line-height: 1.35;
}

.division-entry p:not(.entry-index),
.format-row p:not(.entry-index) {
  margin: 0.55rem 0 0;
  color: var(--muted);
  font-size: 0.94rem;
  line-height: 1.65;
}

.entry-index {
  color: var(--faint);
  font-size: 0.65rem;
  letter-spacing: 0.1em;
}

.division-note {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.5rem 0;
  color: var(--accent-soft);
  font-size: 0.9rem;
}

.division-note span {
  color: var(--faint);
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.format-section {
  background: var(--page-bg-soft);
}

.format-grid {
  grid-template-columns: minmax(250px, 0.7fr) minmax(0, 1.3fr);
}

.format-content {
  min-width: 0;
}

.format-row {
  grid-template-columns: 145px minmax(0, 1fr);
}

.format-row .inline-link {
  display: inline-block;
  margin-top: 0.85rem;
  font-size: 0.88rem;
}

.format-footer {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 150px;
  gap: 2rem;
  align-items: end;
  padding-top: 1.5rem;
}

.award-summary {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.7rem;
}

.award-summary span {
  padding: 0.8rem 0;
  border-top: 2px solid var(--accent);
  color: var(--muted);
  font-size: 0.82rem;
}

.award-summary strong {
  display: block;
  margin-bottom: 0.35rem;
  color: var(--paper);
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1.55rem;
  font-weight: 400;
}

.prize-summary {
  padding-left: 1rem;
  border-left: 1px solid var(--accent);
}

.prize-summary span {
  display: block;
  color: var(--faint);
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.prize-summary strong {
  display: block;
  margin-top: 0.35rem;
  color: var(--paper);
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 2.25rem;
  font-weight: 400;
}

.people-section,
.faq-section,
.partners-section {
  background: var(--page-bg);
}

.people-content,
.faq-list,
.partner-list {
  border-top: 1px solid var(--line);
}

.group-panel {
  border-bottom: 1px solid var(--line);
}

.group-panel > summary,
.faq-item > summary {
  display: flex;
  min-height: 64px;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.9rem 0;
  color: var(--paper);
  cursor: pointer;
  font-size: 1rem;
  font-weight: 800;
  list-style: none;
}

.group-panel > summary::-webkit-details-marker,
.person-row > summary::-webkit-details-marker,
.faq-item > summary::-webkit-details-marker {
  display: none;
}

.group-panel > summary::after,
.faq-item > summary::after,
.person-row > summary::after {
  content: '+';
  flex: 0 0 auto;
  color: var(--accent);
  font-size: 1.25rem;
  font-weight: 400;
}

.group-panel[open] > summary::after,
.faq-item[open] > summary::after,
.person-row[open] > summary::after {
  content: '-';
}

.person-list,
.former-list {
  padding-bottom: 0.75rem;
}

.person-row {
  border-top: 1px solid var(--line-soft);
}

.person-row > summary {
  display: flex;
  min-height: 68px;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.7rem 0;
  cursor: pointer;
  list-style: none;
}

.person-identity,
.former-row {
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 0.85rem;
}

.person-identity img,
.former-row img,
.staff-initial {
  width: 44px;
  height: 44px;
  flex: 0 0 44px;
  border: 1px solid var(--line);
  border-radius: 50%;
  object-fit: cover;
}

.person-identity > span:last-child,
.former-row > span:last-child {
  display: grid;
  gap: 0.2rem;
}

.person-identity strong,
.former-row strong {
  color: var(--paper);
  font-size: 0.95rem;
  font-weight: 700;
}

.person-identity small,
.former-row small {
  color: var(--faint);
  font-size: 0.72rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.person-row > p {
  max-width: 760px;
  margin: 0;
  padding: 0 3rem 1.25rem 3.9rem;
  color: var(--muted);
  font-size: 0.93rem;
  line-height: 1.7;
}

.staff-initial {
  display: grid;
  place-items: center;
  color: var(--accent-soft);
  background: var(--page-bg-soft);
  font-weight: 800;
}

.former-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem 2rem;
}

.former-row {
  padding: 0.8rem 0;
  border-top: 1px solid var(--line-soft);
}

.faq-item {
  border-bottom: 1px solid var(--line-soft);
}

.faq-item > summary {
  min-height: 70px;
}

.faq-answer {
  padding: 0 3rem 1.25rem 0;
}

.faq-answer p {
  max-width: 720px;
  margin: 0;
  color: var(--muted);
  font-size: 0.96rem;
  line-height: 1.7;
}

.partner-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 3rem;
}

.partner-row {
  display: flex;
  min-height: 105px;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid var(--line-soft);
  color: var(--paper);
  text-decoration: none;
}

.partner-row:hover,
.partner-row:focus-visible {
  color: var(--accent-soft);
}

.partner-logo {
  display: grid;
  width: 130px;
  height: 64px;
  flex: 0 0 130px;
  place-items: center;
}

.partner-logo img {
  display: block;
  max-width: 118px;
  max-height: 52px;
  object-fit: contain;
}

.partner-copy {
  display: grid;
  gap: 0.3rem;
}

.partner-copy strong {
  font-size: 0.95rem;
}

.partner-copy small {
  color: var(--faint);
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.closing-block {
  margin-top: 8rem;
  padding-top: 2rem;
  border-top: 1px solid var(--accent);
}

.closing-block .action {
  margin-top: 1.7rem;
}

@media (max-width: 860px) {
  .content-width {
    width: min(100% - 2rem, 680px);
  }

  .hero-layout,
  .story-grid,
  .format-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .hero-section {
    min-height: auto;
    padding: 5rem 0 6rem;
  }

  .hero-facts {
    max-width: 240px;
  }

  .section-shell {
    padding: 5rem 0 6rem;
  }

  .section-intro {
    padding-bottom: 2.5rem;
  }

  .podium-frame {
    margin-inline: 0;
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

  .format-footer {
    grid-template-columns: 1fr;
  }

  .prize-summary {
    max-width: 180px;
  }

  .partner-list {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .content-width {
    width: min(100% - 2rem, 440px);
  }

  .geometry-field {
    inset: 1rem -5rem 1rem;
    opacity: 0.6;
  }

  .geometry-form {
    width: 170px;
  }

  .form-orbit {
    left: -4rem;
  }

  .form-poly {
    right: -3rem;
  }

  .form-triangle,
  .form-prism {
    display: none;
  }

  .hero-main h1 {
    font-size: 5.25rem;
  }

  .hero-logo {
    width: 76px;
    height: 76px;
  }

  .partner-orbit {
    grid-template-columns: repeat(2, minmax(130px, 1fr));
    max-width: none;
  }

  .hero-name {
    font-size: 0.77rem;
    letter-spacing: 0.08em;
  }

  .section-intro h2,
  .closing-block h2 {
    font-size: 2.8rem;
  }

  .division-entry,
  .format-row {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }

  .award-summary {
    gap: 0.45rem;
  }

  .award-summary span {
    font-size: 0.72rem;
  }

  .award-summary strong {
    font-size: 1.25rem;
  }

  .former-list {
    grid-template-columns: 1fr;
  }

  .person-row > p {
    padding-left: 0;
  }

  .faq-answer {
    padding-right: 0;
  }

  .partner-logo {
    width: 105px;
    flex-basis: 105px;
  }
}
</style>
