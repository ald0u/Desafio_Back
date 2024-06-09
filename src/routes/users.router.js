/**
 * --------------------------------------
 * Importamos las dependencias necesarias
 * --------------------------------------
 */
const express = require('express');
const userController = require('../controllers/user.controller');

/**
 * --------------------------------------
 * Creamos el router de Express
 * --------------------------------------
 */
const router = express.Router();

/**
 * --------------------------------------
 * Rutas crear usuario
 * --------------------------------------
 */

router.post('/', userController.createUser);

/**
 * @route GET /users/:id
 * @description Obtiene un usuario por su ID
 * @access Público
 */
router.get('/:id', userController.userById);

/**
 * --------------------------------------
 * Exportamos el router
 * --------------------------------------
 */
module.exports = router;
