/**
 * --------------------------------------
 * Importamos las dependencias necesarias
 * --------------------------------------
 */
const express = require('express');
const postController = require('../controllers/post.controller');
const auth = require("../middlewares/auth.middleware");

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

router.post('/', auth, postController.createPost);

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

router.patch('/:id', auth, postController.patchPostById);

/**
 * --------------------------------------
 * Rutas delete post
 * --------------------------------------
 */

router.delete('/:id', auth, postController.deletePostById);

/**
 * --------------------------------------
 * Exportamos router
 * --------------------------------------
 */

module.exports = router;