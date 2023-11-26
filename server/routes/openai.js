import express from "express";
import dotenv from "dotenv";
import { getOpenAi, getOpenAiCode } from "../controllers/openai.js";

dotenv.config();
const router = express.Router();

router.post("/text", getOpenAi);
router.post("/code", getOpenAiCode);

export default router;
