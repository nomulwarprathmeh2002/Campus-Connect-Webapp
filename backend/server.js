const express = require('express');
const cors = require('cors');
const app = express();

const { connectDB } = require('./config/db'); // ✅ Correct import
const authRoutes = require('./routes/authRoutes');

app.use(cors());
app.use(express.json());

connectDB(); // ✅ Connect once at server startup

app.use('/api', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
