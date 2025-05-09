import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("context", "routes/context.tsx"),
  route("context-reducer", "routes/context-reducer.tsx"),
  route("theme-switcher", "routes/theme-switcher.tsx"),
  route("shopping-cart", "routes/shopping-cart.tsx"),
] satisfies RouteConfig;
