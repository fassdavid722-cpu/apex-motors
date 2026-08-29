export interface Car {
  id: string;
  name: string;
  tagline: string;
  price: number;
  horsepower: number;
  year: number;
  accent: string;
  category: string;
  description: string;
}

export const cars: Car[] = [
  {
    id: "ferrari-488-gtb",
    name: "Ferrari 488 GTB",
    tagline: "The benchmark mid-engine supercar",
    price: 245000,
    horsepower: 661,
    year: 2018,
    accent: "#D40000",
    category: "Supercar",
    description: "A twin-turbocharged V8 masterpiece with razor-sharp handling and an exhaust note that defines the marque.",
  },
  {
    id: "aston-martin-db11",
    name: "Aston Martin DB11",
    tagline: "The grand tourer reborn",
    price: 198000,
    horsepower: 600,
    year: 2019,
    accent: "#1a2a3a",
    category: "Grand Tourer",
    description: "Effortless continent-crossing capability wrapped in timeless British elegance.",
  },
  {
    id: "porsche-911-gt3",
    name: "Porsche 911 GT3",
    tagline: "The track-bred 911",
    price: 161000,
    horsepower: 502,
    year: 2022,
    accent: "#2a2a2a",
    category: "Sports Car",
    description: "A naturally aspirated flat-six and suspension tuned at the Nürburgring. Pure driving focus.",
  },
  {
    id: "lamborghini-huracan",
    name: "Lamborghini Huracán EVO",
    tagline: "The raging bull, evolved",
    price: 261000,
    horsepower: 631,
    year: 2021,
    accent: "#FFD700",
    category: "Supercar",
    description: "V10 fury with rear-wheel steering and torque vectoring. Theater on four wheels.",
  },
  {
    id: "mclaren-720s",
    name: "McLaren 720S",
    tagline: "Form follows function",
    price: 298000,
    horsepower: 710,
    year: 2020,
    accent: "#FF6600",
    category: "Supercar",
    description: "Twin-turbo V8 in a carbon fiber monocoque. The science of speed, made beautiful.",
  },
  {
    id: "bentley-continental-gt",
    name: "Bentley Continental GT",
    tagline: "Luxury without compromise",
    price: 218000,
    horsepower: 650,
    year: 2021,
    accent: "#3d4a3a",
    category: "Grand Tourer",
    description: "W12 power, hand-stitched leather, and a cabin that cocoons you in British luxury.",
  },
];
