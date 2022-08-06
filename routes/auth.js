import express from "express";
import { signin, signup, googleAuth } from "../controllers/auth.js";

const router = express.Router();

//create a user
router.post("/signup",signup);
router.post("/signin",signin);
router.post("/google",googleAuth);


export default router;
