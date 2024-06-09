/*
 * -------------------------------------------------------------
 * Importamos el modelo de usuarios y la función de encriptación
 * -------------------------------------------------------------
 */

const users = require('../models/users.model');
const encrypt = require('../lib/encrypt');

/**
 * --------------------------------------
 * Función para crear un nuevo usuario
 * --------------------------------------
 * @param {Object} userData - Datos del usuario a crear
 * @returns - Nuevo usuario creado
 */

const create = async (userData) => {
    const userFound = await users.find({ email: userData.email });

    if (userFound.length > 0) throw new Error('User with this email already exists');

    const password = await encrypt.encrypt(userData.password);
    userData.password = password;

    const newUser = await users.create(userData);

    return newUser;
}

/**
 * -----------------------------------------
 * Función para obtener un usuario por su ID
 * -----------------------------------------
 * @param {string} id - ID del usuario a obtener
 * @returns - Usuario encontrado por su ID
 */

const getById = async (id) => {
    const user = await users.findById(id);
    return user;
}

/**
 * -----------------------------------------
 * Exportamos las funciones
 * -----------------------------------------
 */

module.exports = { create, getById };