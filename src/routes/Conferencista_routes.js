import express from 'express';
import {
  obtenerTodosConferencistas,
  obtenerConferencistaPorId,
  actualizarConferencista,
  eliminarConferencista,
  CrearConferencista
} from '../controller/Conferencista_controller.js';



const router = express.Router();

// Rutas de conferencistas
router.post('/conferencista/crear', CrearConferencista);
router.get('/conferencista/todos', obtenerTodosConferencistas);
router.get('/conferencista/:id', obtenerConferencistaPorId);
router.put('/conferencista/actualizar/:id', actualizarConferencista);
router.delete('/conferencista/eliminar/:id', eliminarConferencista);

export default router;