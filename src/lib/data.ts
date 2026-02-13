export interface Product {
  id: string;
  name: string;
  collection: "heritage" | "statesman" | "future";
  collectionName: string;
  price: number;
  image: string;
  description: string;
  symbolism: string;
  construction: string;
}

export const products: Product[] = [
  {
    id: "statesman-001",
    name: "Monochrome Executive",
    collection: "statesman",
    collectionName: "Statesman Line",
    price: 850,
    // Using the black and white image
    image: "/images/products/reference/balckandwhite-removebg-preview.png",
    description: "A refined black and white smock for the modern boardroom. Understated elegance that commands respect without shouting.",
    symbolism: "Black and white represents the balance of wisdom and clarity.",
    construction: "Refined finishing for formal wear",
  },
  {
    id: "heritage-001",
    name: "Northern King Fugu",
    collection: "heritage",
    collectionName: "Heritage Line",
    price: 650,
    // Using the transparent fugu image
    image: "/images/products/reference/fugu-removebg-preview.png", 
    description: "A commanding traditional smock with authentic embroidery. This piece represents the pinnacle of Northern Ghanaian weaving authority.",
    symbolism: "The heavy embroidery signifies wealth, status, and spiritual protection.",
    construction: "Authentic hand-loomed strip weave",
  },
  {
    id: "future-001",
    name: "Corporate Queens Tunic",
    collection: "future",
    collectionName: "Future Line",
    price: 950,
    // Using the female corporate image
    image: "/images/products/reference/female_corporate-removebg-preview.png",
    description: "Tailored for the female executive. This tunic blends the structure of a blazer with the soul of a smock.",
    symbolism: "Represents the rise of female leadership in modern Africa.",
    construction: "Contemporary cut with heritage fabric",
  },
  {
    id: "statesman-002",
    name: "Savannah Dress Elegant",
    collection: "statesman",
    collectionName: "Statesman Line",
    price: 800,
    // Using another female image
    image: "/images/products/reference/female-one-removebg-preview.png",
    description: "An elegant dress cut from handwoven fabric. Perfect for diplomatic functions and state dinners.",
    symbolism: "Blue tones invoke the peace and stability of the sky.",
    construction: "Premium tailored fit",
  },
  {
    id: "heritage-002",
    name: "Grand Durbar Smock",
    collection: "heritage",
    collectionName: "Heritage Line",
    price: 1200,
    // Using the 'long' image which likely is a full gown/smock
    image: "/images/products/reference/long-removebg-preview.png",
    description: "A full-length ceremonial gown for the most important occasions. Used by chiefs and elders during the Grand Durbar.",
    symbolism: "Length and volume signify the weight of responsibility.",
    construction: "Heavy cotton drill, full volume",
  },
  {
    id: "heritage-003",
    name: "Warrior's Tunic",
    collection: "heritage",
    collectionName: "Heritage Line",
    price: 680,
    // Using the ac8f... image
    image: "/images/products/reference/ac8f288c3adc8a1031a3b9f4d63d8d5b-removebg-preview.png",
    description: "A bold, structured tunic design inspired by traditional warrior attire. Features intricate embroidery protecting the chest and back.",
    symbolism: "Strength, courage, and spiritual fortification.",
    construction: "Heavy-weight cotton, protective weave",
  },
  {
    id: "future-002",
    name: "Sahelian Elegance",
    collection: "future",
    collectionName: "Future Line",
    price: 920,
    // Using the female2 image
    image: "/images/products/reference/female2-removebg-preview.png",
    description: "A contemporary fusion piece that brings the breeze of the Sahel to modern fashion. Effortlessly chic and deeply rooted.",
    symbolism: "Grace and adaptability.",
    construction: "Lightweight strip weave",
  },
];
