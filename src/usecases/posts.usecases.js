/**
 * ---------------------------------------------
 * Importamos el modelo de publicaciones (posts)
 * ---------------------------------------------
*/

const posts = require('../models/posts.model');

/**
 * --------------------------------------
 * Función para crear una nueva publicación
 * --------------------------------------
 * @param {Object} postData - Datos de la nueva publicación
 * @returns - Nueva publicación creada
 */
const create = async (postData) => {
    const newPost = await posts.create(postData);
    return newPost;
};

/**
 * --------------------------------------
 * Función para obtener todas las publicaciones
 * --------------------------------------
 * @returns  - Lista de todas las publicaciones
 */
const getAll = async () => {
    const allPosts = await posts.find();
    return allPosts;
}

/**
 * --------------------------------------
 * Función para actualizar una publicación por su ID
 * --------------------------------------
 * @param {string} id - ID de la publicación a actualizar
 * @param {Object} newPost - Datos actualizados de la publicación
 * @returns - Publicación actualizada
 */
const updateById = async (id, newPost) => {
    const updatedPost = await posts.findByIdAndUpdate(id, newPost, {
        new: true 
    });
    return updatedPost;
}

/**
 * --------------------------------------
 * Función para eliminar una publicación por su ID
 * --------------------------------------
 * @param {string} id - ID de la publicación a eliminar
 * @returns - Publicación eliminada
 */
const deleteById = async (id) => {
    const postDeleted = await posts.findByIdAndDelete(id);
    return postDeleted;
}

// Exportamos las funciones para ser utilizadas en otros módulos
module.exports = {
    create,
    getAll,
    updateById,
    deleteById
};
