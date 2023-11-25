import express from "express";
import dotenv from "dotenv";
import { getOpenAi } from "../controllers/openai.js";

dotenv.config();
const router = express.Router();

router.post("/text", getOpenAi);

export default router;
