<template>
  <div ref="page" class="yimo-redesign">
    <section id="top" class="story-panel hero-panel">
      <canvas ref="mathCanvas" class="math-canvas" aria-hidden="true"></canvas>
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
          <strong>YIMO II has now concluded!</strong> Thank you to everyone who
          competed. Join our <a href="https://discord.gg/fkyDZvDMKT" target="_blank" rel="noopener">Discord</a>
          for updates on the next contest.
        </p>
        <div class="hero-actions">
          <a class="primary-action" href="https://docs.google.com/forms/d/e/1FAIpQLSeLKMy5cPHpOFhFUc8fukPBjMiJHl35aB3u7rkClPTw_VziVg/viewform" target="_blank" rel="noopener">Register</a>
          <a class="secondary-action" href="#format">Format</a>
          <a class="flyer-peek" href="/YIMO_2026_Flyer.pdf" target="_blank" rel="noopener">
            <img src="/yimo-2026-flyer.png" alt="" aria-hidden="true" />
            <span>Check out our flyer <em>&rarr;</em></span>
          </a>
        </div>
        <p class="hero-credit">
          Brought to you by
          <a href="https://nxthorizon.org" target="_blank" rel="noopener">NXT Horizon</a>
          and
          <a href="https://stemise.org" target="_blank" rel="noopener">STEMise</a>.
        </p>
      </div>
      <a href="#format" class="scroll-cue" aria-label="Scroll to the format section">
        <span></span>
      </a>
    </section>

    <section id="format" class="story-panel format-panel">
      <div class="format-inner">
        <div class="band-heading">
            <h2>Format</h2>
          <p class="format-lead">
            YIMO is run in two divisions. Both divisions take a written round of
            20 problems, and the top 10 students in each division advance to a
            final round.
          </p>
        </div>

        <div class="division-grid">
          <div class="level-card">
            <p>Division 2</p>
            <h3>Beginner</h3>
            <span>AMC 10 to early AIME level. For students who are new to competition math; no prior olympiad experience is required.</span>
          </div>
          <div class="level-card">
            <p>Division 1</p>
            <h3>Advanced</h3>
            <span>Early AIME to high AIME level, for students with competition experience.</span>
          </div>
        </div>

        <div class="written-board">
          <div class="write-line">
            <h3>Problem Format</h3>
            <p>20 written problems with integer answers.</p>
          </div>
          <div class="write-line">
            <h3>Contest Windows</h3>
            <p>Window A: August 29 at 21:30 EDT. Window B: August 30 at 11:00 AM EDT.</p>
          </div>
          <div class="write-line">
            <h3>Final Round</h3>
            <p>The top 10 students in each division advance to a final round with computational and proof-style problems.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="prizes" class="content-band">
      <div class="band-heading">
        <h2>Prizes</h2>
        <p class="format-lead">
          Over $2,500 in total prize money has been given out across both
          divisions.
        </p>
      </div>

      <p class="free-banner">
        <span class="free-seal">100%<em>free</em></span>
        <span class="free-text">
          <strong>YIMO is free to participate in.</strong>
          No entry fee, no travel, no geographic barriers.
        </span>
      </p>

      <div class="prize-grid">
        <div class="level-card">
          <p>Prize pool</p>
          <h3>$2,500+</h3>
          <span>Total prize money given out, split across Division 1 and Division 2.</span>
        </div>
        <div class="level-card">
          <p>Medals</p>
          <h3>Gold, silver, bronze</h3>
          <span>Awarded by placement within each division.</span>
        </div>
        <div class="level-card">
          <p>Certificates</p>
          <h3>For every winner</h3>
          <span>Winners receive certificates, and participation certificates are available to any competitor on request.</span>
        </div>
      </div>

      <div class="medal-grid">
        <div v-for="medal in medals" :key="medal.name" class="medal-card" :class="'medal-' + medal.name.toLowerCase()">
          <span class="medal-disc">{{ medal.rank }}</span>
          <strong>{{ medal.name }}</strong>
          <span class="medal-band">{{ medal.band }}</span>
        </div>
      </div>
    </section>

    <section id="people" class="content-band">
      <div class="band-heading">
        <h2>Staff</h2>
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

    <section id="sponsors" class="content-band sponsor-band">
      <div class="partner-heading">
        <h2>Sponsors</h2>
      </div>

      <div
        v-for="group in sponsorTiers"
        :key="group.tier"
        class="sponsor-tier-group"
        :class="'tier-' + group.tier.toLowerCase()"
      >
        <p class="sponsor-tier-label">{{ group.tier }}</p>
        <div class="partner-orbit" :style="{ '--partner-columns': gridColumns(group.sponsors) }">
          <a
            v-for="sponsor in group.sponsors"
            :key="sponsor.name"
            class="partner-logo-card sponsor-card-tiered"
            :href="sponsor.href"
            target="_blank"
            rel="noopener"
          >
            <img :src="sponsor.logo" :alt="sponsor.name" />
          </a>
        </div>
      </div>
    </section>

    <section id="partners" class="story-panel partners-panel">
      <div class="partner-group">
        <div class="partner-heading">
            <h2>Partners</h2>
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
        <h2>Register for August 29 or 30.</h2>
        <p>Entry is <strong>free</strong>. Registration closes August 27, 23:59 EDT. Pick one contest window and compete from anywhere.</p>
        <a class="primary-action" href="https://docs.google.com/forms/d/e/1FAIpQLSeLKMy5cPHpOFhFUc8fukPBjMiJHl35aB3u7rkClPTw_VziVg/viewform" target="_blank" rel="noopener">Register for YIMO</a>
      </div>
    </section>

    <section id="contact" class="content-band contact-band">
      <div class="partner-heading">
        <h2>Get in touch</h2>
      </div>

      <div class="contact-card">
        <div class="contact-copy">
          <h3>Business inquiries</h3>
          <p>
            If you are interested in sponsoring or partnering with YIMO, we
            will send over our pitch deck. Contact us about anything else too!
          </p>
          <a class="contact-mail" href="mailto:yimostaff@gmail.com?subject=YIMO%20business%20inquiry">yimostaff@gmail.com</a>
        </div>

        <form class="contact-form" @submit.prevent="sendInquiry">
          <div class="field-row">
            <label class="field">
              <span>First name <em>*</em></span>
              <input v-model.trim="inquiry.firstName" type="text" name="firstName" autocomplete="given-name" required />
            </label>
            <label class="field">
              <span>Last name <em>*</em></span>
              <input v-model.trim="inquiry.lastName" type="text" name="lastName" autocomplete="family-name" required />
            </label>
          </div>
          <label class="field">
            <span>Email <em>*</em></span>
            <input v-model.trim="inquiry.email" type="email" name="email" autocomplete="email" required />
          </label>
          <label class="field">
            <span>Message</span>
            <textarea v-model.trim="inquiry.message" name="message" rows="4"></textarea>
          </label>

          <!-- Honeypot: hidden from people, irresistible to bots. -->
          <label class="field field-trap" aria-hidden="true">
            <span>Company</span>
            <input v-model="inquiry.company" type="text" name="company" tabindex="-1" autocomplete="off" />
          </label>

          <button class="primary-action" type="submit" :disabled="sending">
            {{ sending ? 'Sending...' : 'Send' }}
          </button>

          <p v-if="sendStatus" class="form-status" :class="sendStatus.ok ? 'is-ok' : 'is-error'">
            {{ sendStatus.text }}
          </p>
        </form>
      </div>

      <p class="contact-note">
        Competitor questions are answered fastest in our
        <a href="https://discord.gg/fkyDZvDMKT" target="_blank" rel="noopener">Discord</a>.
      </p>
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
      /* Ranked top-down; the card styling keys off name.toLowerCase(). */
      medals: [
        { name: 'Gold', rank: '1st', band: 'Top 10%' },
        { name: 'Silver', rank: '2nd', band: 'Next 10%' },
        { name: 'Bronze', rank: '3rd', band: 'Next 10%' },
      ],
      cleanupFns: [],
      inquiry: { firstName: '', lastName: '', email: '', message: '', company: '' },
      /* Deployed Worker URL - see worker/README.md. */
      contactEndpoint: 'https://yimo-contact.wenhaolu2027.workers.dev',
      sending: false,
      sendStatus: null,
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
        { name: 'Neil Iyer', role: 'Problem Czar', bio: 'Bio coming soon.' },
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
          a: 'Choose exactly one window: Saturday, August 29 at 21:30 EDT or Sunday, August 30 at 11:00 AM EDT.',
        },
        {
          q: 'What does the contest look like?',
          a: 'The written round has 20 problems, then the top 10 in each division advance to a final round with computational and proof problems.',
        },
        {
          q: 'How many points is each round worth?',
          a: 'Both written rounds are 20 questions. YIMO I used a weighted written round, while YIMO II scored the written round as a raw count of correct answers. In the final round, each proof problem is worth 7 points and each computational problem is worth 3.',
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
          a: 'Use the free registration form and upload the parental consent form before August 27, 23:59 EDT.',
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
  computed: {
    /* Sponsors are shown one row per tier, richest first. A tier with nobody in
       it yet is dropped rather than rendered as an empty row. */
    sponsorTiers() {
      return ['Platinum', 'Gold', 'Silver', 'Bronze']
        .map((tier) => ({
          tier,
          sponsors: this.sponsors.filter((sponsor) => sponsor.tier === tier),
        }))
        .filter((group) => group.sponsors.length > 0)
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
    /* Posts to the Cloudflare Worker in worker/, which is what actually
       holds the Resend key and calls their API. The key is never shipped to
       the browser - see worker/README.md. */
    async sendInquiry() {
      if (this.sending) return
      this.sending = true
      this.sendStatus = null
      try {
        const res = await fetch(this.contactEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.inquiry),
        })
        const data = await res.json().catch(() => ({}))
        if (!res.ok) throw new Error(data.error || 'Something went wrong.')
        this.sendStatus = { ok: true, text: 'Thanks! We will get back to you shortly.' }
        this.inquiry = { firstName: '', lastName: '', email: '', message: '', company: '' }
      } catch (error) {
        this.sendStatus = {
          ok: false,
          text: `${error.message} You can also email yimostaff@gmail.com directly.`,
        }
      } finally {
        this.sending = false
      }
    },

    toggleFlip(id) {
      this.$set(this.flipped, id, !this.flipped[id])
    },
    gridColumns(list) {
      return Math.min(list.length, 5)
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
        camera.position.z = 8

        // One shared look for every figure: ink-green wireframe on the paper.
        const geometries = []
        const materials = []
        const wire = (geometry, opacity) => {
          const material = new THREE.MeshBasicMaterial({
            color: 0x1e3a34,
            wireframe: true,
            transparent: true,
            opacity,
          })
          geometries.push(geometry)
          materials.push(material)
          return new THREE.Mesh(geometry, material)
        }

        const stage = new THREE.Group()
        scene.add(stage)

        // 1. The torus knot, kept from before: a steady tumble.
        const knotGeometry = new THREE.TorusKnotGeometry(0.66, 0.15, 110, 10)
        const knot = wire(knotGeometry, 0.5)
        knot.position.set(-4.0, 1.4, -1.2)
        stage.add(knot)

        // 2. A grid that ripples: two travelling sine waves summed per vertex,
        //    rewritten into the position buffer every frame.
        const sheetGeometry = new THREE.PlaneGeometry(3.2, 3.2, 15, 15)
        const sheet = wire(sheetGeometry, 0.34)
        sheet.position.set(-4.1, -2.0, -3.0)
        sheet.rotation.set(-1.05, 0.35, 0.45)
        stage.add(sheet)
        const sheetPositions = sheetGeometry.attributes.position
        const sheetRest = Float32Array.from(sheetPositions.array)

        // 3. An icosahedron that breathes in and out while it tumbles.
        const breather = wire(new THREE.IcosahedronGeometry(0.85, 1), 0.45)
        breather.position.set(4.0, 1.5, -1.8)
        stage.add(breather)

        // 4. A tilted ring with three satellites running around it, each
        //    spinning on its own axis as the whole system turns.
        const orbit = new THREE.Group()
        orbit.position.set(3.4, -2.0, -2.2)
        orbit.rotation.set(1.0, 0, 0.35)
        orbit.add(wire(new THREE.TorusGeometry(1.05, 0.015, 3, 64), 0.4))
        const satellites = []
        for (let i = 0; i < 3; i += 1) {
          const satellite = wire(new THREE.OctahedronGeometry(0.2, 0), 0.55)
          satellite.userData.phase = (i / 3) * Math.PI * 2
          satellites.push(satellite)
          orbit.add(satellite)
        }
        stage.add(orbit)

        const resize = () => {
          const rect = canvas.getBoundingClientRect()
          renderer.setSize(rect.width, rect.height, false)
          camera.aspect = rect.width / Math.max(rect.height, 1)
          camera.updateProjectionMatrix()
        }
        resize()
        window.addEventListener('resize', resize)

        // The pointer tilts the whole stage a few degrees; `eased` chases the
        // raw pointer so the parallax glides instead of snapping.
        const pointer = { x: 0, y: 0 }
        const eased = { x: 0, y: 0 }
        const onPointerMove = (event) => {
          pointer.x = (event.clientX / window.innerWidth) * 2 - 1
          pointer.y = (event.clientY / window.innerHeight) * 2 - 1
        }
        window.addEventListener('pointermove', onPointerMove)

        const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        const clock = new THREE.Clock()

        const frame = () => {
          const t = clock.getElapsedTime()

          knot.rotation.x = t * 0.28
          knot.rotation.y = t * 0.42

          breather.rotation.x = t * 0.2
          breather.rotation.y = t * 0.33
          const breath = 1 + Math.sin(t * 1.1) * 0.09
          breather.scale.setScalar(breath)

          orbit.rotation.z = t * 0.22
          satellites.forEach((satellite) => {
            const angle = t * 0.9 + satellite.userData.phase
            satellite.position.set(Math.cos(angle) * 1.05, Math.sin(angle) * 1.05, 0)
            satellite.rotation.x = t * 1.4
            satellite.rotation.y = t * 1.1
          })

          for (let i = 0; i < sheetPositions.count; i += 1) {
            const x = sheetRest[i * 3]
            const y = sheetRest[i * 3 + 1]
            sheetPositions.setZ(
              i,
              Math.sin(x * 1.7 + t * 1.3) * 0.32 + Math.cos(y * 1.3 - t * 0.9) * 0.26
            )
          }
          sheetPositions.needsUpdate = true

          eased.x += (pointer.x - eased.x) * 0.04
          eased.y += (pointer.y - eased.y) * 0.04
          stage.rotation.y = eased.x * 0.16
          stage.rotation.x = eased.y * 0.1

          renderer.render(scene, camera)
        }

        let rafId
        if (still) {
          // Visitors who asked for less motion get the composition, held still.
          frame()
        } else {
          const loop = () => {
            frame()
            rafId = window.requestAnimationFrame(loop)
          }
          loop()
        }

        this.cleanupFns.push(() => {
          window.cancelAnimationFrame(rafId)
          window.removeEventListener('resize', resize)
          window.removeEventListener('pointermove', onPointerMove)
          geometries.forEach((geometry) => geometry.dispose())
          materials.forEach((material) => material.dispose())
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
  --story-bg: #f6f2e9;
  /* "paper" is the high-contrast heading colour; on the off-white theme that
     role is the deep forest green rather than a near-white. */
  --paper: #1e3a34;
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 70% 8%, rgba(240, 168, 104, 0.22), transparent 24rem),
    linear-gradient(180deg, #f9f6ee 0%, #f6f2e9 58%, #f1ece0 100%);
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
  opacity: 0.62;
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
  box-shadow: 0 10px 40px rgba(30, 58, 52, 0.18);
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

/* The dimmed body colour swallows a plain <strong>, so emphasised words are
   lifted back to full paper white as well as bolded. */
.hero-subtitle strong,
.closing-cta p strong {
  color: var(--paper);
  font-weight: 800;
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
  color: var(--on-accent);
  background: var(--accent);
}

.secondary-action {
  color: var(--text);
  border: 1px solid var(--line-strong);
  background: var(--surface);
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
  border: 1px solid var(--line-strong);
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

.level-card {
  position: relative;
  z-index: 4;
  padding: 1.4rem;
  border: 1px solid var(--line);
  background: var(--panel);
}

.level-card p,
.section-kicker {
  margin: 0 0 0.55rem;
  color: var(--accent-soft);
  font-size: 0.74rem;
  font-weight: 900;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.band-heading h2,
.partner-heading h2,
.closing-cta h2 {
  color: var(--paper);
  font-size: clamp(2rem, 5vw, 4rem);
  margin: 0;
}

.level-card h3 {
  color: var(--paper);
  font-size: clamp(1.5rem, 3vw, 2.1rem);
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
  align-items: center;
}

.format-inner {
  position: relative;
  width: 100%;
  max-width: 900px;
  margin-inline: auto;
}

.format-lead {
  margin: 1.1rem 0 0;
  max-width: 60ch;
  color: var(--text-dim);
  line-height: 1.7;
}

.division-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;
  margin-top: 2.5rem;
}

.written-board {
  margin-top: 1.25rem;
  position: relative;
  padding: clamp(1.5rem, 4vw, 3rem);
  border: 1px solid var(--line);
  background: var(--panel);
}

.write-line {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--line);
}

.write-line:first-child {
  margin-top: 0;
  padding-top: 0;
  border-top: none;
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

.prize-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;
}

/* The free banner is the single loudest claim on the page, so it gets a
   filled seal rather than the outlined chip it used to be. */
.free-banner {
  display: flex;
  align-items: center;
  gap: 1.1rem;
  margin: 0 0 2.4rem;
  padding: 1rem 1.6rem 1rem 1rem;
  border: 1px solid var(--accent);
  border-radius: 999px;
  background: linear-gradient(
    100deg,
    rgba(240, 168, 104, 0.26) 0%,
    rgba(240, 168, 104, 0.08) 55%,
    rgba(240, 168, 104, 0) 100%
  );
  text-align: left;
}

.free-seal {
  flex: none;
  display: grid;
  place-content: center;
  width: 74px;
  height: 74px;
  border-radius: 50%;
  background: var(--accent);
  color: var(--on-accent);
  font-size: 1.32rem;
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.02em;
  box-shadow: 0 6px 18px rgba(224, 144, 78, 0.35);
}

.free-seal em {
  display: block;
  margin-top: 0.2rem;
  font-style: normal;
  font-size: 0.66rem;
  font-weight: 900;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.free-text {
  color: var(--text-dim);
  font-size: 0.98rem;
  line-height: 1.55;
}

.free-text strong {
  display: block;
  color: var(--paper);
  font-size: clamp(1.15rem, 2.4vw, 1.5rem);
  font-weight: 900;
}

/* --- Medals ------------------------------------------------------------ */
/* Ranked cards: each tier carries its own metal colour, and the row steps
   down in height so the podium order reads before the text does. */
.medal-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: end;
  gap: 1rem;
  margin-top: 2.2rem;
}

.medal-card {
  position: relative;
  display: grid;
  justify-items: center;
  gap: 0.55rem;
  padding: 1.9rem 1.1rem 1.5rem;
  border: 1px solid var(--metal);
  border-top: 3px solid var(--metal);
  border-radius: 14px;
  background:
    radial-gradient(circle at 50% 0%, var(--metal-wash), transparent 70%),
    var(--panel);
  text-align: center;
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.medal-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 30px rgba(30, 58, 52, 0.13);
}

.medal-gold {
  --metal: #c8971f;
  --metal-wash: rgba(200, 151, 31, 0.24);
  padding-top: 2.6rem;
}

.medal-silver {
  --metal: #8d979d;
  --metal-wash: rgba(141, 151, 157, 0.24);
  padding-top: 2.15rem;
}

.medal-bronze {
  --metal: #a2652f;
  --metal-wash: rgba(162, 101, 47, 0.22);
}

.medal-disc {
  display: grid;
  place-content: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: 2px solid var(--metal);
  background: var(--metal-wash);
  color: var(--metal);
  font-size: 1rem;
  font-weight: 900;
  letter-spacing: -0.01em;
}

.medal-card strong {
  color: var(--paper);
  font-size: clamp(1.3rem, 2.6vw, 1.75rem);
  line-height: 1.1;
}

.medal-band {
  color: var(--text-dim);
  font-size: 0.76rem;
  font-weight: 900;
  letter-spacing: 0.16em;
  text-transform: uppercase;
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
  border: 1px solid var(--line);
  background: var(--panel);
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
  color: var(--accent-soft);
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
  background: var(--panel);
}

.compact-staff-card img,
.staff-initial {
  width: 72px;
  height: 72px;
  margin: 0 auto 0.8rem;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid var(--line-strong);
}

.staff-initial {
  display: grid;
  place-items: center;
  color: var(--accent-soft);
  font-weight: 900;
  background: rgba(240, 168, 104, 0.22);
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
  border: 1px solid var(--line);
  background: var(--panel);
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
  border: 1px solid var(--line-strong);
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
  border: 1px solid var(--line);
  background: var(--panel);
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
  border: 1px solid var(--line);
  background: var(--panel);
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
  position: relative;
  min-height: 150px;
  display: grid;
  place-items: center;
  gap: 0.7rem;
  padding: 1.25rem;
  color: var(--text);
  text-decoration: none;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 14px;
  overflow: hidden;
  transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease;
}

/* A diagonal sheen that sits off-card until hover, then sweeps across. */
.partner-logo-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    115deg,
    transparent 35%,
    rgba(255, 255, 255, 0.55) 50%,
    transparent 65%
  );
  transform: translateX(-120%);
  transition: transform 0.65s ease;
  pointer-events: none;
}

.partner-logo-card:hover {
  transform: translateY(-5px);
  border-color: var(--accent);
  box-shadow: 0 16px 34px rgba(30, 58, 52, 0.14);
}

.partner-logo-card:hover::after {
  transform: translateX(120%);
}

.partner-logo-card img {
  max-width: 150px;
  max-height: 72px;
  object-fit: contain;
  /* Logos sit slightly muted until the card is hovered, so a row of them
     reads as one block rather than competing for attention. */
  filter: saturate(0.85);
  transition: filter 0.28s ease, transform 0.28s ease;
}

.partner-logo-card:hover img {
  filter: saturate(1.1);
  transform: scale(1.05);
}

.partner-logo-card span {
  font-size: 0.75rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-dim);
  transition: color 0.28s ease;
}

.partner-logo-card:hover span {
  color: var(--paper);
}

/* One --tier-* colour drives the label, the card border and the chip for a
   whole tier row, so a new tier only needs its two custom properties. */
.sponsor-band {
  text-align: center;
}

.sponsor-tier-group {
  margin-top: 2.75rem;
}

.sponsor-tier-group:first-of-type {
  margin-top: 2rem;
}

/* Card width and height fall with the tier, so rank reads at a glance even
   when a tier holds a single sponsor. */
.sponsor-tier-group.tier-platinum {
  --tier: #4f6d7a;
  --tier-wash: rgba(79, 109, 122, 0.12);
  --tier-card: 470px;
  --tier-height: 280px;
}

.sponsor-tier-group.tier-gold {
  --tier: #a37b16;
  --tier-wash: rgba(163, 123, 22, 0.13);
  --tier-card: 425px;
  --tier-height: 255px;
}

.sponsor-tier-group.tier-silver {
  --tier: #7c868d;
  --tier-wash: rgba(124, 134, 141, 0.14);
  --tier-card: 390px;
  --tier-height: 235px;
}

.sponsor-tier-group.tier-bronze {
  --tier: #a2652f;
  --tier-wash: rgba(162, 101, 47, 0.13);
  --tier-card: 355px;
  --tier-height: 215px;
}

.sponsor-tier-group .partner-orbit {
  grid-template-columns: repeat(var(--partner-columns, 1), minmax(0, var(--tier-card)));
  justify-content: center;
  max-width: calc(
    var(--partner-columns, 1) * var(--tier-card) +
    (var(--partner-columns, 1) - 1) * 1rem
  );
}

/* The tier name is the ranking signal for the whole row, so it is sized as a
   heading and flanked by rules that run out to the edge of the group. */
.sponsor-tier-label {
  display: flex;
  align-items: center;
  gap: 1.1rem;
  margin: 0 0 1.5rem;
  color: var(--tier);
  font-size: clamp(1.35rem, 3.2vw, 2.1rem);
  font-weight: 900;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.sponsor-tier-label::before,
.sponsor-tier-label::after {
  content: '';
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--tier));
}

