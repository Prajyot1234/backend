import express from 'express';
const router = express.Router();
import UserController from '../controllers/userController.js';
import checkUserAuth from '../middlewares/auth-middleware.js';

// Route Level Middleware - To Protect Route
router.use('/changepassword', checkUserAuth)
router.use('/loggeduser', checkUserAuth)

// Public Routes
router.post('/register', UserController.userRegistration)
router.post('/login', UserController.userLogin)
router.post('/reset-password', UserController.userPasswordReset)
router.post('/searchuser',UserController.searchuser)

//currently not in use
router.post('/send-reset-password-email', UserController.sendUserPasswordResetEmail)

// Protected Routes
router.post('/changepassword', UserController.changeUserPassword)
router.get('/loggeduser', UserController.loggedUser)


export default router;