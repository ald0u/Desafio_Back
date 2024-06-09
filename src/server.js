/**
 * --------------------------------------
 * Importamos las dependencias necesarias 
 * --------------------------------------
 */

const express = require('express');

/**
 * --------------------------------------
 * Importamos los routers 
 * --------------------------------------
*/

const userRouter = require('./routes/users.router');
const autRouter = require('./routes/auth.router');
const postRouter = require('./routes/posts.router');


/**
 * --------------------------------------
 * Ejecutamos express
 * --------------------------------------
 */

const app = express();

/**
 * --------------------------------------
 * Ejecutamos los middlewares
 * --------------------------------------
 */

app.use(express.json());

/**
 * --------------------------------------
 * Configuramos las rutas
 * --------------------------------------
 */

app.use('/users', userRouter);
app.use('/auth', autRouter);
app.use('/posts', postRouter);


/**
 * --------------------------------------
 * Verificamos que esta corriendo
 * --------------------------------------
 */

app.get('/', (req, res) => {
    res.json({
        message: 'Project Api'
    });
});


/**
 * --------------------------------------
 * Exportamos app
 * --------------------------------------
 */

module.exports = app;