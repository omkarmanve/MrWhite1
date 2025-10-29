import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";

const router = express.Router();

// Signup route → calls registerUser in authController.js
router.post("/signup", registerUser);

// Login route → calls loginUser in authController.js
router.post("/login", loginUser);

export default router;
