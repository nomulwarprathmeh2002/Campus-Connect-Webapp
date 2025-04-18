// controllers/teacherController.js

// Dummy controller for now (update logic later)
const approveStudentController = (req, res) => {
    console.log("✅ Student approval endpoint hit");
    res.status(200).json({ message: "Student approved successfully!" });
};

module.exports = {
    approveStudentController,
};
