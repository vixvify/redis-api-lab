import { Elysia } from "elysia";
import type { CreateUserInput } from "../domain/user";
import { userService } from "../services/user-service";

export const userRoutes = new Elysia({
  prefix: "/users",
})
  .get("/", async () => {
    const users = await userService.getAll();
    return {
      users,
    };
  })
  .get("/:id", async ({ params }) => {
    const user = await userService.getById(params.id);
    return {
      user,
    };
  })
  .post("/", async ({ body }) => {
    const user = await userService.create(body as CreateUserInput);
    return {
      user,
    };
  })
  .delete("/:id", async ({ params }) => {
    const user = await userService.delete(params.id);
    return {
      user,
    };
  })
  .put("/:id", async ({ params, body }) => {
    const user = await userService.update(params.id, body as CreateUserInput);
    return {
      user,
    };
  });
