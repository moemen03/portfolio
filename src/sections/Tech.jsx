import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import {
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  typescript,
} from "../assets";
import { SectionWrapper } from "../hoc";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const skillCategories = [
  {
    id: "frontend",
    label: "Frontend Core",
    skills: [
      { name: "React.js", level: 94, icon: reactjs },
      { name: "Next.js", level: 90, icon: "/assets/nextjs.svg" },
      { name: "JavaScript", level: 95, icon: javascript },
      { name: "TypeScript", level: 90, icon: typescript },
      { name: "HTML5", level: 97, icon: html },
      { name: "CSS3", level: 95, icon: css },
      { name: "Tailwind CSS", level: 93, icon: tailwind },
      // { name: "Sass / SCSS", level: 84, abbr: "SC" },
      { name: "Material UI", level: 87, icon: "/assets/mui.svg" },
      { name: "shadcn/ui", level: 86, icon: "/assets/shadcn1.png" },
      // { name: "Bootstrap", level: 90, icon: "/assets/bootstrap.png" },
      // { name: "Three.js", level: 70, icon: threejs },
    ],
  },
  {
    id: "languages",
    label: "Languages",
    skills: [
      { name: "JavaScript", level: 95, icon: javascript },
      { name: "TypeScript", level: 90, icon: typescript },
      { name: "Python", level: 84, abbr: "PY" },
      // { name: "Java", level: 80, abbr: "JV" },
      { name: "C++", level: 78, abbr: "C+" },
      { name: "SQL", level: 88, abbr: "SQL" },
      // { name: "Bash", level: 76, abbr: "$_" },
    ],
  },
  {
    id: "state-api",
    label: "State Management & API",
    skills: [
      { name: "Redux Toolkit", level: 92, icon: redux },
      { name: "TanStack Query", level: 88, abbr: "TQ" },
      { name: "Zustand", level: 84, abbr: "ZS" },
      // { name: "Context API", level: 91, icon: reactjs },
      // { name: "REST APIs", level: 94, abbr: "API" },
      { name: "GraphQL", level: 80, abbr: "GQL" },
      // { name: "Axios", level: 92, abbr: "AX" },
      { name: "WebSockets", level: 78, abbr: "WS" },
      { name: "React Hook Form", level: 86, abbr: "HF" },
    ],
  },
  {
    id: "backend",
    label: "Backend & Database",
    skills: [
      // { name: "Node.js", level: 88, icon: nodejs },
      { name: "Express.js", level: 87, abbr: "EX" },
      { name: "MongoDB", level: 86, icon: mongodb },
      { name: "PostgreSQL", level: 84, abbr: "PG" },
      { name: "Supabase", level: 86, abbr: "SB" },
      // { name: "Prisma", level: 79, abbr: "PR" },
      // { name: "Firebase", level: 83, abbr: "FB" },
      { name: "MySQL", level: 82, abbr: "MY" },
      // { name: "Redis", level: 72, abbr: "RD" },
    ],
  },
  {
    id: "ai",
    label: "AI & Emerging Tech",
    skills: [
      { name: "OpenAI SDK", level: 82, abbr: "AI" },
      { name: "Agentic Workflows", level: 76, abbr: "AG" },
      { name: "Prompt Engineering", level: 86, abbr: "PE" },
      // { name: "RAG Systems", level: 72, abbr: "RAG" },
      { name: "Vector Databases", level: 70, abbr: "VDB" },
      { name: "LangChain", level: 73, abbr: "LC" },
      { name: "LangGraph", level: 70, abbr: "LG" },
    ],
  },
  {
    id: "ui-animation",
    label: "UI & Animation",
    skills: [
      { name: "GSAP", level: 88, abbr: "GS" },
      { name: "Framer Motion", level: 90, icon: "/assets/framer.svg" },
      { name: "Three.js", level: 78, icon: threejs },
      { name: "Responsive Design", level: 96, abbr: "RWD" },
      { name: "Figma", level: 70, icon: figma },
      { name: "Design Systems", level: 60, abbr: "DS" },
      { name: "Accessibility", level: 85, abbr: "A11Y" },
      // { name: "Micro-interactions", level: 89, abbr: "MI" },
      // { name: "WebGL", level: 72, abbr: "GL" },
    ],
  },
  {
    id: "devops",
    label: "DevOps & Deployment",
    skills: [
      { name: "Git", level: 93, icon: git },
      { name: "GitHub", level: 92, icon: "/assets/github.svg" },
      { name: "Docker", level: 80, icon: docker },
      { name: "Vercel", level: 94, abbr: "▲" },
      // { name: "Netlify", level: 89, abbr: "NT" },
      // { name: "AWS", level: 72, abbr: "AWS" },
      { name: "CI / CD", level: 78, abbr: "CI" },
      // { name: "Linux", level: 80, abbr: "LX" },
      // { name: "Nginx", level: 70, abbr: "NX" },
    ],
  },
  {
    id: "testing",
    label: "Testing & Quality",
    skills: [
      { name: "Jest", level: 84, abbr: "JT" },
      { name: "Vitest", level: 82, abbr: "VT" },
      { name: "React Testing Library", level: 84, icon: reactjs },
      // { name: "Cypress", level: 76, abbr: "CY" },
      { name: "Playwright", level: 74, abbr: "PW" },
      { name: "ESLint", level: 90, abbr: "ES" },
      { name: "Prettier", level: 92, abbr: "PT" },
      { name: "Lighthouse", level: 88, abbr: "LH" },
    ],
  },

  
];

