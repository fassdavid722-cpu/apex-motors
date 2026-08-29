export type EngineType =
  | "V8 Twin-Turbo"
  | "V12 Naturally Aspirated"
  | "Flat-6"
  | "Electric Tri-Motor"
  | "V8 Hybrid"
  | "Inline-6 Turbo"
  | "W16 Quad-Turbo"
  | "V10 Naturally Aspirated";

export type Car = {
  id: string;
  make: string;
  model: string;
  year: number;
  tagline: string;
  price: number; // USD
  zeroToSixty: number; // seconds
  topSpeedMph: number;
  horsepower: number;
  torqueLbFt: number;
  engine: EngineType;
  displacement: string;
  transmission: string;
  drivetrain: "RWD" | "AWD" | "FWD" | "MR";
  weight: number; // lbs
  bodyStyle: "Coupe" | "Roadster" | "Sedan" | "Hypercar" | "GT";
  origin: string;
  hero: string; // path in /public
  gallery: string[];
  story: string;
  highlights: string[];
};

export const CARS: Car[] = [
  {
    id: "porsche-911-gt3-rs",
    make: "Porsche",
    model: "911 GT3 RS",
    year: 2025,
    tagline: "Track weapon disguised as a daily driver.",
    price: 241300,
    zeroToSixty: 3.0,
    topSpeedMph: 184,
    horsepower: 518,
    torqueLbFt: 346,
    engine: "Flat-6",
    displacement: "4.0L",
    transmission: "7-speed PDK",
    drivetrain: "RWD",
    weight: 3450,
    bodyStyle: "Coupe",
    origin: "Stuttgart, Germany",
    hero: "/images/cars/gt3rs.png",
    gallery: ["/images/cars/gt3rs.png"],
    story:
      "Born on the Nürburgring, refined on the autobahn, and finished by hand in Zuffenhausen. The GT3 RS is the most track-focused 911 Porsche has ever sold to the public — with a central radiator pulled straight from the Le Mans prototype.",
    highlights: [
      "DRS rear wing with active aero",
      "Weissach package magnesium wheels",
      "Natural aspiration to 9,000 rpm",
      "0–60 in 3.0 seconds flat",
    ],
  },
  {
    id: "ferrari-sf90-stradale",
    make: "Ferrari",
    model: "SF90 Stradale",
    year: 2024,
    tagline: "The first series-production Ferrari with PHEV architecture.",
    price: 511000,
    zeroToSixty: 2.5,
    topSpeedMph: 211,
    horsepower: 986,
    torqueLbFt: 590,
    engine: "V8 Hybrid",
    displacement: "4.0L V8 + 3 e-motors",
    transmission: "8-speed DCT",
    drivetrain: "AWD",
    weight: 3460,
    bodyStyle: "Coupe",
    origin: "Maranello, Italy",
    hero: "/images/cars/sf90.png",
    gallery: ["/images/cars/sf90.png"],
    story:
      "Named for Scuderia Ferrari's 90th anniversary, the SF90 pairs a 769 hp twin-turbo V8 with three electric motors to deliver nearly 1,000 horsepower through all four wheels. It is the most powerful road Ferrari ever made at launch.",
    highlights: [
      "Plug-in hybrid with 16-mile electric range",
      "0–124 mph in 6.7 seconds",
      "Active aero with rear shut-off Gurney",
      "Carbon-fibre tub derived from LaFerrari",
    ],
  },
  {
    id: "tesla-model-s-plaid",
    make: "Tesla",
    model: "Model S Plaid",
    year: 2024,
    tagline: "The fastest production sedan ever built. Period.",
    price: 109990,
    zeroToSixty: 1.99,
    topSpeedMph: 200,
    horsepower: 1020,
    torqueLbFt: 1050,
    engine: "Electric Tri-Motor",
    displacement: "—",
    transmission: "Single-speed",
    drivetrain: "AWD",
    weight: 4766,
    bodyStyle: "Sedan",
    origin: "Fremont, California",
    hero: "/images/cars/plaid.png",
    gallery: ["/images/cars/plaid.png"],
    story:
      "Three carbon-sleeved permanent-magnet motors, a 1,020-volt architecture, and a quarter-mile time that embarrasses dedicated supercars. The Plaid is what happens when Silicon Valley decides to redefine performance.",
    highlights: [
      "Sub-2-second 0–60 mph",
      "9.23-second quarter mile",
      "396-mile EPA range",
      "17-inch cinematic infotainment display",
    ],
  },
  {
    id: "lamborghini-revuelto",
    make: "Lamborghini",
    model: "Revuelto",
    year: 2025,
    tagline: "The successor to the Aventador. The future of the bull.",
    price: 600000,
    zeroToSixty: 2.5,
    topSpeedMph: 217,
    horsepower: 1001,
    torqueLbFt: 791,
    engine: "V12 Naturally Aspirated",
    displacement: "6.5L V12 + 3 e-motors",
    transmission: "8-speed DCT",
    drivetrain: "AWD",
    weight: 3873,
    bodyStyle: "Hypercar",
    origin: "Sant'Agata Bolognese, Italy",
    hero: "/images/cars/revuelto.png",
    gallery: ["/images/cars/revuelto.png"],
    story:
      "A naturally aspirated V12 paired with three electric motors — the Revuelto is Lamborghini's first V12 hybrid. It sings to 9,500 rpm while delivering 1,001 hp. The shape was designed to slice air, the soundtrack was designed to slice souls.",
    highlights: [
      "9,500 rpm redline V12",
      "Three electric motors with torque fill",
      "Carbon-forged monofuselage",
      "Active aerodynamics with ALA 2.0",
    ],
  },
  {
    id: "bugatti-chiron-super-sport",
    make: "Bugatti",
    model: "Chiron Super Sport",
    year: 2023,
    tagline: "273 mph. A lounge chair with a war crime under the hood.",
    price: 3900000,
    zeroToSixty: 2.4,
    topSpeedMph: 273,
    horsepower: 1577,
    torqueLbFt: 1180,
    engine: "W16 Quad-Turbo",
    displacement: "8.0L W16",
    transmission: "7-speed DCT",
    drivetrain: "AWD",
    weight: 4365,
    bodyStyle: "Hypercar",
    origin: "Molsheim, France",
    hero: "/images/cars/chiron.png",
    gallery: ["/images/cars/chiron.png"],
    story:
      "The last great internal-combustion hypercar. The Chiron Super Sport's 8.0-liter W16 produces 1,577 horsepower, breathes through four turbochargers, and propels a luxury car to speeds that would be illegal on any public road on Earth.",
    highlights: [
      "Quad-turbo W16 with 1,577 hp",
      "273 mph top speed (electronically limited)",
      "Hand-stitched leather and exposed carbon",
      "Built in Molsheim over 8+ months per car",
    ],
  },
  {
    id: "mclaren-750s",
    make: "McLaren",
    model: "750S Spider",
    year: 2025,
    tagline: "The lightest, most powerful series McLaren ever.",
    price: 345000,
    zeroToSixty: 2.7,
    topSpeedMph: 206,
    horsepower: 740,
    torqueLbFt: 590,
    engine: "V8 Twin-Turbo",
    displacement: "4.0L V8",
    transmission: "7-speed SSG",
    drivetrain: "RWD",
    weight: 3131,
    bodyStyle: "Roadster",
    origin: "Woking, England",
    hero: "/images/cars/750s.png",
    gallery: ["/images/cars/750s.png"],
    story:
      "The 750S took the legendary 720S and made it lighter, faster, and more responsive. The hydraulic suspension is gone — replaced with next-gen PCC III dampers that read the road 1,000 times per second. The hardtop retracts in 11 seconds.",
    highlights: [
      "30 kg lighter than 720S",
      "Retractable hardtop in 11 seconds",
      "Proactive Chassis Control III",
      "Variable Drift Control for tail-out fun",
    ],
  },
  {
    id: "aston-martin-db12",
    make: "Aston Martin",
    model: "DB12 Volante",
    year: 2025,
    tagline: "The world's first super tourer.",
    price: 286000,
    zeroToSixty: 3.6,
    topSpeedMph: 202,
    horsepower: 671,
    torqueLbFt: 590,
    engine: "V8 Twin-Turbo",
    displacement: "4.0L V8",
    transmission: "8-speed auto",
    drivetrain: "RWD",
    weight: 3968,
    bodyStyle: "GT",
    origin: "Gaydon, England",
    hero: "/images/cars/db12.png",
    gallery: ["/images/cars/db12.png"],
    story:
      "Aston Martin's self-proclaimed super tourer — a GT with the chassis and brakes of a sports car. The 671 hp Mercedes-AMG-derived V8 and an electronically-controlled limited-slip differential make this the most capable DB ever sold.",
    highlights: [
      "671 hp twin-turbo V8",
      "Carbon-ceramic brakes standard",
      "8-layer fabric roof in 14 seconds",
      "Bowers & Wilkins 15-speaker audio",
    ],
  },
  {
    id: "bmw-m4-csl",
    make: "BMW",
    model: "M4 CSL",
    year: 2024,
    tagline: "The return of the legend. Lightweight, hardcore, analog.",
    price: 138700,
    zeroToSixty: 3.2,
    topSpeedMph: 191,
    horsepower: 543,
    torqueLbFt: 479,
    engine: "Inline-6 Turbo",
    displacement: "3.0L I6",
    transmission: "8-speed auto",
    drivetrain: "RWD",
    weight: 3495,
    bodyStyle: "Coupe",
    origin: "Munich, Germany",
    hero: "/images/cars/m4csl.png",
    gallery: ["/images/cars/m4csl.png"],
    story:
      "Coupe Sport Leichtbau — lightweight. BMW stripped 240 kg from the M4 Competition, fitted a 543 hp version of the S58 inline-six, and gave it carbon-ceramic brakes and a titanium exhaust. The CSL lapped the Nürburgring in 7:20.",
    highlights: [
      "240 kg lighter than M4 Competition",
      "Carbon-fibre roof and bonnet",
      "Titanium Akrapovič exhaust",
      "Nürburgring time of 7:20.2",
    ],
  },
  {
    id: "lamborghini-huracan-sto",
    make: "Lamborghini",
    model: "Huracán STO",
    year: 2023,
    tagline: "Street-legal race car. Super Trofeo Omologata.",
    price: 327000,
    zeroToSixty: 2.6,
    topSpeedMph: 202,
    horsepower: 631,
    torqueLbFt: 416,
    engine: "V10 Naturally Aspirated",
    displacement: "5.2L V10",
    transmission: "7-speed DCT",
    drivetrain: "RWD",
    weight: 2950,
    bodyStyle: "Coupe",
    origin: "Sant'Agata Bolognese, Italy",
    hero: "/images/cars/huracan.png",
    gallery: ["/images/cars/huracan.png"],
    story:
      "A road car that thinks it's a Super Trofeo race car. The STO shares 50% of its DNA with the one-make racing series. The bonnet is one piece of carbon-fibre with functional air channels derived from the GT3 program.",
    highlights: [
      "Derived from Super Trofeo race car",
      "Single-piece carbon-fibre bonnet",
      "53% more downforce than Huracán EVO RWD",
      "8,500 rpm naturally aspirated V10",
    ],
  },
  {
    id: "rimac-nevera",
    make: "Rimac",
    model: "Nevera",
    year: 2024,
    tagline: "1,914 horsepower of pure electric violence.",
    price: 2400000,
    zeroToSixty: 1.85,
    topSpeedMph: 258,
    horsepower: 1914,
    torqueLbFt: 1741,
    engine: "Electric Tri-Motor",
    displacement: "—",
    transmission: "Single-speed (×4)",
    drivetrain: "AWD",
    weight: 4739,
    bodyStyle: "Hypercar",
    origin: "Sveta Nedelja, Croatia",
    hero: "/images/cars/nevera.png",
    gallery: ["/images/cars/nevera.png"],
    story:
      "Four permanent-magnet motors, a 120 kWh battery, and the ability to reverse its own direction of travel at the flip of a switch. The Nevera set 23 performance records in a single day. 150 units total. All sold.",
    highlights: [
      "1,914 hp from four electric motors",
      "1.85-second 0–60 mph",
      "23 performance records in one day",
      "Crash-tested front splitters that self-heal",
    ],
  },
];

