// lib/cars.ts — Apex Motors vehicle catalogue
export type Car = {
  id: string;
  name: string;
  tagline: string;
  price: number;
  year: number;
  mileage: number;
  horsepower: number;
  image: string;
  accent: string;
};

export const cars: Car[] = [
  {
    id: 'gt-2024',
    name: 'Gran Turismo',
    tagline: 'A grand tourer refined to its purest expression.',
    price: 184500,
    year: 2024,
    mileage: 1240,
    horsepower: 612,
    image: '/images/cars/gt.jpg',
    accent: '#1c1917',
  },
  {
    id: 'spider-2023',
    name: 'Spider',
    tagline: 'Open-top motoring at its most essential.',
    price: 142000,
    year: 2023,
    mileage: 3210,
    horsepower: 562,
    image: '/images/cars/spider.jpg',
    accent: '#44403c',
  },
  {
    id: 'coupe-2024',
    name: 'Coupé',
    tagline: 'A two-door silhouette shaped entirely by purpose.',
    price: 167250,
    year: 2024,
    mileage: 880,
    horsepower: 580,
    image: '/images/cars/coupe.jpg',
    accent: '#292524',
  },
];
