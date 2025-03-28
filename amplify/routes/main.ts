import{
    type RouteConfig,
    route,
} from "@react-router/dev/routes";

export default[
    route("fix/path", "./fix/file.ts"),
] satisfies RouteConfig;