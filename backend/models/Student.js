// models/studentModel.js
const db = require('../config/db');

const registerStudent = async (name, email, course) => {
    const result = await db.query(
        'INSERT INTO students (name, email, course) VALUES ($1, $2, $3) RETURNING *',
        [name, email, course]
    );
    return result.rows[0];
};

module.exports = { registerStudent };
