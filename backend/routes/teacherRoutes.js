const express = require('express');
const { approveStudentController } = require('../controllers/teacherController');

const router = express.Router();

router.post('/approve-student', approveStudentController);

module.exports = router;
