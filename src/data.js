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
    icon: <FiInstagram />,
    href: 'https://www.instagram.com/mackgrissom/',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/MackGrissom',
  },
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/mackgrissom/',
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
  },
  {
    id: '2',
    image: Project2,
    name: 'Snatch',
    category: 'web development',
  },
  // {
  //   id: '3',
  //   image: Project3,
  //   name: 'project name 3',
  //   category: 'UI/UX design',
  // },
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
    name: 'all',
  },
  {
    name: 'UI/UX Design',
  },
  {
    name: 'web development',
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
      'I will provide you with a customized website design that is perfect for your business or personal site. We will work together to find the perfect style for you while maintaining modern design principles and making your website a delight to use for your end user.',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'Weather you already have a design, or we just built one together now is the time to make it real. This is where the real leg-work begins and your idea becomes a reality for the whole world to see.',
  },
  {
    icon: <FiUser />,
    name: 'User Research',
    description:
      'Having and idea is one thing, building it is another, but determining if users even want it and how they would want it is vastly more important. At the core of every successful product is a neverending push towards customer development. Lets get the conversation with your users started.',
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
    subtitle: 'I am here to help you!',
    description: 'Email me at mcintyregrissom@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Bangkok, Thailand',
    description: 'Serving clients worldwide',
  },
];
