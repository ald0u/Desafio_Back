/**
 * -------------------------------------------------------------------
 * Importamos la biblioteca bcrypt para la encriptación de contraseñas
 * -------------------------------------------------------------------
 */

const bcrypt = require('bcryptjs');

/**
 * --------------------------------------------
 * Número de rondas de saltos para la encriptación 
 * --------------------------------------------
 */

const SALT_ROUNDS = 10;

/**
 * ---------------------------------------------
 * Función para encriptar un texto usando bcrypt
 * ---------------------------------------------
 * @param {string} text - El texto a encriptar
 * @returns {Promise<string>} - La contraseña encriptada
 */

const encrypt = (text) =>  bcrypt.hash(text, SALT_ROUNDS);

/**
 * --------------------------------------
 * Función para comparar un texto plano con un hash encriptado
 * --------------------------------------
 * @param {string} plainText - El texto plano a comparar
 * @param {string} hash - El hash encriptado a comparar
 * @returns {Promise<boolean>} - True si son iguales, false si son diferentes
 */

const compare = (plainText, hash) =>  bcrypt.compare(plainText, hash);

/**
 * ------------------------------------------------------
 * Exportamos las funciones de encriptación y comparación 
 * ------------------------------------------------------
 */

module.exports = { encrypt, compare };