.sponsor-tier-label::after {
  background: linear-gradient(90deg, var(--tier), transparent);
}

.sponsor-card-tiered img {
  max-width: 230px;
  max-height: 108px;
}

.sponsor-card-tiered {
  /* Pack the logo and name as one centred block; without this the grid rows
     stretch to the taller card and leave a hole under the name. */
  align-content: center;
  gap: 1.1rem;
  min-height: var(--tier-height);
  border-color: var(--tier);
  border-top-width: 3px;
  background:
    radial-gradient(circle at 50% 0%, var(--tier-wash), transparent 72%),
    var(--panel);
}

.sponsor-card-tiered:hover {
  border-color: var(--tier);
  box-shadow: 0 18px 38px var(--tier-wash);
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
  .prize-grid {
    grid-template-columns: 1fr;
  }

  .partner-orbit,
  .sponsor-tier-group .partner-orbit {
    grid-template-columns: repeat(2, minmax(130px, 1fr));
    max-width: none;
  }
}

@media (max-width: 640px) {
  .free-banner {
    flex-direction: column;
    align-items: flex-start;
    border-radius: 18px;
    padding: 1.1rem 1.2rem;
  }

  /* The stepped podium heights read as misalignment once the cards stack. */
  .medal-gold,
  .medal-silver {
    padding-top: 1.9rem;
  }

  .story-panel {
    padding: 4.5rem 1rem 5rem;
  }

  .math-canvas {
    display: none;
  }

  .hero-copy h1 {
    font-size: clamp(4rem, 24vw, 5.3rem);
  }

  .medal-grid,
  .division-grid,
  .prize-grid,
  .partner-orbit,
  .sponsor-tier-group .partner-orbit {
    grid-template-columns: 1fr;
  }
}

