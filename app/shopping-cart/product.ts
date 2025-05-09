export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}

export const products: Product[] = [
  {
    id: "p1",
    name: "Wireless Headphones",
    price: 89.99,
    description:
      "Noise-cancelling over-ear wireless headphones with deep bass.",
  },
  {
    id: "p2",
    name: "Bluetooth Speaker",
    price: 49.99,
    description: "Portable Bluetooth speaker with 12 hours of playtime.",
  },
  {
    id: "p3",
    name: "Smartwatch",
    price: 129.99,
    description: "Fitness-focused smartwatch with heart rate monitor and GPS.",
  },
  {
    id: "p4",
    name: "USB-C Hub",
    price: 29.99,
    description: "7-in-1 USB-C hub with HDMI, SD card, and multiple USB ports.",
  },
  {
    id: "p5",
    name: "Mechanical Keyboard",
    price: 79.99,
    description:
      "RGB mechanical keyboard with blue switches for tactile typing.",
  },
];
