//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiLinkedin,
  FiUser,
  FiSmile,
} from 'react-icons/fi';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/p1.webp';
import Project2 from './assets/img/projects/p2.webp';
import Project3 from './assets/img/projects/p3.webp';
import Project4 from './assets/img/projects/p4.webp';
import Project5 from './assets/img/projects/p5.webp';
import Project6 from './assets/img/projects/p6.webp';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/ruby.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'testimonials',
    href: 'testimonials',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiGithub />,
    href: 'https://github.com/MackGrissom',
  },
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/mackgrissom/',
  },
  {
    icon: <FiInstagram />,
    href: 'https://www.instagram.com/mackgrissom/',
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'Renbo.io',
    category: 'web development',
    description: " Renbo is a full stack Blockchain ticketing platform that utilizes NFT ticketing to provide event goers with a unique ticketing experience while providing ticket sellers with full control of the resale market. Built on Ruby on Rails.",
    link: "www.Renbo.io"
  },

  {
    id: '2',
    image: Project2,
    name: 'Snatch',
    category: 'web development',
    description: "Snatch is a full stack motorbike marketplace that allows users to rent scooters/motorcycles/bikes based on their location. This was built primarily on Ruby on Rails. ",
    link: "https://snatch-app.herokuapp.com/"
  },
  {
    id: '3',
    image: Project3,
    name: 'Modern UI/UX Landing Page',
    category: 'UI/UX design',
    description: "A modern UI-UX landing page built in React. Based off of a Figma design."
  },
  // {
  //   id: '4',
  //   image: Project4,
  //   name: 'project name 4',
  //   category: 'branding',
  // },
  // {
  //   id: '5',
  //   image: Project5,
  //   name: 'project name 5',
  //   category: 'web development',
  // },
  // {
  //   id: '6',
  //   image: Project6,
  //   name: 'project name 6',
  //   category: 'web development',
  // },
];

// projects
export const projectsNav = [
  {
    name: 'All',
  },
  {
    name: 'UI/UX Design',
  },
  {
    name: 'Web development',
  },

];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'I will provide you with a custom website design that is perfect for your business or personal site. We will work together to find the perfect style for you while maintaining modern design principles and making your website a delight to use for your end user.',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'Whether you already have a design in mind , or we just built one together now is the time to make it real. This is where the real leg-work begins and your idea becomes a reality for the whole world to see.',
  },
  {
    icon: <FiUser />,
    name: 'User Research',
    description:
      'Having and idea is one thing, building it is another, but building it correctly and determining if users even want it and how they would want it is vastly more important. I will provide you with answers to challenging and unexplored questions surrounding your products design. Together we can find out what consumers want from your product.  At the core of every successful product is a neverending push towards customer development. Lets get the conversation with your users started.',
  },
  {
    icon: <FiSmile />,
    name: 'Design Sprint',
    description:
      'I will lead you and your team through a intensive 5 day design sprint. If you are unfamiliar a design sprint is a time-constrained, five-phase process that uses design thinking with the aim of reducing the risk when bringing a new product, service or a feature to the market. This is vital for any new product or service - here is a look into the 5 stages of a design sprint: Empathize, Define, Ideate, Prototype, and Test. If you are ready, lets start sprinting!   ',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'I worked with Mack as project manager during the development of his web app Renbo. Mack impressed me by his detail oriented attitude towards his front-end features from the from the prototyping to the deployment in production. I can also state with confidence that he has been a balancing element in the dev team as per his strong interpersonal skills, an important skill that I look for in the fast paced environment of building an MVP. I can recommend 100% Mack for a full-stack developer or front-end role.',
    authorName: 'Daniel Rodriguez',
    authorPosition: 'Project Manager',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Mack is an excellent leader. He is incredibly aware of his skills and the people that surround him. He is definitely a great team player, especially under high pressure, and it was always rewarding to work with him. He has helped me grow as a professional and as an individual. I am looking forward to working with you again Mack!',
    authorName: 'Jorge Eduardo Quiroz Villa',
    authorPosition: 'Founder of Digital Marketing & Sales Agency - Medical Industry',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'Ask me anything!',
    description: 'Email me at mack@mackgrissom.io',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Bangkok, Thailand',
    description: 'Serving clients worldwide',
  },
];
