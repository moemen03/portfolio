import {
  route,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  manifesto,
  ensoulify,
} from "../assets";
import nextjs from '/assets/nextjs.svg'
import shadcn from '/assets/shadcn1.png'




export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Experience',
      href: '#experience',
      // href: '#work',
    },
    {
      id: 4,
      name: 'Projects',
      href: '#projects',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      position: 'Marketing Director at GreenLeaf',
      img: 'assets/review1.png',
      review:
        'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Mark Rogers',
      position: 'Founder of TechGear Shop',
      img: 'assets/review2.png',
      review:
        'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Project Manager at UrbanTech ',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'CEO of BrightStar Enterprises',
      img: 'assets/review4.png',
      review:
        'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'Rose - E-commerce website',
      desc: 'Rose is a comprehensive e-commerce website for gifts and flowers. It offers a user-friendly interface, secure payment options, and a seamless shopping experience.',
      subdesc:
        'Next.js, Tailwind CSS, TypeScript, ShadCn ,NextAuth',
      href: 'https://flowered-commerce.vercel.app/',
      texture: '/textures/project/project4.mp4',
      logo: '/assets/rose.png',
      logoStyle: {
        backgroundColor: '#FDD6EE',
        border: '0.2px solid #FDD6EE',
        boxShadow: '0px 0px 60px 0px #FDD6EE',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Next.js',
          path: '/assets/nextjs.svg',
        },
        {
          id: 4,
          name: 'shadcn',
          path: '/assets/shadcn.png',
        },

      ],
    },
    {
      title: 'FreshCart - E-commerce website',
      desc: 'FreshCart is a comprehensive e-commerce website that caters to a wide range of products and services. It offers a user-friendly interface, secure payment options, and a seamless shopping experience.',
      subdesc:
        'React, Tailwind CSS, TypeScript, bootstrap, fontawesome',
      href: 'https://eco-iota-amber.vercel.app/',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/project-logo1.svg',
      logoStyle: {
        backgroundColor: '##00CC74',
        border: '0.2px solid #00CC74',
        boxShadow: '0px 0px 60px 0px #00CC74',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'fontawesome',
          path: '/assets/fontawesome.png',
        },
      ],
    },
    {
      title: 'momo-clone - Real-Time meeting and Collaboration App',
      desc: 'a Real-Time meeting and Collaboration App. It provides a seamless experience for users to create and join virtual meetings, share files, and communicate with other participants in real-time.',
      subdesc:
        'Built with Next.js 14, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
      href: 'https://momo-clone.vercel.app/',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/project-logo2.svg',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'Next.js',
          path: '/assets/nextjs.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'clerk',
          path: '/assets/clerk.avif',
        },
      ],
    },
    {
      title: 'MomoTube - YouTube Clone',
      desc: 'MomoTube is a YouTube clone that provides a user-friendly interface for users to watch videos, create playlists, and share their favorite content with others.',
      subdesc:
        'Built with React.js, Tailwind CSS, TypeScript , Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
      href: 'https://momo-tube.vercel.app/',
      texture: '/textures/project/project3.mp4',
      logo: '/assets/project-logo3.png',
      logoStyle: {
        backgroundColor: '#600001',
        background:
          'linear-gradient(0deg, #600001, #600051), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid #600001',
        boxShadow: '0px 0px 60px 0px rgba(135, 50, 6, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'MUI',
          path: '/assets/mui.svg',
        },
      ],
    },

  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.7 : isMobile ? 0.8 : 1,
      deskPosition: isMobile ? [0.5, -2.5, 0] : [1, -4.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Framer',
      pos: 'Lead Web Developer',
      duration: '2022 - Present',
      title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
      icon: '/assets/framer.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Figma',
      pos: 'Web Developer',
      duration: '2020 - 2022',
      title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
      icon: '/assets/figma.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Notion',
      pos: 'Junior Web Developer',
      duration: '2019 - 2020',
      title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
      icon: '/assets/notion.svg',
      animation: 'salute',
    },
  ];



const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  heroHeadText:
    "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
  heroSubText:
    "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  sectionHeadText:
    "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
  sectionSubText:
    "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
};

// export { styles };
  







const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "ShadCn",
    icon: shadcn,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Front-end Mentor",
    company_name: "Route Academy",
    icon: route,
    iconBg: "#383E56",
    date: "October 2023 - November 2024",
    points: [
      "Privileged to guide aspiring developers in mastering frontend technologies, fostering not only technical effective communication and problem-solving skills. proficiency but also",
      "Ability to collaborate effectively with team members and adapt to various learning styles.",
    ],
  },
  {
    title: "Frontend React.js Intern",
    company_name: "Manifesto Business",
    icon: manifesto,
    iconBg: "#E6DEDD",
    date: "May 2025 - September 2024",
    points: [
      "Contributed to the development of HAAI, a recruitment app, by building and optimizing dynamic user interfaces using React.js and integrating RESTful APIs for enhanced functionality.",
      "Collaborated with designers to translate UI/UX wireframes into responsive code and participated in code reviews to maintain high-quality standards.",
    ],
  },
  {
    title: "Front-end Vue.js Intern",
    company_name: "Ensoulify",
    icon: ensoulify,
    iconBg: "#383E56",
    date: "September 2024 - October 2024",
    points: [
      "Built and sustained interactive user interfaces with Vue.js.",
      "Contributed to the development of Edaripa",
    ],
  },
  {
    title: "Front-end Instructor",
    company_name: "Route Academy",
    icon: route,
    iconBg: "#E6DEDD",
    date: "December 2024 - Present",
    points: [
      "Delivered interactive courses on frontend development, covering HTML, CSS (including Flexbox, Grid, and animations), JavaScript, React.js, Next.js, responsive design.",
      "Taught advanced topics like performance optimization, debugging, testing with tools like Jest, API integration, and modern CSS techniques (SASS, CSS Modules, and Styled Components), ensuring students gained practical, job-ready skills.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];



export { technologies, experiences, testimonials,styles  };
