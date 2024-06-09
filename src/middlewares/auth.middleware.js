/**
 * --------------------------------------
 * Importamos las dependencias necesarias
 * --------------------------------------
 */

const createError = require('http-errors');
const jwt = require('../lib/jwt');
const usersUsecases = require('../usecases/users.usecases');

/**
 * --------------------------------------
 * Middleware de autenticación
 * --------------------------------------
 */
const auth = async (request, response, next) => {
    try {
        const authorization = request.headers.authorization;

        if (!authorization) {
            throw createError(401, 'token required')
        }

        const payload = jwt.verify(token);

        payload.id = await kodersUsecases.getById(payload.id);

        request.user = user;

    } catch (error) {
        response.status(401);
        response.json({
            succes: false,
            error: error.message,
        })
    }
};

/**
 * --------------------------------------
 * Exportamos el middleware de autenticación
 * --------------------------------------
 */

module.exports = auth;
