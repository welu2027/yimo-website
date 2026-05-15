<template>
  <div>
    <!-- Hero -->
    <section class="hero">
      <img class="hero-mascot" src="/yimo-logo-gold.png" alt="YIMO" />
      <div class="hero-eyebrow">
        <span class="dot"></span> Registration Open · May 21 Deadline
      </div>
      <h1 class="hero-title">
        The youth <span class="accent-word">international</span> math olympiad
      </h1>
      <p class="hero-sub">
        YIMO is a global, youth-led math competition designed with
        <span class="accent">fairness, community, and growth</span>
        as core values. Open to all students , no prior competition experience required.
      </p>
      <div class="hero-meta">
        <div class="meta-item">
          <span class="meta-label">Date</span>
          <span class="meta-value">May 23 / 24, 2026</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Format</span>
          <span class="meta-value">Individual · Online</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Eligibility</span>
          <span class="meta-value">All Students</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Divisions</span>
          <span class="meta-value">Advanced · Beginner</span>
        </div>
      </div>
      <div class="hero-ctas">
        <a class="btn btn-primary" href="https://forms.gle/QBDTLeHFffWiWbyN6" target="_blank" rel="noopener">Register →</a>
        <a class="btn btn-secondary" href="/about">How it works</a>
        <a class="btn btn-secondary" href="https://discord.gg/fkyDZvDMKT" target="_blank" rel="noopener">Join Discord</a>
      </div>
    </section>

    <hr class="section-divider" />

    <!-- Divisions -->
    <section class="section">
      <p class="section-label">Divisions</p>
      <h2 class="section-title">Choose your level</h2>
      <p class="section-sub">Two divisions based on skill level , pick the one that fits you.</p>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.25rem;">
        <div class="division-card">
          <span class="division-card-badge badge-advanced">Advanced · Division 1</span>
          <h3>High Achievers</h3>
          <p>Designed for early AIME to high AIME level competitors looking for a serious challenge.</p>
          <ul>
            <li>Written test: 20 questions (10 MCQ + 10 AIME-style)</li>
            <li>Top 8 advance to the Final Round</li>
            <li>Final Round: 2 computational + 2 proofs</li>
            <li>Gold / Silver / Bronze on written test</li>
          </ul>
        </div>
        <div class="division-card">
          <span class="division-card-badge badge-beginner">Beginner · Division 2</span>
          <h3>Rising Stars</h3>
          <p>AMC 10 to early AIME level , great for students building competition experience.</p>
          <ul>
            <li>Same written format as Division 1</li>
            <li>Top 8 advance to the Final Round</li>
            <li>Final Round: 3 computational + 1 proof</li>
            <li>Gold / Silver / Bronze on written test</li>
          </ul>
        </div>
      </div>
    </section>

    <hr class="section-divider" />

    <!-- Format -->
    <section class="section">
      <p class="section-label">Format</p>
      <h2 class="section-title">How it works</h2>
      <p class="section-sub">A fair, online individual competition with two test windows to choose from.</p>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1rem;margin-bottom:2rem;">
        <div class="format-card">
          <div class="format-card-num">01</div>
          <h3>Written Test</h3>
          <p>20 questions , 10 MCQ and 10 AIME-style integer answers. Timed, proctored via exam.net.</p>
        </div>
        <div class="format-card">
          <div class="format-card-num">02</div>
          <h3>Proctoring</h3>
          <p>Join a Google Meet call with a webcam showing your face and desk. Use a separate device from your exam device.</p>
        </div>
        <div class="format-card">
          <div class="format-card-num">03</div>
          <h3>Final Round</h3>
          <p>Top 8 scorers per division advance to a proof-based final round with cash and sponsor prizes.</p>
        </div>
        <div class="format-card">
          <div class="format-card-num">04</div>
          <h3>Awards</h3>
          <p>Final Round placements 1st–8th, plus written test medals: Gold (top 10%), Silver (20%), Bronze (30%).</p>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1rem;">
        <div class="window-card">
          <span class="window-card-label">Window A</span>
          <h3>Saturday, May 23</h3>
          <p>21:30 EST · American / Asia friendly</p>
        </div>
        <div class="window-card">
          <span class="window-card-label">Window B</span>
          <h3>Sunday, May 24</h3>
          <p>11:00 AM EST · Europe / American friendly</p>
        </div>
      </div>
    </section>

    <hr class="section-divider" />

    <!-- Partners -->
    <section class="section" style="text-align:center;">
      <p class="section-label">Partners</p>
      <h2 class="section-title">In partnership with</h2>
      <div class="sponsor-grid" style="margin-top:2rem;">
        <a href="https://www.usamoguide.com/" target="_blank" rel="noopener" class="partner-card">
          <img src="/Test_logo.png" alt="USAMO Guide" />
        </a>
        <a href="https://saintlymath.com/" target="_blank" rel="noopener" class="partner-card">
          <img src="/Saintly.png" alt="Saintly" />
        </a>
        <a href="https://app.reasoninginstitute.com/onboarding/topics" target="_blank" rel="noopener" class="partner-card">
          <img src="/ReasoningInstitute.png" alt="Reasoning Institute" />
        </a>
        <a href="https://usaeo.org/" target="_blank" rel="noopener" class="partner-card">
          <img src="/USAEO.png" alt="USAEO" />
        </a>
      </div>
    </section>

    <hr class="section-divider" />

    <!-- CTA Strip -->
    <div class="cta-strip">
      <h2>Ready to compete?</h2>
      <p>Registration closes May 21, 23:59 EST. Sign up now and join the global math community.</p>
      <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:0.75rem;">
        <a class="btn btn-primary" href="https://forms.gle/QBDTLeHFffWiWbyN6" target="_blank" rel="noopener">Register now →</a>
        <a class="btn btn-secondary" href="https://discord.gg/fkyDZvDMKT" target="_blank" rel="noopener">Join Discord</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
