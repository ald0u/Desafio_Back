/**
 * --------------------------------------
 * Importamos las dependencias necesarias
 * --------------------------------------
 */
const authCase = require('../usecases/auth.usecases');

/**
 * --------------------------------------
 * Controlador de autenticación: Login
 * --------------------------------------
 */
const login = async (request, response) => {
    try {
        const { email, password } = request.body;

        const token = await authCase.login(email, password);

        response.json({
            success: true,
            data: { token },
        });
    } catch (error) {
        response.status(error.status || 500).json({
            success: false,
            error: error.message
        });
    }
};

/**
 * --------------------------------------
 * Exportamos la función de login
 * --------------------------------------
 */

module.exports = {login};
