"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userModel_1 = require("../model/userModel");
const router = express_1.default.Router();
// GET：透過ID取得姓名
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, userModel_1.getUserById)(parseInt(req.params.id));
        if (user) {
            res.json({ name: user.name });
        }
        else {
            res.status(404).json({ message: "用戶未找到" });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
// POST：新增姓名
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, userModel_1.createUser)(req.body.name);
        res.status(201).json({ id: user.id, name: user.name });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
exports.default = router;
