Desafío Back
Este es un proyecto de backend desarrollado con Node.js, Express y MongoDB utilizando Mongoose.

Configuración
Clona este repositorio:

bash
Copiar código
git clone https://github.com/tu-usuario/desafio_back.git
Instala las dependencias:

bash
Copiar código
npm install
Crea un archivo .env en la raíz del proyecto y configura las variables de entorno necesarias. Aquí hay un ejemplo:

plaintext
Copiar código
PORT=3000
DB_URL=mongodb://localhost:27017/desafio_db
JWT_SECRET=mi_secreto
Ejecución
Para ejecutar el servidor en modo de desarrollo:

bash
Copiar código
npm run dev
Para ejecutar el servidor en modo de producción:

bash
Copiar código
npm start
Dependencias
bcryptjs: ^2.4.3
dotenv: ^16.4.5
express: ^4.19.2
jsonwebtoken: ^9.0.2
mongoose: ^8.4.1
nodemon: ^3.1.3
Licencia
Este proyecto está bajo la Licencia ISC. Consulta el archivo LICENSE.md para más detalles.