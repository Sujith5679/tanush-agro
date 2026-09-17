export interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { 
    title: "Businesses", 
    href: "/businesses",
    children: [
      { title: "Tanush Agro Traders", href: "/businesses/agro-traders" },
      { title: "Tanush Cafe", href: "/businesses/cafe" },
      { title: "Tanush Resort", href: "/businesses/resort" },
      { title: "Tanush Restaurant", href: "/businesses/restaurant" },
      { title: "Tanush Electricals", href: "/businesses/electricals" },
      { title: "Tanush Logistics", href: "/businesses/logistics" }
    ]
  },
  { title: "Our Work", href: "/our-work" },
  { title: "Gallery", href: "/gallery" },
  { title: "Contact", href: "/contact" }
];
