import { useRef } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { experiences } from "../constant/index";
import { SectionWrapper } from "../hoc";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const accentColors = ["#9c86ff", "#79ead2", "#f7b267"];

const getCursorDate = (date) => date.split(" - ").at(-1);

const Experience = () => {
  const sectionRef = useRef(null);
  const cursorRef = useRef(null);
  const cursorLabelRef = useRef(null);

  useGSAP(
    () => {
      const cursor = cursorRef.current;
      const cursorLabel = cursorLabelRef.current;
      const media = gsap.matchMedia();
      const cleanups = [];

      if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        const rows = sectionRef.current.querySelectorAll(".experience-row");
        const setCursorX = gsap.quickSetter(cursor, "x", "px");
        const setCursorY = gsap.quickSetter(cursor, "y", "px");
        const current = { x: 0, y: 0 };
        const target = { x: 0, y: 0 };
        let isTracking = false;

        const renderCursor = () => {
          const follow = 1 - Math.pow(0.72, gsap.ticker.deltaRatio());
          current.x += (target.x - current.x) * follow;
          current.y += (target.y - current.y) * follow;
          setCursorX(current.x);
          setCursorY(current.y);
        };

        const startTracking = (event) => {
          target.x = event.clientX;
          target.y = event.clientY;
          current.x = event.clientX;
          current.y = event.clientY;
          setCursorX(current.x);
          setCursorY(current.y);

          cursorLabel.textContent = event.currentTarget.dataset.cursorDate;

          if (!isTracking) {
            isTracking = true;
            gsap.ticker.add(renderCursor);
          }

          gsap.to(cursor, {
            autoAlpha: 1,
            scale: 1,
            duration: 0.24,
            ease: "power3.out",
            overwrite: true,
          });
        };

        const updateTarget = (event) => {
          target.x = event.clientX;
          target.y = event.clientY;
        };

        const stopTracking = () => {
          if (isTracking) {
            isTracking = false;
            gsap.ticker.remove(renderCursor);
          }

          gsap.to(cursor, {
            autoAlpha: 0,
            scale: 0.82,
            duration: 0.16,
            ease: "power2.out",
            overwrite: true,
          });
        };

        rows.forEach((row) => {
          row.addEventListener("pointerenter", startTracking, { passive: true });
          row.addEventListener("pointermove", updateTarget, { passive: true });
          row.addEventListener("pointerleave", stopTracking, { passive: true });
          row.addEventListener("pointercancel", stopTracking, { passive: true });

          cleanups.push(() => {
            row.removeEventListener("pointerenter", startTracking);
            row.removeEventListener("pointermove", updateTarget);
            row.removeEventListener("pointerleave", stopTracking);
            row.removeEventListener("pointercancel", stopTracking);
          });
        });

        cleanups.push(() => {
          gsap.ticker.remove(renderCursor);
          gsap.killTweensOf(cursor);
        });
      }

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".experience-heading > *", {
          y: 30,
          opacity: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".experience-heading",
            start: "top 84%",
          },
        });

        gsap.fromTo(
          ".experience-rail-progress",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".experience-timeline",
              start: "top 72%",
              end: "bottom 68%",
              scrub: 0.55,
            },
          },
        );

        gsap.utils.toArray(".experience-row").forEach((row) => {
          const content = row.querySelectorAll(
            ".experience-company, .experience-date, .experience-role, .experience-description",
          );

          gsap.from(content, {
            y: 24,
            opacity: 0,
            duration: 0.8,
            stagger: 0.075,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 86%",
            },
          });

          gsap.from(row.querySelector(".experience-dot-core"), {
            scale: 0,
            duration: 0.55,
            ease: "back.out(1.9)",
            scrollTrigger: {
              trigger: row,
              start: "top 84%",
            },
          });
        });
      });

      return () => {
        cleanups.forEach((cleanup) => cleanup());
        media.revert();
      };
    },
    { scope: sectionRef },
  );

  return (
    <>
      <section ref={sectionRef} id="experience" className="experience-shell section-glass">
        <div className="experience-heading">
          <p className="experience-eyebrow">
            <span /> 03 / Experience
          </p>
          <div>
            <h2>Work Experience.</h2>
            <p>
              A timeline of the classrooms, teams, and products that shaped how I
              build for the web.
            </p>
          </div>
        </div>

        <div className="experience-timeline">
          <div className="experience-rail" aria-hidden="true">
            <span className="experience-rail-progress" />
          </div>

          {experiences.map((experience, index) => {
            const cursorDate = getCursorDate(experience.date);

            return (
              <article
                key={`${experience.company_name}-${experience.title}-${experience.date}`}
                className="experience-row"
                data-cursor-date={cursorDate}
                style={{ "--experience-accent": accentColors[index % accentColors.length] }}
                tabIndex="0"
              >
                <div className="experience-meta">
                  <div className="experience-company-line">
                    <span className="experience-logo">
                      <img src={experience.icon} alt="" aria-hidden="true" />
                    </span>
                    <h3 className="experience-company">{experience.company_name}</h3>
                  </div>
                  <p className="experience-date">{experience.date}</p>
                </div>

                <div className="experience-marker" aria-hidden="true">
                  <span className="experience-dot-core" />
                </div>

                <div className="experience-details">
                  <p className="experience-role">{experience.title}</p>
                  <ul className="experience-description">
                    {experience.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {createPortal(
        <div ref={cursorRef} className="experience-cursor" aria-hidden="true">
          <span ref={cursorLabelRef} />
        </div>,
        document.body,
      )}
    </>
  );
};

export default SectionWrapper(Experience, "work");
