import { reservaciones, restaurantes } from "../database/hotel_db.js";

export function agregarReservacion(nombre, cantidad, restaurante, horario) {
  const grupo = reservaciones[horario][restaurante];
  if (grupo.length < restaurantes[restaurante].capacidad) {
    grupo.push({ nombre, cantidad });
    return { ok: true, mensaje: "Reservación guardada exitosamente." };
  } else {
    return { ok: false, mensaje: "No hay disponibilidad." };
  }
}

export function obtenerDisponibilidad() {
  const resultado = {};
  for (let horario in reservaciones) {
    resultado[horario] = {};
    for (let r in reservaciones[horario]) {
      const disponible =
        restaurantes[r].capacidad - reservaciones[horario][r].length;
      resultado[horario][r] = disponible;
    }
  }
  return resultado;
}

export function obtenerReservacionesPorRestaurante() {
  return reservaciones;
}