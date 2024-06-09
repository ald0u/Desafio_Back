/**
 * -----------------------------------------------------------------
 * Importamos mongoose
 * -----------------------------------------------------------------
 */

const mongoose = require('mongoose');

/**
 * -----------------------------------------------------------------
 * Creamos el nombre del modelo
 * -----------------------------------------------------------------
 */

const modelName = 'Users';

/**
 * -----------------------------------------------------------------
 * Creamos nuestro esquema
 * -----------------------------------------------------------------
 */

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
        minLength: 4,
        maxLength: 10
    },
    profilePic:{
        type: String,
        require: true,
        minLength: 4,
        maxLength: 10
    },
    email:{
        type: String,
        require: true,
        minLength: 4,
        maxLength: 10
    },
    password:{
        type: String,
        require: true,
        minLength: 4,
        maxLength: 10
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

/**
 * -----------------------------------------------------------------
 * Exportamos el model
 * -----------------------------------------------------------------
 */

module.exports = mongoose.model(modelName, userSchema);

