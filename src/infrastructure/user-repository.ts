import { prisma } from "../lib/prisma";
import { CreateUserInput, User } from "../domain/user";

export const userRepository = {
  getAll: async () => {
    return await prisma.user.findMany();
  },
  getById: async (id: string) => {
    return await prisma.user.findUnique({
      where: {
        id,
      },
    });
  },
  create: async (user: CreateUserInput) => {
    return await prisma.user.create({
      data: user,
    });
  },
  delete: async (id: string) => {
    return await prisma.user.delete({
      where: {
        id,
      },
    });
  },
  update: async (id: string, user: CreateUserInput) => {
    return await prisma.user.update({
      where: {
        id,
      },
      data: user,
    });
  },
};
