/**
 * --------------------------------------
 * Importamos las dependencias necesarias
 * --------------------------------------
 */

const express = require('express');
const authController = require('../controllers/auth.controller');

/**
 * --------------------------------------
 * Creamos el router de Express
 * --------------------------------------
 */

const router = express.Router();

/**
 * --------------------------------------
 * Ruta crear post
 * --------------------------------------
 */

router.post('/login', authController.login);

/**
 * --------------------------------------
 * Exportamos el router
 * --------------------------------------
 */

module.exports = router;