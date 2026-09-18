import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { myProjects } from '../constant/index.js';

const projectThemes = [
  { accent: '#f2cb72', accentRgb: '242, 203, 114', surface: '#211b12' },
  { accent: '#65e6bd', accentRgb: '101, 230, 189', surface: '#0d211d' },
  { accent: '#f2cb72', accentRgb: '242, 203, 114', surface: '#211b12' },
  { accent: '#70b7ff', accentRgb: '112, 183, 255', surface: '#0c1b31' },
  { accent: '#f19aca', accentRgb: '241, 154, 202', surface: '#25131f' },
  { accent: '#5fe0a0', accentRgb: '95, 224, 160', surface: '#0d2118' },
  { accent: '#70b7ff', accentRgb: '112, 183, 255', surface: '#0c1b31' },
  { accent: '#731a29', accentRgb: '115, 26, 41', surface: '#731a29' },

];

const formatProjectNumber = (index) => String(index + 1).padStart(2, '0');

const projectId = (title) => `project-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`;

const displayTitle = (title) => title.split(' - ')[0];

const projectPropType = PropTypes.shape({
  availability: PropTypes.arrayOf(PropTypes.string),
  category: PropTypes.string,
  desc: PropTypes.string.isRequired,
  href: PropTypes.string,
  logo: PropTypes.string,
  logoStyle: PropTypes.object,
  logoText: PropTypes.string,
  subdesc: PropTypes.string,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  texture: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
});

const ProjectPreview = ({ project, index }) => {
  const videoRef = useRef(null);
  const isMobileProduct = index < 2;

  useEffect(() => {
    const video = videoRef.current;
    if (!video || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => undefined);
        else video.pause();
      },
      { threshold: 0.35 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [project.texture]);

  return (
    <div className={`project-media-stage ${isMobileProduct ? 'project-media-stage--mobile' : ''}`}>
      <div className="project-media-orbit project-media-orbit--one" aria-hidden="true" />
      <div className="project-media-orbit project-media-orbit--two" aria-hidden="true" />

      <div className={`project-device ${isMobileProduct ? 'project-device--phone' : 'project-device--screen'}`}>
        {isMobileProduct ? (
          <div className="project-device-phone-bar" aria-hidden="true">
            <span>9:41</span>
            <i />
            <span>● ●</span>
          </div>
        ) : (
          <div className="project-device-browser-bar" aria-hidden="true">
            <div>
              <i />
              <i />
              <i />
            </div>
            <span>{displayTitle(project.title).toLowerCase().replaceAll(' ', '')}.studio</span>
          </div>
        )}

        <video
          ref={videoRef}
          className="project-preview-video"
          src={project.texture}
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={`${displayTitle(project.title)} project preview`}
        />
      </div>

      <div className="project-media-caption" aria-hidden="true">
        <span>Live motion</span>
        <span>{isMobileProduct ? 'Mobile experience' : 'Product walkthrough'}</span>
      </div>
    </div>
  );
};

ProjectPreview.propTypes = {
  index: PropTypes.number.isRequired,
  project: projectPropType.isRequired,
};

const ProjectLogo = ({ project }) => (
  <div className="project-story-logo" style={project.logoStyle}>
    {project.logo ? <img src={project.logo} alt="" /> : <span aria-hidden="true">{project.logoText}</span>}
  </div>
);

ProjectLogo.propTypes = {
  project: projectPropType.isRequired,
};

const ProjectAction = ({ project }) => {
  if (project.href) {
    return (
      <a className="project-story-link" href={project.href} target="_blank" rel="noreferrer">
        <span>View live project</span>
        <i aria-hidden="true">↗</i>
      </a>
    );
  }

  if (project.availability?.length) {
    return (
      <div className="project-story-availability" aria-label="Project availability">
        {project.availability.map((status) => (
          <span key={status}>{status}</span>
        ))}
      </div>
    );
  }

  return (
    <div className="project-story-preview-label">
      <span />
      Product preview
    </div>
  );
};

ProjectAction.propTypes = {
  project: projectPropType.isRequired,
};

const ProjectStory = ({ project, index, total }) => {
  const theme = projectThemes[index % projectThemes.length];
  const visibleTags = project.tags.slice(0, 6);
  const remainingTags = project.tags.slice(6);

  return (
    <article
      id={projectId(project.title)}
      className="project-story"
      style={{
        '--project-accent': theme.accent,
        '--project-accent-rgb': theme.accentRgb,
        '--project-surface': theme.surface,
      }}
    >
      <ProjectPreview project={project} index={index} />

      <div className="project-story-content">
        <div className="project-story-topline">
          <span>{formatProjectNumber(index)}</span>
          <span>{project.category ?? 'Digital product'}</span>
          <span>{String(total).padStart(2, '0')}</span>
        </div>

        <div className="project-story-heading">
          <ProjectLogo project={project} />
          <h3>{displayTitle(project.title)}</h3>
        </div>

        <p className="project-story-lead">{project.desc}</p>
        <p className="project-story-detail">{project.subdesc}</p>

        <div className="project-story-tags" aria-label={`${displayTitle(project.title)} technology stack`}>
          {visibleTags.map((tag, tagIndex) => (
            <span key={`${tag.name}-${tagIndex}`}>{tag.name}</span>
          ))}
          {remainingTags.length > 0 && (
            <span
              title={remainingTags.map((tag) => tag.name).join(', ')}
              aria-label={`Additional technologies: ${remainingTags.map((tag) => tag.name).join(', ')}`}
            >
              +{remainingTags.length} more
            </span>
          )}
        </div>

        <div className="project-story-footer">
          <ProjectAction project={project} />
          <span className="project-story-discipline">Design · Development</span>
        </div>
      </div>
    </article>
  );
};

ProjectStory.propTypes = {
  index: PropTypes.number.isRequired,
  project: projectPropType.isRequired,
  total: PropTypes.number.isRequired,
};

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const stories = [...document.querySelectorAll('.project-story')];
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) setActiveProject(stories.indexOf(visibleEntry.target));
      },
      { rootMargin: '-22% 0px -46% 0px', threshold: [0.05, 0.25, 0.5] },
    );

    stories.forEach((story) => observer.observe(story));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects-showcase section-glass c-space">
      <header className="projects-showcase-header">
        <div className="projects-showcase-title">
          <p className="projects-showcase-eyebrow">
            <span />
            Selected work · 2024—2026
          </p>
          <h2>
            Digital products with
            <em> a pulse.</em>
          </h2>
        </div>

        <div className="projects-showcase-intro">
          <p>
            From AI-native tools to playful worlds—each project pairs strong engineering with an experience people
            can feel.
          </p>
          <span>Scroll to explore the collection</span>
        </div>
      </header>

      <nav className="projects-index" aria-label="Selected work index">
        <span className="projects-index-label">Project index</span>
        <div className="projects-index-links">
          {myProjects.map((project, index) => (
            <a
              key={project.title}
              href={`#${projectId(project.title)}`}
              className={activeProject === index ? 'is-active' : ''}
              aria-current={activeProject === index ? 'true' : undefined}
            >
              <span>{formatProjectNumber(index)}</span>
              {displayTitle(project.title)}
            </a>
          ))}
        </div>
      </nav>

      <div className="projects-stories">
        {myProjects.map((project, index) => (
          <ProjectStory key={project.title} project={project} index={index} total={myProjects.length} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
