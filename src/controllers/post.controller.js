/**
 * -----------------------------------------------------------------
 * Controladores para las funciones de post
 * -----------------------------------------------------------------
 */

const postUseCase = require('../usecases/posts.usecases');

/**
 * -----------------------------------------------------------------
 * Controlador para crear posts
 * -----------------------------------------------------------------
 */

const createPost = async (request, response) => {
    try {
        const postCreated = await postUseCase.create(request.body);
        response.json({
            success: true,
            data: { post: postCreated }
        });
    } catch (error) {
        response.status(error.status || 500).json({
            success: false,
            error: error.message
        });
    }
}

/**
 * -----------------------------------------------------------------
 * Controlador para buscar post por Id
 * -----------------------------------------------------------------
 */

const deletePostById = async (request, response) => {
    try {
        const { id } = request.params;
        const postDeleted = await postUseCase.deleteById(id);

        if (!postDeleted) { // Cambiado de "post" a "postDeleted"
            response.status(404).json({
                success: false,
                error: 'Post not found' // Cambiado de "post" a "Post"
            });
            return;
        }

        response.json({
            success: true,
            data: { post: postDeleted }
        });
    } catch (error) {
        response.status(error.status || 500).json({
            success: false,
            error: error.message
        });
    }
}


/**
 * -----------------------------------------------------------------
 * Controlador para obtener todos los post
 * -----------------------------------------------------------------
 */
const getAllPosts = async (request, response) => {
    try {
        const posts = await postUseCase.getAll();
        response.json({
            success: true,
            data: { posts }
        });
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            success: false,
            error: error.message
        });
    }
}

/**
 * -----------------------------------------------------------------
 * Controlador para actualizar post por Id
 * -----------------------------------------------------------------
 */

const patchPostById = async (request, response) => {
    try {
        const { id } = request.params;
        const postUpdate = await postUseCase.updateById(id, request.body);

        if (!postUpdate) {
            response.status(404).json({
                success: false,
                error: 'post not found'
            });
            return;
        }

        response.json({
            success: true,
            data: { posts: postUpdate }
        });
    } catch (error) {
        response.status(error.status || 500).json({
            success: false,
            error: error.message
        });
    }
}

/**
 * -----------------------------------------------------------------
 * Exportamos los controladores
 * -----------------------------------------------------------------
 */

module.exports = { createPost, deletePostById, getAllPosts, patchPostById };