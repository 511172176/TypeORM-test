// src/data-source.ts
import { DataSource } from "typeorm";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "1234",
  database: "testdb",
  synchronize: true,
  logging: false,
  entities: [User], 
});
