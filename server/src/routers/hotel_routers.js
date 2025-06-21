import express from "express"
export const router = express.Router();
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import {
  agregarReservacion,
  obtenerDisponibilidad,
  obtenerReservacionesPorRestaurante
} from "../functions/hotel_functions.js";

router.use(express.static(path.join(__dirname, "../../public")));

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

router.post("/reservar", (req, res) => {
  const { nombre, cantidad, restaurante, horario } = req.body;
  const resultado = agregarReservacion(nombre, cantidad, restaurante, horario);
  res.json(resultado);
});

router.get("/disponibilidad", (req, res) => {
  res.json(obtenerDisponibilidad());
});

router.get("/listado", (req, res) => {
  res.json(obtenerReservacionesPorRestaurante());
});

export default router;