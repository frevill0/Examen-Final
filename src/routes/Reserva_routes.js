import express from 'express';
import {
  crearReserva,
  obtenerTodasReservas,
  obtenerReservaPorId,
  actualizarReserva,
  eliminarReserva
} from '../controller/Reserva_controller.js';


const router = express.Router();

// Rutas de reservas
router.post('/reserva/crear', crearReserva);
router.get('/reserva/todos', obtenerTodasReservas);
router.get('/reserva/:id', obtenerReservaPorId);
router.put('/reserva/actualizar/:id', actualizarReserva);
router.delete('/reserva/eliminar/:id', eliminarReserva);

export default router; 
