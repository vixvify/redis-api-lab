import { redis } from "../lib/redis";
import { userRepository } from "../infrastructure/user-repository";
import type { CreateUserInput, User } from "../domain/user";

export const userService = {
  getAll: async () => {
    return await userRepository.getAll();
  },
  getById: async (id: string) => {
    return await userRepository.getById(id);
  },
  create: async (user: CreateUserInput) => {
    return await userRepository.create(user);
  },
  delete: async (id: string) => {
    return await userRepository.delete(id);
  },
  update: async (id: string, user: CreateUserInput) => {
    return await userRepository.update(id, user);
  },
};
