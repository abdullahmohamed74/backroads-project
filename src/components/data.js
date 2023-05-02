import tour1 from '../images/tour-1.jpeg';
import tour2 from '../images/tour-2.jpeg';
import tour3 from '../images/tour-3.jpeg';
import tour4 from '../images/tour-4.jpeg';
import tour5 from '../images/tour-5.jpeg';
import tour6 from '../images/tour-6.jpeg';

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
];

export const socialLinls = [
  { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 2, href: 'https://www.facebook.com', icon: 'fab fa-facebook' },
  { id: 3, href: 'https://www.linkedin.com', icon: 'fab fa-linkedin' },
];

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    heading: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    heading: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    heading: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia',
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: 'august 26th, 2020',
    heading: 'Tibet Adventure',
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
    vitae tempore voluptatum maxime reprehenderit eum quod
    exercitationem fugit, qui corporis.`,
    location: 'china',
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: 'october 1th, 2020',
    heading: 'best of java',
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
    vitae tempore voluptatum maxime reprehenderit eum quod
    exercitationem fugit, qui corporis.`,
    location: 'indonesia',
    duration: 11,
    cost: 1400,
  },
  {
    id: 3,
    image: tour3,
    date: 'september 15th, 2020',
    heading: 'explore hong kong',
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
    vitae tempore voluptatum maxime reprehenderit eum quod
    exercitationem fugit, qui corporis.`,
    location: 'hong kong',
    duration: 8,
    cost: 5000,
  },
  {
    id: 4,
    image: tour4,
    date: 'december 5th, 2019',
    heading: 'kenya highlights',
    text: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
    vitae tempore voluptatum maxime reprehenderit eum quod
    exercitationem fugit, qui corporis.`,
    location: 'kenya',
    duration: 20,
    cost: 3300,
  },
  {
    id: 5,
    image: tour5,
    date: 'may 15th, 2022',
    heading: 'algeria highlights',
    text: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
    vitae tempore voluptatum maxime reprehenderit eum quod
    exercitationem fugit, qui corporis.`,
    location: 'algeria',
    duration: 22,
    cost: 4500,
  },
  {
    id: 6,
    image: tour6,
    date: 'april 5th, 2020',
    heading: 'egypt highlights',
    text: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
    vitae tempore voluptatum maxime reprehenderit eum quod
    exercitationem fugit, qui corporis.`,
    location: 'egypt',
    duration: 17,
    cost: 6000,
  },
];
