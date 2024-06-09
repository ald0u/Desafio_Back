/**
 * --------------------------------------
 * Importamos las dependencias necesarias
 * --------------------------------------
 */
const express = require('express');
const postController = require('../controllers/post.controller');

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

router.post('/', postController.createPost);

/**
 * --------------------------------------
 * Ruta get post
 * --------------------------------------
 */

router.get('/', postController.getAllPosts);

/**
 * --------------------------------------
 * Rutas patch post
 * --------------------------------------
 */

router.patch('/', postController.patchPostById);

/**
 * --------------------------------------
 * Rutas delete post
 * --------------------------------------
 */

router.post('/', postController.deletePostById);

/**
 * --------------------------------------
 * Exportamos router
 * --------------------------------------
 */

module.exports = router;