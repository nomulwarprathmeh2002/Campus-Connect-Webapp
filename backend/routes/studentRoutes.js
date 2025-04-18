const express = require('express');
const { registerStudentController, upload } = require('../controllers/studentController');
const router = express.Router();

// ✅ This line expects a middleware, then the controller function
router.post('/register-student', upload.single('document'), registerStudentController);

module.exports = router;
