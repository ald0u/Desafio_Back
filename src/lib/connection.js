/**
 * --------------------------------------
 * Importamos las dependencias necesarias 
 * --------------------------------------
 */

const mongoose = require('mongoose');

/**
 * --------------------------------------
 * Destructuramos las variables de entorno necesarias
 * --------------------------------------
 */

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

/**
 * --------------------------------------
 * Creamos la URI de conexión a la base de datos
 * --------------------------------------
 */

const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

/**
 * --------------------------------------
 * Función para conectar a la base de datos
 * --------------------------------------
 */

const connect = async () => {
    try {
        await mongoose.connect(url);
        console.log('Conexión exitosa');
    } catch (error) {
        console.error('No se pudo conectar a la BD', error);
    }
}

/**
 * --------------------------------------
 * Exportamos la función de conexión
 * --------------------------------------
 */

module.exports = { connect };


