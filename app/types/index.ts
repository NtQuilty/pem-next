export type NavigationOption = {
  id: string;
  title: string;
  link: string;
};

export type NavigationLink = {
  id: string;
  title: string;
  link: string;
  options?: NavigationOption[];
};

// Service types
export type Service = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export type ServiceItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  bgImage: string;
};

export type ProjectData = {
  id: number;
  title: string;
  imagePath: string;
};

export type Question = {
  question: string;
  answer: string;
  isDefaultOpen?: boolean;
};

export type Advantage = {
  title: string;
  description: string;
};

export type OrderFormType = 'order' | 'consultation' | 'discount';
