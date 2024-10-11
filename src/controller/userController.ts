import express from "express";
import { getUserById, createUser } from "../model/userModel";

const router = express.Router();

// GET：透過ID取得姓名
router.get("/:id", async (req, res) => {
  try {
    const user = await getUserById(parseInt(req.params.id));
    if (user) {
      res.json({ name: user.name });
    } else {
      res.status(404).json({ message: "用戶未找到" });
    }
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
});

// POST：新增姓名
router.post("/", async (req, res) => {
  try {
    const user = await createUser(req.body.name);
    res.status(201).json({ id: user.id, name: user.name });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
});

export default router;
