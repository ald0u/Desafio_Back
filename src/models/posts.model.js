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

const modelName = 'Posts';

/**
 * -----------------------------------------------------------------
 * Creamos nuestro esquema
 * -----------------------------------------------------------------
 */

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        minLength: 4,
        maxLength: 10
    },
    image: {
        type: String,
        require: true,
        minLength: 4,
        maxLength: 10
    },
    body: {
        type: String,
        require: true,
        minLength: 4,
        maxLength: 10
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'users'
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

module.exports = mongoose.model(modelName, postSchema);