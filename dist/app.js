"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/app.ts
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const data_source_1 = require("./data-source");
const userController_1 = __importDefault(require("./controller/userController"));
const app = (0, express_1.default)();
data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log("資料庫連接成功");
    app.use(express_1.default.json());
    // 路由
    app.use("/users", userController_1.default);
    // 啟動服務器
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`服務器正在運行在 http://localhost:${PORT}`);
    });
})
    .catch((error) => console.log("資料庫連接失敗：", error));
