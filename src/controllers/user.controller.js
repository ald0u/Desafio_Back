/**
 * -----------------------------------------------------------------
 * Controladores para las funciones de users
 * -----------------------------------------------------------------
 */

const userUseCase = require('../usecases/users.usecases');

/**
 * -----------------------------------------------------------------
 * Controlador para crear usuarios
 * -----------------------------------------------------------------
 */

const createUser = async (request, response) => {
    try {
        const userCreated = await userUseCase.create(request.body);
        response.json({
            success: true,
            data: { user: userCreated }
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
 * Controlador para buscar usuario por Id
 * -----------------------------------------------------------------
 */

const userById = async (request, response) => {
    try {
        const { id } = request.params;
        const user = await userUseCase.findById(id);

        if (!user) {
            response.status(404).json({
                success: false,
                error: 'User not found'
            });
            return;
        }

        response.json({
            success: true,
            data: { user }
        });
    } catch (error) {
        response.status(error.status || 500).json({
            succes: false,
            data: error.message
        })

    }
}

/**
 * -----------------------------------------------------------------
 * Exportamos los controladores
 * -----------------------------------------------------------------
 */

module.exports = { createUser, userById };