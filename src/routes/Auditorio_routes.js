import express from 'express';
import {
  crearAuditorio,
  obtenerTodosAuditorios,
  obtenerAuditorioPorId,
  actualizarAuditorio,
  eliminarAuditorio
} from '../controller/Auditorio_controller.js';




const router = express.Router();

// Rutas de auditorios
router.post('/auditorio/crear', crearAuditorio);
router.get('/auditorio/todos', obtenerTodosAuditorios);
router.get('/auditorio/:id', obtenerAuditorioPorId);
router.put('/auditorio/actualizar/:id', actualizarAuditorio);
router.delete('/auditorio/eliminar/:id', eliminarAuditorio);

export default router;
 