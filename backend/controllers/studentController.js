const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

// Multer storage config
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, uuidv4() + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });

// Actual controller (this is the function Express expects)
const registerStudentController = async (req, res) => {
    try {
        const { name, email, course } = req.body;
        const document = req.file;

        if (!name || !email || !course || !document) {
            return res.status(400).json({ message: "All fields are required." });
        }

        const applicationNumber = "APP-" + Math.floor(100000 + Math.random() * 900000);

        console.log({
            name,
            email,
            course,
            applicationNumber,
            documentPath: document.path,
        });

        res.status(200).json({ applicationNumber });
    } catch (error) {
        console.error("Registration Error:", error);
        res.status(500).json({ message: "Server Error" });
    }
};

module.exports = {
    registerStudentController,
    upload,
};
