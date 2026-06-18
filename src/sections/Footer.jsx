const socials = [
  {
    name: "GitHub",
    href: "https://github.com/",
    icon: "/assets/github.svg",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/",
    icon: "/assets/twitter.svg",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/",
    icon: "/assets/instagram.svg",
  },
];

function Footer() {
  return (
    <footer className="c-space py-8 border-t border-black-300 flex flex-col gap-5 sm:flex-row justify-between items-center">
      <div className="flex gap-3 text-white-500 text-sm">
        <a href="#about" className="hover:text-white transition-colors">
          Terms &amp; Conditions
        </a>
        <span>|</span>
        <a href="#contact" className="hover:text-white transition-colors">
          Privacy Policy
        </a>
      </div>

      <div className="flex gap-4">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="w-10 h-10 flex justify-center items-center rounded-lg bg-black-200 hover:bg-black-300 transition-colors"
          >
            <img src={social.icon} alt={social.name} className="w-1/2 h-1/2" />
          </a>
        ))}
      </div>

      <p className="text-white-500 text-sm">
        © {new Date().getFullYear()} Moamen Alaa. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
