export interface Business {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  location?: string;
  image: string;
  services?: string[];
  products?: {
    export?: string[];
    domestic?: string[];
  };
  featured?: boolean;
}

export const businesses: Business[] = [
  {
    id: "agro-traders",
    name: "Tanush Agro Traders",
    category: "Agricultural Trade & Exports",
    shortDescription: "Sourcing directly from farmers, serving domestic and international markets.",
    description: "Tanush Agro Traders works with agricultural products sourced directly from farmers, serving domestic markets across India and international export markets.",
    location: "Vellore, Tamil Nadu",
    image: "/assets/agro/hero.jpg",
    products: {
      export: ["Cashew", "Sambrani", "Oothabathi", "Coconut", "Sarees"],
      domestic: ["Onion", "Garlic", "Potato", "Coconut", "Cashew", "Jaggery", "Dry Grapes"]
    },
    featured: true
  },
  {
    id: "cafe",
    name: "Tanush Cafe",
    category: "Cafe & Hospitality",
    shortDescription: "A relaxed village-style cafe bringing countryside comfort with city-inspired dishes.",
    description: "A relaxed village-style cafe bringing the comfort of the countryside together with dishes inspired by the city.",
    location: "Odugathur District",
    image: "/assets/cafe/hero.jpg",
    featured: true
  },
  {
    id: "resort",
    name: "Tanush Resort",
    category: "Farm Stay & Hospitality",
    shortDescription: "A farm-stay experience surrounded by the calm atmosphere of village life.",
    description: "A farm-stay experience surrounded by the calm atmosphere of village life, designed for guests looking for a relaxed getaway.",
    location: "Odugathur District",
    image: "/assets/resort/hero.jpg",
    services: ["6 rooms", "Swimming pool", "PlayStation lounge", "Farm/village surroundings"],
    featured: true
  },
  {
    id: "restaurant",
    name: "Tanush Restaurant",
    category: "Restaurant & Dining",
    shortDescription: "A local dining destination serving vegetarian and non-vegetarian dishes.",
    description: "A local dining destination serving a range of vegetarian and non-vegetarian dishes in a comfortable restaurant setting.",
    location: "Odugathur District",
    image: "/assets/restaurant/hero.jpg",
    services: ["Vegetarian food", "Non-vegetarian food", "Regular restaurant dishes"],
    featured: true
  },
  {
    id: "electricals",
    name: "Tanush Electricals",
    category: "Solar & Electrical Solutions",
    shortDescription: "Solar-powered and electrical solutions including solar air-conditioning.",
    description: "Tanush Electricals focuses on solar-powered and electrical solutions, with solar air-conditioning currently forming part of its offering.",
    image: "/assets/electricals/hero.jpg",
    services: ["Solar AC", "Solar Products", "Electrical Products", "Installation", "Maintenance"],
    featured: true
  },
  {
    id: "logistics",
    name: "Tanush Logistics",
    category: "Road Transportation",
    shortDescription: "Road transportation services supporting the movement of goods.",
    description: "Tanush Logistics provides road transportation services supporting the movement of goods across destinations.",
    image: "/assets/logistics/hero.jpg",
    services: ["Road Transport"],
    featured: true
  }
];
