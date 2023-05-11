const express = require('express');
const authController = require('../controllers/authController');
const authMiddleware = require('../middlerwares/authMiddleware');

const router = express.Router();

router.route('/signup').post(authController.createUser);

module.exports = router;