// app.js
const express = require("express");
const app = express();
const userController = require("./src/controller/userController");
const { AppDataSource } = require("./data-source"); // 導入資料源

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
  .catch((error) => console.log("資料庫連接失敗：", error));
