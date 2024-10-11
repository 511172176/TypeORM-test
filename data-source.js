// data-source.js
require("reflect-metadata");
const { DataSource } = require("typeorm");
const { User } = require("./src/entity/User"); // 路徑

console.log("User Entity in data-source:", User);

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "1234",
  database: "testdb",
  synchronize: true,
  logging: false,
  entities: [User], // 實體
});

module.exports = { AppDataSource };
