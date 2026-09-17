import MouseMascot from '../components/MouseMascot.jsx';

const Hero = () => {
  return (
    <section className="hero-shell" id="home">
      <div className="hero-vignette" aria-hidden="true" />

      <div className="hero-content c-space">
        <div className="hero-intro">
          <p className="hero-kicker">
            <span className="hero-kicker-dot" /> Software engineer · Cairo
          </p>
          <h1>
            Hey there,
            <span>I&apos;m Moamen.</span>
          </h1>
          <p className="hero-lede">
            I build thoughtful digital products where clean engineering meets playful interaction.
          </p>
          <div className="hero-actions">
            <a className="hero-primary-action" href="#projects">
              Explore my work <span aria-hidden="true">↗</span>
            </a>
            <a className="hero-secondary-action" href="#contact">
              Let&apos;s talk
            </a>
          </div>
        </div>

        <div className="hero-mascot-stage">
          <MouseMascot />
          <p className="hero-mascot-hint">
            <span /> I follow your cursor
          </p>
        </div>

        <aside className="hero-note">
          <span className="hero-note-index">01 / INTRO</span>
          <p>
            Software developer focused on fast, accessible, and memorable web experiences.
          </p>
          <div className="hero-availability">
            <span /> Available for select projects
          </div>
        </aside>
      </div>

      <a className="hero-scroll" href="#about" aria-label="Scroll to about section">
        <span>Scroll to explore</span>
        <span className="hero-scroll-line" />
      </a>
    </section>
  );
};

export default Hero;
