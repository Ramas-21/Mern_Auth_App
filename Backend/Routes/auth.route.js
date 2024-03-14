import express from 'express';
import { google, signin, signup, signout, forgotPassword } from '../controllers/auth.controller.js';

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/google", google);
router.get("/signout", signout);
router.post("/forgot-password", forgotPassword);

export default router;