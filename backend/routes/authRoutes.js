import express from 'express'
import { getAllUsers, login, logout, signup } from '../controllers/authControllers.js';
const router = express.Router();
router .post('/signup',signup);
router .post('/login',login);
router .post('/logout',logout);
router.get('/getallusers',getAllUsers)

export default router;