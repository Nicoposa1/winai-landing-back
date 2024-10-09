const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Cargar variables de entorno
dotenv.config();

// Conectar a la base de datos MongoDB
connectDB();

// Inicializar Express
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Importar las rutas
const emailRoutes = require('./routes/emailRoutes');

// Usar las rutas
app.use('/api', emailRoutes);

// Puerto y arranque del servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
