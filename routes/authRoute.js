import express from "express";
import {registerController, loginController} from '../controllers/authController.js';

//router object
const router = express.Router();

//register Method - POST
router.post('/register', registerController);

//login Method - POST
router.post('/login', loginController);

export default router;