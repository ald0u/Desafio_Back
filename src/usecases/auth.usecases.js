/**
 * --------------------------------------
 * Importamos las dependencias necesarias
 * --------------------------------------
 */
const createError = require('http-errors');
const users = require('../models/users.model');
const encrypt = require('../lib/encrypt');
const jwt = require('../lib/jwt');

/**
 * --------------------------------------
 * Servicio de autenticación: Login
 * --------------------------------------
 * @param {string} email - Correo electrónico del usuario
 * @param {string} password - Contraseña del usuario
 * @returns {string} - Token JWT
 * --------------------------------------
 * @throws {Error} - Error si el usuario no existe o la contraseña es inválida
 * --------------------------------------
 */
const login = async (email, password) => {
    const user = await users.findOne({ email: email });

    if (!user) throw new createError(401, 'Invalid email or password');

    const isValidPassword = await encrypt.compare(password, user.password);

    if (!isValidPassword) throw new createError(401, 'Invalid email or password');

    const token = jwt.sign({ id: user.id });

    return token;
}

/**
 * --------------------------------------
 * Exportamos la función de login
 * --------------------------------------
 */

module.exports = { login };
