/**
 * --------------------------------------
 * Importamos las dependencias necesarias 
 * --------------------------------------
 */

const express = require('express');

/**
 * --------------------------------------
 * Ejecutamos express
 * --------------------------------------
 */

const app = express();

/**
 * --------------------------------------
 * Ejecutamos los middlewares
 * --------------------------------------
 */

app.use(express.json());

/**
 * --------------------------------------
 * Verificamos que esta corriendo
 * --------------------------------------
 */

app.get('/', (req, res) => {
    res.json({
        message: 'Project Api'
    });
});

/**
 * --------------------------------------
 * Exportamos app
 * --------------------------------------
 */

module.exports = app;