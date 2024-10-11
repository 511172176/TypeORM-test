// src/model/userModel.ts
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

export const getUserById = async (id: number) => {
  const userRepository = AppDataSource.getRepository(User);
  return await userRepository.findOneBy({ id });
};

export const createUser = async (name: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = userRepository.create({ name });
  return await userRepository.save(user);
};
