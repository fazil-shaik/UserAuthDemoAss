const express = require('express');
const authController = require('../Controllers/authController');
const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/dashboard', authController.protectedRoute);
router.post('/logout', authController.logout);

module.exports = router;