/* --- Hero flyer teaser ------------------------------------------------- */
/* A small tilted thumbnail of the flyer's first page sitting under the hero
   buttons; the PDF itself is the click target. */
.flyer-peek {
  position: relative;
  z-index: 4;
  display: inline-flex;
  align-items: center;
  gap: 0.85rem;
  margin-left: 0.9rem;
  padding: 0.5rem 1.1rem 0.5rem 0.5rem;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--panel);
  text-decoration: none;
  transition: transform 0.25s ease, border-color 0.25s ease;
}

.flyer-peek:hover {
  transform: translateY(-2px);
  border-color: var(--accent-soft);
}

.flyer-peek img {
  width: 34px;
  height: 44px;
  object-fit: cover;
  object-position: top center;
  border-radius: 6px;
  transform: rotate(-4deg);
  box-shadow: 0 4px 12px rgba(30, 58, 52, 0.18);
  transition: transform 0.25s ease;
}

.flyer-peek:hover img {
  transform: rotate(0deg) scale(1.04);
}

.flyer-peek span {
  color: var(--paper);
  font-size: 0.94rem;
  font-weight: 700;
  letter-spacing: 0.01em;
}

.flyer-peek em {
  font-style: normal;
  color: var(--accent-soft);
}

/* --- Contact ----------------------------------------------------------- */
.contact-card {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1fr);
  gap: 2.5rem;
  max-width: 980px;
  margin: 2.2rem auto 0;
  padding: 2.2rem;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: var(--panel);
  text-align: left;
}

