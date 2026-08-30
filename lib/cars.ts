export interface Car {
  id: string;
  name: string;
  brand: string;
  tagline: string;
  price: number;
  horsepower: number;
  year: number;
  accent: string;
  category: string;
  description: string;
  image: string;
  angles: string[];
  specs: {
    engine: string;
    topSpeed: string;
    zeroToSixty: string;
    transmission: string;
    drivetrain: string;
  };
}

export const heroImage = "https://media.base44.com/images/public/6a89983c4daa4f48e2fd69e6/99fd9987d_generated_image.png";

export const cars: Car[] = [
  {
    id: "ferrari-488-gtb",
    name: "Ferrari 488 GTB",
    brand: "Ferrari",
    tagline: "The benchmark mid-engine supercar",
    price: 245000,
    horsepower: 661,
    year: 2018,
    accent: "#D40000",
    category: "Supercar",
    description: "A twin-turbocharged V8 masterpiece with razor-sharp handling and an exhaust note that defines the marque. The 488 GTB returned Ferrari to turbocharging, but you'd never know it from behind the wheel — the throttle response is instantaneous, the balance telepathic, and the sound unmistakably Maranello.",
    image: "https://media.base44.com/images/public/6a89983c4daa4f48e2fd69e6/cca2209eb_generated_image.png",
    angles: [
      "https://media.base44.com/images/public/6a89983c4daa4f48e2fd69e6/cbb61e088_generated_image.png",
      "https://media.base44.com/images/public/6a89983c4daa4f48e2fd69e6/912c68671_generated_image.png",
      "https://media.base44.com/images/public/6a89983c4daa4f48e2fd69e6/720ec0d34_generated_image.png",
      "https://media.base44.com/images/public/6a89983c4daa4f48e2fd69e6/f29faf588_generated_image.png",
      "https://media.base44.com/images/public/6a89983c4daa4f48e2fd69e6/43a3cbe6f_generated_image.png",
      "https://media.base44.com/images/public/6a89983c4daa4f48e2fd69e6/30ed69706_generated_image.png",
    ],
    specs: {
      engine: "3.9L Twin-Turbo V8",
      topSpeed: "205 mph",
      zeroToSixty: "3.0 seconds",
      transmission: "7-speed DCT",
      drivetrain: "Rear-wheel drive",
    },
  },
  {
    id: "aston-martin-db11",
    name: "Aston Martin DB11",
    brand: "Aston Martin",
    tagline: "The grand tourer reborn",
    price: 198000,
    horsepower: 600,
    year: 2019,
    accent: "#1a2a3a",
    category: "Grand Tourer",
    description: "Effortless continent-crossing capability wrapped in timeless British elegance. The DB11 is the car that proved Aston Martin could build a grand tourer for the modern era — beautiful, powerful, and refined in a way that only comes from decades of experience.",
    image: "https://media.base44.com/images/public/6a89983c4daa4f48e2fd69e6/e40ed1be0_generated_image.png",
    angles: [
      "https://media.base44.com/images/public/6a89983c4daa4f48e2fd69e6/b948d2c3b_generated_image.png",
      "https://media.base44.com/images/public/6a89983c4daa4f48e2fd69e6/676104993_generated_image.png",
      "https://media.base44.com/images/public/6a89983c4daa4f48e2fd69e6/328adb5f3_generated_image.png",
      "https://media.base44.com/images/public/6a89983c4daa4f48e2fd69e6/083e8cee4_generated_image.png",
      "https://media.base44.com/images/public/6a89983c4daa4f48e2fd69e6/406b96c7a_generated_image.png",
      "https://media.base44.com/images/public/6a89983c4daa4f48e2fd69e6/b6f32e4eb_generated_image.png",
    ],
    specs: {
      engine: "4.0L Twin-Turbo V8",
      topSpeed: "187 mph",
      zeroToSixty: "3.9 seconds",
      transmission: "8-speed automatic",
      drivetrain: "Rear-wheel drive",
    },
  },
  {
    id: "porsche-911-gt3",
    name: "Porsche 911 GT3",
    brand: "Porsche",
    tagline: "The track-bred 911",
    price: 161000,
    horsepower: 502,
    year: 2022,
    accent: "#2a2a2a",
    category: "Sports Car",
    description: "A naturally aspirated flat-six and suspension tuned at the Nürburgring. Pure driving focus distilled into the most complete 911 there has ever been. No turbochargers, no hybrid assistance, just precision engineering and a 9,000 rpm redline that makes every journey feel like a lap.",
    image: "https://media.base44.com/images/public/6a89983c4daa4f48e2fd69e6/34d4af290_generated_image.png",
    angles: [
      "https://media.base44.com/images/public/6a89983c4daa4f48e2fd69e6/a274b0a2f_generated_image.png",
      "https://media.base44.com/images/public/6a89983c4daa4f48e2fd69e6/da06162a0_generated_image.png",
      "https://media.base44.com/images/public/6a89983c4daa4f48e2fd69e6/7bff3263d_generated_image.png",
      "https://media.base44.com/images/public/6a89983c4daa4f48e2fd69e6/a071bd7dc_generated_image.png",
      "https://media.base44.com/images/public/6a89983c4daa4f48e2fd69e6/6429b6991_generated_image.png",
      "https://media.base44.com/images/public/6a89983c4daa4f48e2fd69e6/2c5fb84ec_generated_image.png",
    ],
    specs: {
      engine: "4.0L Naturally Aspirated Flat-6",
      topSpeed: "198 mph",
      zeroToSixty: "3.2 seconds",
      transmission: "7-speed PDK",
      drivetrain: "Rear-wheel drive",
    },
  },
  {
    id: "lamborghini-huracan",
    name: "Lamborghini Huracán EVO",
    brand: "Lamborghini",
    tagline: "The raging bull, evolved",
    price: 261000,
    horsepower: 631,
    year: 2021,
    accent: "#FFD700",
    category: "Supercar",
    description: "V10 fury with rear-wheel steering and torque vectoring. Theater on four wheels. The Huracán EVO takes everything that made the original Huracán great and adds a level of electronic sophistication that makes its ferocity accessible. It's a supercar that feels alive in a way few others do.",
    image: "https://media.base44.com/images/public/6a89983c4daa4f48e2fd69e6/1372b4129_generated_image.png",
    angles: [
      "https://media.base44.com/images/public/6a89983c4daa4f48e2fd69e6/77fdfa7fa_generated_image.png",
      "https://media.base44.com/images/public/6a89983c4daa4f48e2fd69e6/522b26dbb_generated_image.png",
      "https://media.base44.com/images/public/6a89983c4daa4f48e2fd69e6/8761f8af5_generated_image.png",
      "https://media.base44.com/images/public/6a89983c4daa4f48e2fd69e6/a9235250a_generated_image.png",
      "https://media.base44.com/images/public/6a89983c4daa4f48e2fd69e6/ec613bc7a_generated_image.png",
      "https://media.base44.com/images/public/6a89983c4daa4f48e2fd69e6/512974d88_generated_image.png",
    ],
    specs: {
      engine: "5.2L Naturally Aspirated V10",
      topSpeed: "202 mph",
      zeroToSixty: "2.9 seconds",
      transmission: "7-speed DCT",
      drivetrain: "All-wheel drive",
    },
  },
  {
    id: "mclaren-720s",
    name: "McLaren 720S",
    brand: "McLaren",
    tagline: "Form follows function",
    price: 298000,
    horsepower: 710,
    year: 2020,
    accent: "#FF6600",
    category: "Supercar",
    description: "Twin-turbo V8 in a carbon fiber monocoque. The science of speed, made beautiful. The 720S looks like nothing else because it's designed around a single principle: moving through air as efficiently as possible. The result is a car that feels weightless, regardless of speed.",
    image: "https://media.base44.com/images/public/6a89983c4daa4f48e2fd69e6/3e33876a7_generated_image.png",
    angles: [
      "https://media.base44.com/images/public/6a89983c4daa4f48e2fd69e6/193e055dd_generated_image.png",
      "https://media.base44.com/images/public/6a89983c4daa4f48e2fd69e6/60faa97de_generated_image.png",
      "https://media.base44.com/images/public/6a89983c4daa4f48e2fd69e6/be67023a4_generated_image.png",
      "https://media.base44.com/images/public/6a89983c4daa4f48e2fd69e6/34dd92255_generated_image.png",
      "https://media.base44.com/images/public/6a89983c4daa4f48e2fd69e6/7227de209_generated_image.png",
      "https://media.base44.com/images/public/6a89983c4daa4f48e2fd69e6/8cf0fa572_generated_image.png",
    ],
    specs: {
      engine: "4.0L Twin-Turbo V8",
      topSpeed: "212 mph",
      zeroToSixty: "2.8 seconds",
      transmission: "7-speed DCT",
      drivetrain: "Rear-wheel drive",
    },
  },
  {
    id: "bentley-continental-gt",
    name: "Bentley Continental GT",
    brand: "Bentley",
    tagline: "Luxury without compromise",
    price: 218000,
    horsepower: 650,
    year: 2021,
    accent: "#3d4a3a",
    category: "Grand Tourer",
    description: "W12 power, hand-stitched leather, and a cabin that cocoons you in British luxury. The Continental GT proves that 200+ mph performance and genuine comfort are not mutually exclusive. It's a car that can tear across a continent at triple-digit speeds and then glide into a valet with quiet authority.",
    image: "https://media.base44.com/images/public/6a89983c4daa4f48e2fd69e6/20f89fa47_generated_image.png",
    angles: [
      "https://media.base44.com/images/public/6a89983c4daa4f48e2fd69e6/6df726322_generated_image.png",
      "https://media.base44.com/images/public/6a89983c4daa4f48e2fd69e6/f2f8be9c1_generated_image.png",
      "https://media.base44.com/images/public/6a89983c4daa4f48e2fd69e6/2dcffc469_generated_image.png",
      "https://media.base44.com/images/public/6a89983c4daa4f48e2fd69e6/c093daf22_generated_image.png",
      "https://media.base44.com/images/public/6a89983c4daa4f48e2fd69e6/43544e17f_generated_image.png",
      "https://media.base44.com/images/public/6a89983c4daa4f48e2fd69e6/8842cab79_generated_image.png",
    ],
    specs: {
      engine: "6.0L Twin-Turbo W12",
      topSpeed: "208 mph",
      zeroToSixty: "3.5 seconds",
      transmission: "8-speed DCT",
      drivetrain: "All-wheel drive",
    },
  },
];
