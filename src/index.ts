import { Elysia } from "elysia";
import { userRoutes } from "./routes/routes";
import { rateLimitPlugin } from "./plugin/rate-limit.plugin";

const app = new Elysia()
  .use(rateLimitPlugin)
  .use(userRoutes)
  .get("/", () => "Hello Elysia")
  .listen(3000);
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