.contact-copy {
  align-self: center;
}

.contact-card h3 {
  margin: 0;
  color: var(--paper);
  font-size: clamp(1.2rem, 2.4vw, 1.55rem);
}

.contact-card p {
  margin: 0.7rem 0 0;
  color: var(--text-dim);
  line-height: 1.65;
}

.contact-mail {
  display: inline-block;
  margin-top: 0.7rem;
  color: var(--accent-soft);
  font-weight: 800;
  text-decoration: none;
  overflow-wrap: anywhere;
  border-bottom: 1px solid transparent;
}

.contact-mail:hover {
  border-bottom-color: currentColor;
}

/* --- Contact form ------------------------------------------------------ */
.contact-form {
  display: grid;
  align-content: start;
  gap: 0.85rem;
}

.field-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.85rem;
}

.field {
  display: grid;
  gap: 0.4rem;
}

.field > span {
  color: var(--text-dim);
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.field em {
  font-style: normal;
  color: var(--accent-soft);
}

.field input,
.field textarea {
  width: 100%;
  padding: 0.62rem 0.8rem;
  border: 1px solid var(--line-strong);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.85);
  color: var(--paper);
  font-size: 0.95rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.field textarea {
  resize: vertical;
  min-height: 96px;
}

.field input:focus,
.field textarea:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(240, 168, 104, 0.28);
}

