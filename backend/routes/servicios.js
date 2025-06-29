const express = require('express');
const router = express.Router();
const serviciosController = require('../controllers/serviciosController');

// Rutas para servicios
router.get('/', serviciosController.obtenerServicios);
router.get('/:id', serviciosController.obtenerServicioPorId);

module.exports = router;
