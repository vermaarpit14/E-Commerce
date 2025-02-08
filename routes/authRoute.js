import express from "express";
import {registerController, loginController, testController} from '../controllers/authController.js';
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//register Method - POST
router.post('/register', registerController);

//login Method - POST
router.post('/login', loginController);

//Rest route
router.get('/test', requireSignIn, isAdmin, testController);

export default router;