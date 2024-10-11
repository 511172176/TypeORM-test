"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
// src/data-source.ts
const typeorm_1 = require("typeorm");
const User_1 = require("./entity/User");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234",
    database: "testdb",
    synchronize: true,
    logging: false,
    entities: [User_1.User],
});
