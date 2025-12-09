import type { NavigationLink, Service } from './types';
import { SOCIAL_LINKS } from './constants/social';

export { SOCIAL_LINKS };

export const navigationLinks: NavigationLink[] = [
  {
    id: 'home',
    title: 'Главная',
    link: '/',
  },
  // Пока нет расчета стоимости лазерной резки
  // {
  //   id: 'laser-cutting',
  //   title: 'Лазерная резка',
  //   link: '/laser-cutting',
  // },
  {
    id: 'portfolio',
    title: 'Портфолио',
    link: '/portfolio',
  },
  {
    id: 'help',
    title: 'Помощь',
    link: '/help',
  },
  {
    id: 'about',
    title: 'О компании',
    link: '/about',
  },
  {
    id: 'contacts',
    title: 'Контакты',
    link: '/contacts',
  },
];

export const services: readonly Service[] = [
  {
    id: 'lazer',
    title: 'Лазерная резка черных и цветных металлов с высокой точностью',
    description:
      'Режем с точностью от 0,02мм черную сталь толщиной до 40мм, нержавейку до 20мм, алюминий до 10мм и другие металлы.',
    image: '/images/services-images/service-lazer.webp',
  },
  {
    id: 'lathe',
    title:
      '8-ми летний производственный опыт, компетентные инженеры и технологи, контроль качества',
    description:
      'Сделаем раскладку, быстро рассчитаем стоимость изготовления, дадим реальные сроки. Бережно относимся к материалам заказчика, гарантируем высокое качество деталей.',
    image: '/images/services-images/service-lathe.webp',
  },
];

export const TELEPHONE_NUMBER = '+78122192015';
export const EMAIL = 'zakaz24@nrg-m.ru';
export const ADDRESS = 'г. Санкт-Петербург, ул. Седова 57';
