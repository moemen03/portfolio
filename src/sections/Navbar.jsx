import { useEffect, useState } from 'react';

import { navLinks } from '../constant/index.js';

const sectionLinks = navLinks.filter((item) => item.href.startsWith('#'));

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let frameId;
    let ticking = false;

    const updateNavigation = () => {
      const scrollMarker = window.scrollY + window.innerHeight * 0.34;
      let currentSection = 'home';

      sectionLinks.forEach((item) => {
        const section = document.getElementById(item.href.slice(1));

        if (section) {
          const sectionTop = section.getBoundingClientRect().top + window.scrollY;
          if (sectionTop <= scrollMarker) currentSection = item.href.slice(1);
        }
      });

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 12) {
        currentSection = 'contact';
      }

      setIsScrolled(window.scrollY > 32);
      setActiveSection(currentSection);
      ticking = false;
    };

    const requestUpdate = () => {
      if (!ticking) {
        ticking = true;
        frameId = window.requestAnimationFrame(updateNavigation);
      }
    };

    updateNavigation();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  const closeMenu = () => setIsOpen(false);

  const navigationItems = (
    <ul className="nav-ul">
      {navLinks.map((item) => {
        const sectionId = item.href.startsWith('#') ? item.href.slice(1) : null;
        const isActive = sectionId === activeSection;

        return (
          <li key={item.id} className="nav-li">
            <a
              href={item.href}
              className={`nav-li_a ${isActive ? 'is-active' : ''}`}
              aria-current={isActive ? 'page' : undefined}
              onClick={closeMenu}
            >
              {item.name}
            </a>
          </li>
        );
      })}
    </ul>
  );

  return (
    <header className={`site-navbar ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="site-navbar-inner">
        <a href="#home" className="site-navbar-brand" onClick={closeMenu}>
          Moamen<span>.</span>
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="site-navbar-toggle"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <img
            src={isOpen ? '/assets/close.svg' : '/assets/menu.svg'}
            alt=""
            className="w-6 h-6"
          />
        </button>

        <nav className="site-navbar-desktop" aria-label="Primary navigation">
          {navigationItems}
        </nav>
      </div>

      <div className={`nav-sidebar ${isOpen ? 'is-open' : ''}`}>
        <nav className="site-navbar-mobile" aria-label="Mobile navigation">
          {navigationItems}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
