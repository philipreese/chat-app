import express from "express";
import dotenv from "dotenv";
import {
  getOpenAi,
  getOpenAiCode,
  getOpenAiAssist,
} from "../controllers/openai.js";

dotenv.config();
const router = express.Router();

router.post("/text", getOpenAi);
router.post("/code", getOpenAiCode);
router.post("/assist", getOpenAiAssist);

export default router;
