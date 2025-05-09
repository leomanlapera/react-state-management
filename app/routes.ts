import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("context", "routes/context.tsx"),
  route("context-reducer", "routes/context-reducer.tsx"),
] satisfies RouteConfig;
