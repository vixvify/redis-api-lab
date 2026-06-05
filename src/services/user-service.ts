import { redis } from "../lib/redis";
import { userRepository } from "../infrastructure/user-repository";
import type { CreateUserInput, User } from "../domain/user";

export const userService = {
  getAll: async () => {
    const cache = await redis.get("users");
    if (cache) {
      return JSON.parse(cache);
    }
    const users = await userRepository.getAll();
    await redis.set("users", JSON.stringify(users), { EX: 60 });
    return users;
  },
  getById: async (id: string) => {
    const cache = await redis.get(`user:${id}`);
    if (cache) {
      return JSON.parse(cache);
    }
    const user = await userRepository.getById(id);
    await redis.set(`user:${id}`, JSON.stringify(user), { EX: 60 });
    return user;
  },
  create: async (user: CreateUserInput) => {
    await redis.del("users");
    return await userRepository.create(user);
  },
  delete: async (id: string) => {
    await redis.del(`user:${id}`);
    await redis.del("users");
    return await userRepository.delete(id);
  },
  update: async (id: string, user: CreateUserInput) => {
    await redis.del(`user:${id}`);
    await redis.del("users");
    return await userRepository.update(id, user);
  },
};
