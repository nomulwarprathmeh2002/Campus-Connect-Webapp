const { Pool } = require('pg');

const pool = new Pool({
    connectionString: 'postgresql://neondb_owner:npg_6gRkuqYZwz4J@ep-cool-hat-a1azi6ox-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require',
});

const connectDB = async () => {
    try {
        // Simple query to verify the connection
        await pool.query('SELECT NOW()');
        console.log("✅ PostgreSQL connected successfully");
    } catch (err) {
        console.error("❌ Database connection error:", err);
    }
};

module.exports = { pool, connectDB };
