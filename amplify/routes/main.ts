import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
  route("some/path", "./client.entry.tsx"),
  // pattern ^           ^ module file
] satisfies RouteConfig;