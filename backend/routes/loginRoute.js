const express = require('express');
const router = express.Router();
const pool = require('../db'); // adjust path if your db connection is in another location

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    console.log('Incoming login:', username, password);

    let role = '';
    if (username.startsWith('AU')) role = 'admin';
    else if (username.startsWith('TU')) role = 'teacher';
    else if (username.startsWith('SU')) role = 'student';
    else return res.status(400).json({ message: 'Invalid user ID format' });

    try {
        const table = role + 's';
        console.log(`Checking in table: ${table}`);

        const result = await pool.query(`SELECT * FROM ${table} WHERE username = $1`, [username]);
        console.log('Query result:', result.rows);

        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        const user = result.rows[0];
        if (user.password !== password) {
            return res.status(401).json({ message: 'Incorrect password' });
        }

        res.json({ message: 'Login successful', role });
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