const skillColors = ["#9c86ff", "#79ead2", "#f7b267", "#6fb4ff"];

const Tech = () => {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);
  const sectionRef = useRef(null);
  const panelRef = useRef(null);
  const tabsRef = useRef(null);

  const selectedCategory = skillCategories.find(
    (category) => category.id === activeCategory,
  );

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".skills-title", {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
          },
        });

        gsap.from(".skills-tabs-wrap", {
          y: 20,
          opacity: 0,
          duration: 0.75,
          delay: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        });
      });

      return () => media.revert();
    },
    { scope: sectionRef },
  );

  useGSAP(
    () => {
      const items = gsap.utils.toArray(".skill-item", panelRef.current);
      const bars = gsap.utils.toArray(".skill-progress-fill", panelRef.current);

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(items, { y: 0, autoAlpha: 1 });
        gsap.set(bars, {
          scaleX: (_, bar) => Number(bar.dataset.level) / 100,
        });
        return;
      }

      gsap.fromTo(
        items,
        { y: 18, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.52,
          stagger: 0.045,
          ease: "power3.out",
        },
      );

      gsap.fromTo(
        bars,
        { scaleX: 0 },
        {
          scaleX: (_, bar) => Number(bar.dataset.level) / 100,
          duration: 0.9,
          stagger: 0.045,
          ease: "power3.out",
        },
      );
    },
    { scope: panelRef, dependencies: [activeCategory], revertOnUpdate: true },
  );

  const selectCategory = (categoryId, event) => {
    setActiveCategory(categoryId);

    const scroller = tabsRef.current;
    const button = event.currentTarget;
    const centeredPosition =
      button.offsetLeft - scroller.clientWidth / 2 + button.offsetWidth / 2;

    scroller.scrollTo({ left: centeredPosition, behavior: "smooth" });
  };

  const scrollCategories = () => {
    const scroller = tabsRef.current;
    const atEnd =
      scroller.scrollLeft + scroller.clientWidth >= scroller.scrollWidth - 8;

    scroller.scrollTo({
      left: atEnd ? 0 : scroller.scrollLeft + 310,
      behavior: "smooth",
    });
  };

  return (
    <section ref={sectionRef} className="skills-section section-glass" aria-labelledby="skills-heading">
      <div className="skills-title">
        <p><span /> 04 / Capabilities</p>
        <h2 id="skills-heading">Skills &amp; Expertise</h2>
      </div>

      <div className="skills-tabs-wrap">
        <div
          ref={tabsRef}
          className="skills-tabs"
          role="tablist"
          aria-label="Skill categories"
        >
          {skillCategories.map((category) => (
            <button
              key={category.id}
              id={`skill-tab-${category.id}`}
              className={`skills-tab ${activeCategory === category.id ? "is-active" : ""}`}
              type="button"
              role="tab"
              aria-selected={activeCategory === category.id}
              aria-controls="skills-panel"
              onClick={(event) => selectCategory(category.id, event)}
            >
              <i aria-hidden="true" />
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        <button
          className="skills-tabs-arrow"
          type="button"
          aria-label="Scroll skill categories"
          onClick={scrollCategories}
        >
          <span aria-hidden="true">›</span>
        </button>
      </div>

      <div
        ref={panelRef}
        id="skills-panel"
        className="skills-grid"
        role="tabpanel"
        aria-labelledby={`skill-tab-${activeCategory}`}
      >
        {selectedCategory.skills.map((skill, index) => (
          <article
            key={`${selectedCategory.id}-${skill.name}`}
            className="skill-item"
            style={{ "--skill-color": skillColors[index % skillColors.length] }}
          >
            <div className="skill-item-heading">
              <span className="skill-icon" aria-hidden="true">
                {skill.icon ? <img src={skill.icon} alt="" /> : skill.abbr}
              </span>
              <h3>{skill.name}</h3>
              <strong>{skill.level}%</strong>
            </div>
            <div className="skill-progress" aria-hidden="true">
              <span className="skill-progress-fill" data-level={skill.level} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "skills");
