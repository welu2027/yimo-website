<template>
  <div class="content-page chapters-page">
    <header class="chapters-hero">
      <p class="chapters-kicker">YIMO chapters</p>
      <h1>Bring competitive math to your community.</h1>
      <p class="chapters-lead">
        Join the fastest-growing student-led math initiative. YIMO is looking for passionate students to launch founding chapters at their schools and bring competitive math to local communities.
      </p>
      <p class="chapters-intro">
        As a joint initiative under <a href="https://nxthorizon.org/" target="_blank" rel="noopener">NXT Horizon</a> and <a href="https://www.stemise.org/" target="_blank" rel="noopener">STEMise</a>, YIMO's mission is to make math competitions accessible to students everywhere. Chapter leads partner with a local math club, circle, or organization to host events such as our Estimathon, with all materials, branding, and support provided by us. No experience required, just enthusiasm for math and your community.
      </p>
      <div class="chapters-actions">
        <a class="chapter-action chapter-action-primary" href="https://forms.gle/HkeVEqEBevGdxWN4A" target="_blank" rel="noopener">Apply to form a chapter</a>
        <a class="chapter-action chapter-action-secondary" href="https://www.yimo-official.org/YIMO_2026_Flyer.pdf" target="_blank" rel="noopener">Read the flyer</a>
      </div>
      <p class="chapters-required">
        <strong>Required for chapter leads:</strong> You must join our <a href="https://discord.com/invite/fkyDZvDMKT" target="_blank" rel="noopener">Discord server</a>, where communications will take place.
      </p>
    </header>

    <div class="chapters-content">
        <section id="what-is-a-chapter">
          <h2>What a chapter is</h2>
          <p>
            A YIMO Chapter is a school math club, local math circle, or local organization or nonprofit that partners with YIMO to bring our competitions and workshops to its community. We provide the event materials and branding; chapters provide the local student reach.
          </p>
        </section>

        <section id="chapter-leads">
          <h2>What chapter leads do</h2>
          <ul class="chapter-list">
            <li>Host 1-2 YIMO events per semester in collaboration with a local math club or organization. YIMO provides the full event kit: slides, problems, scoring, and promotional graphics. <strong>Our first chapter event will be a YIMO Estimathon, with the full event kit provided by us.</strong></li>
            <li>Promote YIMO registration at your school before the main competition.</li>
            <li>Recruit members and share photos or recaps after events. This helps YIMO with sponsors that make our events and prizes possible.</li>
            <li>Join a monthly chapters check-in call.</li>
          </ul>
          <div class="time-commitment">
            <span>Time commitment</span>
            <strong>2-5 hours per month</strong>
            <p>About 5 hours during the week of an event.</p>
          </div>
        </section>

        <section id="benefits">
          <h2>Benefits for chapter leaders</h2>
          <ul class="benefit-list">
            <li>Official chapter title for your resume</li>
            <li>Feature on our website and social media</li>
            <li>Volunteer hours</li>
            <li>A certificate and letter from a 501(c)(3)</li>
            <li>Event kits ready to run</li>
            <li>Priority access to mentors and speakers</li>
          </ul>
        </section>

        <section id="application" class="application-section">
          <h2>Form a founding chapter</h2>
          <p>Use the application form to bring YIMO to your school or local math community.</p>
          <a class="chapter-action chapter-action-primary" href="https://forms.gle/HkeVEqEBevGdxWN4A" target="_blank" rel="noopener">Open the application form</a>
        </section>

        <footer class="chapter-contact">
          <p>Questions?</p>
          <p>DM <strong>_dragon123_</strong> or contact <a href="mailto:adithya.balakumar@nxthorizon.org">adithya.balakumar@nxthorizon.org</a>.</p>
        </footer>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'YIMO Chapters',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Launch a founding YIMO chapter at your school or local math community.',
        },
      ],
    }
  },
}
</script>

<style scoped>
.chapters-page {
  --chapters-bg: transparent;
  --chapters-bg-soft: var(--panel);
  --chapters-paper: var(--text);
  --chapters-muted: var(--text-dim);
  --chapters-faint: var(--text-faint);
  --chapters-line: var(--line-strong);
  --chapters-line-soft: var(--line);
  --chapters-accent: var(--accent);
  --chapters-accent-soft: var(--accent-soft);
  min-height: 100vh;
  color: var(--chapters-paper);
  background: var(--chapters-bg);
}

.chapters-hero {
  padding: 0 0 2.5rem;
  border-bottom: 1px solid var(--chapters-line-soft);
}

.chapters-kicker,
.chapter-contact > p:first-child,
.time-commitment > span {
  margin: 0;
  color: var(--chapters-accent-soft);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  line-height: 1.4;
  text-transform: uppercase;
}

.chapters-hero h1 {
  max-width: 620px;
  margin: 0 0 0.5rem;
  color: var(--chapters-paper);
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 900;
  line-height: 1.15;
}