.contact-form .primary-action {
  justify-self: start;
  margin-top: 0.35rem;
  border: 0;
  cursor: pointer;
  font: inherit;
  font-weight: 900;
}

.contact-form .primary-action[disabled] {
  opacity: 0.6;
  cursor: progress;
}

/* Off-screen rather than display:none - bots skip hidden inputs, but a
   positioned one still looks fillable to them. */
.field-trap {
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

.form-status {
  margin: 0.2rem 0 0;
  font-size: 0.9rem;
  font-weight: 700;
  line-height: 1.5;
}

.form-status.is-ok {
  color: #2f7a5c;
}

.form-status.is-error {
  color: #a8442c;
}

@media (max-width: 520px) {
  .field-row {
    grid-template-columns: 1fr;
  }
}

.contact-note {
  max-width: 640px;
  margin: 1.8rem auto 0;
  color: var(--text-dim);
}

.contact-note a {
  color: var(--accent-soft);
  font-weight: 700;
  text-decoration: none;
}

@media (max-width: 780px) {
  .contact-card {
    grid-template-columns: 1fr;
    gap: 1.6rem;
    padding: 1.6rem;
  }

  /* Once .hero-actions wraps, the extra left margin throws the pill
     off-centre against the buttons above it. */
  .flyer-peek {
    margin-left: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .scroll-cue span {
    animation: none;
  }
}
</style>
