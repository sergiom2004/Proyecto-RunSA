// Controlador para servicios automotrices
const serviciosController = {
  // Obtener todos los servicios
  obtenerServicios: (req, res) => {
    try {
      const servicios = [
        {
          id: 1,
          nombre: 'Mantenimiento General',
          descripcion: 'Cambio de aceite, filtros y revisión general',
          precio: 50
        },
        {
          id: 2,
          nombre: 'Revisión de Frenos',
          descripcion: 'Inspección y mantenimiento del sistema de frenos',
          precio: 35
        },
        {
          id: 3,
          nombre: 'Alineación y Balanceo',
          descripcion: 'Alineación de llantas y balanceo',
          precio: 25
        }
      ];
      
      res.json({
        success: true,
        data: servicios
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al obtener servicios',
        error: error.message
      });
    }
  },

  // Obtener servicio por ID
  obtenerServicioPorId: (req, res) => {
    try {
      const { id } = req.params;
      // Aquí iría la lógica para buscar en la base de datos
      res.json({
        success: true,
        data: {
          id: id,
          nombre: 'Servicio encontrado',
          descripcion: 'Descripción del servicio'
        }
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al obtener servicio',
        error: error.message
      });
    }
  }
};

module.exports = serviciosController;
