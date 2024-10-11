// src/app.ts
import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./data-source"; 
import userController from "./controller/userController";

const app = express();

AppDataSource.initialize()
  .then(() => {
    console.log("資料庫連接成功");

    app.use(express.json());

    // 路由
    app.use("/users", userController);

    // 啟動服務器
    const PORT = 3000;
    app.listen(PORT, () => {
      console.log(`服務器正在運行在 http://localhost:${PORT}`);
    });
  })
  .catch((error: Error) => console.log("資料庫連接失敗：", error));
