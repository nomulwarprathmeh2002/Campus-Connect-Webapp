const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const studentRoutes = require("./routes/studentRoutes");
const teacherRoutes = require("./routes/teacherRoutes");
const connectDB = require("./config/db"); // ✅ FIXED

const app = express();
const PORT = 5000;

// ✅ Connect to PostgreSQL
connectDB(); // now it's a function, not a pool

// ✅ Middlewares
app.use(cors());
app.use(express.json());
app.use(fileUpload());

// ✅ Routes
app.use("/api", studentRoutes);
app.use("/api", teacherRoutes);

// ✅ Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
