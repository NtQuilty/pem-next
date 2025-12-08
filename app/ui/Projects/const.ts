interface ProjectData {
  id: number;
  title: string;
  imagePath: string;
}

export const projectsData: ProjectData[] = [
  { id: 1, title: 'Ручной прибор', imagePath: '/images/projects/one.webp' },
  { id: 2, title: 'Кровельный конек', imagePath: '/images/projects/two.webp' },
  {
    id: 3,
    title: 'Форма для объёмной штамповки металла',
    imagePath: '/images/projects/three.webp',
  },
  { id: 4, title: 'Корпус электроприбора', imagePath: '/images/projects/four.webp' },
  { id: 5, title: 'Завальцовщик', imagePath: '/images/projects/five.webp' },
  { id: 6, title: 'Лабораторный штатив для пипеток', imagePath: '/images/projects/six.webp' },
];
