const specialties = [
  {
    title: 'Software Engineering',
    description: 'Building reliable products across interfaces, APIs, and databases.',
    color: 'violet',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 9 5 12l3 3M16 9l3 3-3 3M14 6l-4 12" />
      </svg>
    ),
  },
  {
    title: 'Teaching & Mentorship',
    description: 'Helping GIU students turn theory into working software.',
    color: 'mint',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m3 9 9-5 9 5-9 5-9-5Z" />
        <path d="M7 12v4.5c2.7 2 7.3 2 10 0V12M21 9v6" />
      </svg>
    ),
  },
  {
    title: 'Agentic AI',
    description: 'Exploring intelligent agents, tool use, and automation.',
    color: 'amber',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6 7 7M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4" />
      </svg>
    ),
  },
];

const About = () => {
  return (
    <section className="about-minimal c-space" id="about" aria-labelledby="about-title">
      <div className="about-minimal-grid">
        <div className="about-minimal-services" aria-label="What I do">
          <p className="about-minimal-label">What I do</p>

          <div className="about-minimal-list">
            {specialties.map((specialty) => (
              <article className="about-minimal-item" key={specialty.title}>
                <div className={`about-minimal-icon about-minimal-icon--${specialty.color}`}>
                  {specialty.icon}
                </div>
                <div>
                  <h3>{specialty.title}</h3>
                  <p>{specialty.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="about-minimal-copy">
          <p className="about-minimal-label">About me</p>
          <h2 id="about-title">Software engineer, educator, and lifelong learner.</h2>

          <div className="about-minimal-body">
            <p>
              I&apos;m Moamen Alaa, a software engineer with 2+ years of experience building responsive,
              production-ready applications with React, Next.js, TypeScript, Node.js, PostgreSQL,
              and Supabase.
            </p>
            <p>
              As a Teaching Assistant at the German International University, I turn complex ideas
              into practical lessons. I&apos;m now expanding that mindset into agentic AI and
              human-centered automation.
            </p>
          </div>

          <div className="about-minimal-stats" aria-label="Career highlights">
            <div><strong>2+</strong><span>Years of experience</span></div>
            <div><strong>200+</strong><span>Students taught</span></div>
            <div><strong>15+</strong><span>Core technologies</span></div>
          </div>

          <a className="about-minimal-link" href="#experience">
            See my experience <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
