import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'example',
    port: 3306,
    password: '1022003230',
});

async function getConnection() {
    try {
        const connection = await pool.getConnection();
        console.log('Database connection successful');
        return connection;
    } catch (err) {
        console.error('Database connection failed:', err);
        throw err;
    }
}

export { pool }; // Exportamos el pool por si necesitamos realizar alguna operación específica con él
