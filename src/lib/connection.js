const mongoose = require('mongoose');

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

const connect = async () => {
    try {
        await mongoose.connect(url);
        console.log('Conexión exitosa');
    } catch (error) {
        console.error('No se pudo conectar a la Bd')
    }
}

module.exports = { connect };

