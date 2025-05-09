import ShoppingCartApp from "~/shopping-cart/shopping-cart-app";
import type { Route } from "./+types/shopping-cart";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Shopping Cart App" },
    {
      name: "description",
      content: "Shopping Cart App with Context and Reducer",
    },
  ];
}

export default function ShoppingCart() {
  return <ShoppingCartApp />;
}