export const getCarById = (id: string): Car | undefined =>
  CARS.find((c) => c.id === id);

export const formatPrice = (n: number): string =>
  "$" + n.toLocaleString("en-US");

export const ENGINE_BREAKDOWN: Record<
  EngineType,
  {
    title: string;
    description: string;
    pros: string[];
    cons: string[];
    famousUsers: string[];
  }
> = {
  "V8 Twin-Turbo": {
    title: "V8 Twin-Turbo",
    description:
      "The workhorse of modern performance. A 90-degree V8 with two turbochargers, capable of absurd power from a compact package.",
    pros: ["Massive power potential", "Compact packaging", "Iconic soundtrack", "Proven reliability at high boost"],
    cons: ["Turbo lag (mostly gone now)", "Heat management", "Complexity vs. NA"],
    famousUsers: ["McLaren 750S", "Aston Martin DB12", "Mercedes-AMG GT"],
  },
  "V12 Naturally Aspirated": {
    title: "V12 Naturally Aspirated",
    description:
      "The most romantic engine configuration. Twelve cylinders, no forced induction, and a screaming 9,000-rpm redline that defines the supercar experience.",
    pros: ["The best soundtrack in motoring", "Linear power delivery", "Mechanical theatre", "Instant throttle response"],
    cons: ["Heavy", "Thirsty", "Endangered — most are being hybridized or killed"],
    famousUsers: ["Lamborghini Aventador", "Ferrari 812 Competizione", "Pagani Huayra"],
  },
  "Flat-6": {
    title: "Flat-6 (Boxer)",
    description:
      "Six cylinders laid flat for a low center of gravity. Defined by Porsche, refined for 60 years. The perfect balance of weight distribution and rev-happy character.",
    pros: ["Low center of gravity", "Sings to 9,000 rpm", "Compact height", "Iconic Porsche character"],
    cons: ["Wide package", "Complex valve adjustment", "Expensive maintenance"],
    famousUsers: ["Porsche 911 GT3", "Porsche 918 Spyder", "Subaru WRX STI"],
  },
  "Electric Tri-Motor": {
    title: "Electric Tri-Motor",
    description:
      "The future, present tense. Three electric motors (two rear, one front) for torque-vectored AWD and instant, gear-less acceleration that defies physics.",
    pros: ["1.85s 0–60", "No gear changes", "Quiet cruising", "Zero local emissions"],
    cons: ["Heavy battery", "Range anxiety", "Charging infrastructure", "Sterile at low speeds"],
    famousUsers: ["Tesla Model S Plaid", "Rimac Nevera", "Lucid Air Sapphire"],
  },
  "V8 Hybrid": {
    title: "V8 Hybrid (PHEV)",
    description:
      "The bridge between ICE and EV. A high-output V8 (often twin-turbo) with electric motors filling torque gaps. The Ferrari SF90, Lamborghini Revuelto, and McLaren Artura all use this formula.",
    pros: ["Best of both worlds", "Massive combined output", "Short EV range for cities", "Keeps the V8 alive"],
    cons: ["Complex", "Heavy", "Expensive to develop"],
    famousUsers: ["Ferrari SF90", "Lamborghini Revuelto", "McLaren Artura"],
  },
  "Inline-6 Turbo": {
    title: "Inline-6 Turbo",
    description:
      "A 60-degree straight-six with a turbocharger. Perfect primary and secondary balance, smooth as a V12, and the choice of every modern BMW M car.",
    pros: ["Inherent balance", "Smooth", "Compact length", "Tunable to 700+ hp"],
    cons: ["Long", "Turbo lag potential", "Heavy vs. I4"],
    famousUsers: ["BMW M4 CSL", "Toyota Supra", "Nissan GT-R (VR38DETT)"],
  },
  "W16 Quad-Turbo": {
    title: "W16 Quad-Turbo",
    description:
      "Two narrow-angle V8s sharing a crankshaft. Effectively a 16-cylinder engine. Made famous by Bugatti. There is nothing else like it.",
    pros: ["1,577 hp in a road car", "Effortless torque", "Mechanical uniqueness", "278 mph capable"],
    cons: ["Incredibly complex", "Expensive", "Rarely driven hard"],
    famousUsers: ["Bugatti Chiron", "Bugatti Veyron", "Bugatti Tourbillon"],
  },
  "V10 Naturally Aspirated": {
    title: "V10 Naturally Aspirated",
    description:
      "Born from 1990s F1. Ten cylinders, no turbos, and a wail that hits 8,500 rpm. Lamborghini and Audi RS-era defined this engine.",
    pros: ["F1 soundtrack", "High-revving", "Lightweight", "Mechanical purity"],
    cons: ["Disappearing", "Fuel consumption", "Cabin noise"],
    famousUsers: ["Lamborghini Huracán", "Audi R8", "Porsche Carrera GT"],
  },
};
