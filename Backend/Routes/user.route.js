import express from 'express';
import { test } from '../controllers/user.controller.js';
const router = express.Router();

router.get('/', test);
router.post('/update/:id');

export default router;