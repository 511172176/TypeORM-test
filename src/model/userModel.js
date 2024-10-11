// src/model/userModel.js
const { AppDataSource } = require("../../data-source"); // 路徑
const { User } = require("../entity/User");

const userRepository = AppDataSource.getRepository(User);

// 定義函數
const getUserById = async (id) => {
  return await userRepository.findOneBy({ id });
};

const createUser = async (name) => {
  const user = userRepository.create({ name });
  return await userRepository.save(user);
};

module.exports = {
  getUserById,
  createUser,
};