.chapters-lead,
.chapters-intro {
  max-width: 560px;
  color: var(--chapters-muted);
  line-height: 1.75;
}

.chapters-lead {
  margin: 0;
  font-size: 1.05rem;
}

.chapters-intro {
  margin: 1rem 0 0;
  font-size: 0.95rem;
}

.chapters-page a {
  color: var(--chapters-accent-soft);
  text-decoration: underline;
  text-underline-offset: 0.2em;
}

.chapters-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2rem;
}

.chapter-action {
  display: inline-flex;
  min-height: 46px;
  align-items: center;
  justify-content: center;
  padding: 0 1.1rem;
  border: 1px solid transparent;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 800;
  text-decoration: none !important;
}

.chapter-action-primary {
  color: var(--on-accent) !important;
  background: var(--chapters-accent);
}

.chapter-action-primary:hover,
.chapter-action-primary:focus-visible {
  color: var(--on-accent) !important;
  background: var(--chapters-accent-soft);
}

.chapter-action-secondary {
  color: var(--text) !important;
  border-color: var(--chapters-line);
  background: var(--surface);
}

.chapter-action-secondary:hover,
.chapter-action-secondary:focus-visible {
  color: var(--chapters-accent-soft) !important;
  border-color: var(--chapters-accent);
}

.chapters-required {
  max-width: 720px;
  margin: 2rem 0 0;
  padding: 1rem 0 1rem 1.2rem;
  border-left: 1px solid var(--chapters-accent);
  color: var(--chapters-muted);
  font-size: 0.92rem;
  line-height: 1.7;
}

.chapters-required strong {
  color: var(--chapters-paper);
}

.chapters-content section {
  padding: 2.5rem 0 0;
  border-top: 1px solid var(--chapters-line);
}

.chapters-content h2 {
  margin: 0 0 1rem;
  color: var(--chapters-accent-soft);
  font-size: 1.35rem;
  font-weight: 800;
  line-height: 1.15;
}

.chapters-content section > p,
.chapter-list,
.benefit-list {
  max-width: 620px;
  color: var(--chapters-muted);
  font-size: 0.95rem;
  line-height: 1.75;
}

.chapters-content section > p {
  margin: 0;
}

.chapter-list,
.benefit-list {
  margin: 0;
  padding-left: 1.25rem;
}

.chapter-list li,
.benefit-list li {
  margin-bottom: 0.95rem;
  padding-left: 0.35rem;
}

.chapter-list strong {
  color: var(--chapters-paper);
}

.time-commitment {
  display: grid;
  grid-template-columns: 150px minmax(0, 1fr);
  gap: 0.4rem 1.5rem;
  max-width: 540px;
  margin-top: 2rem;
  padding: 1.25rem 0;
  border-top: 1px solid var(--chapters-accent);
  border-bottom: 1px solid var(--chapters-line-soft);
}

.time-commitment strong {
  color: var(--chapters-paper);
  font-size: 1.15rem;
}

.time-commitment p {
  grid-column: 2;
  margin: 0;
  color: var(--chapters-muted);
  font-size: 0.9rem;
}

.benefit-list {
  columns: 2;
  column-gap: 3rem;
  list-style: none;
  padding-left: 0;
}

.benefit-list li {
  break-inside: avoid;
  padding: 0.75rem 0 0.75rem 1rem;
  border-left: 1px solid var(--chapters-accent);
  border-bottom: 1px solid var(--chapters-line-soft);
}

.application-section {
  padding: 2rem 1.5rem 4rem !important;
  background: var(--chapters-bg-soft);
  border: 1px solid var(--chapters-line) !important;
  border-radius: 12px;
}

.application-section > * {
  margin-left: 0;
  margin-right: 0;
}

.application-section .chapter-action {
  margin-top: 1.6rem;
}

.chapter-contact {
  padding-top: 2rem;
  border-top: 1px solid var(--chapters-accent);
}

.chapter-contact p:last-child {
  margin: 0.75rem 0 0;
  color: var(--chapters-muted);
  line-height: 1.7;
}

.chapter-contact strong {
  color: var(--chapters-paper);
}

@media (max-width: 860px) {
  .chapters-hero {
    padding-bottom: 2.5rem;
  }
}

@media (max-width: 560px) {
  .chapters-hero h1 {
    font-size: 2.4rem;
  }

  .chapters-lead {
    font-size: 1.05rem;
  }

  .chapters-content h2 {
    font-size: 2.6rem;
  }

  .time-commitment {
    grid-template-columns: 1fr;
  }

  .time-commitment p {
    grid-column: auto;
  }

  .benefit-list {
    columns: 1;
  }

  .application-section {
    padding: 1.5rem 1rem 2.75rem !important;
  }

  .application-section > * {
    margin-left: 0;
    margin-right: 0;
  }
}
</style>
