const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Importar rutas
const serviciosRoutes = require('./routes/servicios');

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta básica
app.get('/', (req, res) => {
  res.json({
    message: 'RunSA Backend API',
    status: 'funcionando',
    version: '1.0.0'
  });
});

// Rutas API
app.use('/api/servicios', serviciosRoutes);

// Ruta de prueba
app.get('/api/test', (req, res) => {
  res.json({
    message: 'API funcionando correctamente',
    timestamp: new Date().toISOString()
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  console.log(`📡 API disponible en http://localhost:${PORT}/api`);
});

module.exports = app;
