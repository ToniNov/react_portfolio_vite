import { BiUser } from 'react-icons/bi';
import { BsInstagram } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import { MdArrowForward, MdCall, MdOutlinePermContactCalendar } from 'react-icons/md';
import { RiServiceLine, RiProjectorLine } from 'react-icons/ri';
import { TbSmartHome } from 'react-icons/tb';

import person from './assets/images/Person/person.png';
import project1 from './assets/images/Projects/img1.png';
import project2 from './assets/images/Projects/img2.png';
import project3 from './assets/images/Projects/img3.png';
import coding from './assets/images/Services/coding.svg';
import perfectPixel from './assets/images/Services/perfect_pixel.svg';
import testing from './assets/images/Services/testing.svg';
import expressjs from './assets/images/Skills/expressjs.png';
import figma from './assets/images/Skills/figma.png';
import mongodb from './assets/images/Skills/mongodb.png';
import nodejs from './assets/images/Skills/node.png';
import reactjs from './assets/images/Skills/react.png';
import redux from './assets/images/Skills/redux.png';

export const content = {
  nav: [
    {
      link: '#home',
      icon: TbSmartHome,
    },
    {
      link: '#skills',
      icon: BiUser,
    },
    {
      link: '#services',
      icon: RiServiceLine,
    },
    {
      link: '#projects',
      icon: RiProjectorLine,
    },
    {
      link: '#contact',
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    text: 'Hello , I`m a',
    title: 'Frontend Developer',
    firstName: 'ANTON',
    lastName: 'NOVIK',
    btnText: 'Download CV',
    image: person,
  },
  skills: {
    title: 'Skills',
    subtitle: 'MY TOP SKILLS',
    skills_content: [
      {
        id: '1',
        name: 'Redux js',
        para: 'Lorem ipsum text  dummy',
        logo: redux,
      },
      {
        id: '2',
        name: 'React js',
        para: 'Lorem ipsum text  dummy',
        logo: reactjs,
      },
      { id: '3', name: 'Figma', para: 'Lorem ipsum text  dummy', logo: figma },
      {
        id: '4',
        name: 'Node js',
        para: 'Lorem ipsum text  dummy',
        logo: nodejs,
      },
      { id: '5', name: 'Express js', para: 'Lorem ipsum text  dummy', logo: expressjs },
      { id: '6', name: 'Mongodb', para: 'Lorem ipsum text  dummy', logo: mongodb },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: 'Services',
    subtitle: 'WHAT I OFFER',
    service_content: [
      {
        title: 'Coding',
        para: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean',
        logo: coding,
      },
      {
        title: 'Testing',
        para: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean',
        logo: testing,
      },
      {
        title: 'Perfect Pixel',
        para: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean',
        logo: perfectPixel,
      },
    ],
  },
  Projects: {
    title: 'Projects',
    subtitle: 'MY CREATION',
    project_content: [
      {
        title: 'Gym Website',
        image: project1,
      },
      {
        title: 'Social Media web',
        image: project2,
      },
      {
        title: 'Creative Website',
        image: project3,
      },
    ],
  },
  Contact: {
    title: 'Contect Me',
    subtitle: 'GET IN TOUCH',
    social_media: [
      {
        text: 'codeaprogram@gmail.com',
        icon: GrMail,
        link: 'mailto:codeaprogram@gmail.com',
      },
      {
        text: '+91 1234 56778',
        icon: MdCall,
        link: 'https://wa.me/1234567890',
      },
      {
        text: 'codeaprogram',
        icon: BsInstagram,
        link: 'https://www.instagram.com/codeaprogram/',
      },
    ],
  },
  Footer: {
    text: 'All © Copy Right Reserved 2023',
  },
};
