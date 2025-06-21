const API_URL = "http://localhost:4000/hotel";

window.verDisponibilidad = async () => {
  const res = await fetch(`${API_URL}/disponibilidad`);
  const data = await res.json();

  let html = "<h2>Disponibilidad</h2>";
  for (let horario in data) {
    html += `<h3>${horario}</h3><ul>`;
    for (let restaurante in data[horario]) {
      html += `<li><strong>${restaurante}</strong>: ${data[horario][restaurante]} espacios disponibles</li>`;
    }
    html += "</ul>";
  }
  document.getElementById("contenido").innerHTML = html;
};

window.verListado = async () => {
  const res = await fetch(`${API_URL}/listado`);
  const data = await res.json();

  let html = "<h2>Listado de Reservaciones</h2>";
  for (let horario in data) {
    html += `<h3>${horario}</h3>`;
    for (let restaurante in data[horario]) {
      html += `<h4>${restaurante}</h4>`;
      if (data[horario][restaurante].length === 0) {
        html += `<p>Sin reservaciones.</p>`;
      } else {
        html += "<ul>";
        data[horario][restaurante].forEach((reserva) => {
          html += `<li>${reserva.nombre} - ${reserva.cantidad} personas</li>`;
        });
        html += "</ul>";
      }
    }
  }
  document.getElementById("contenido").innerHTML = html;
};

window.mostrarFormulario = () => {
  const html = `
    <h2>Formulario de Nueva Reservación</h2>
    <form onsubmit="guardarReservacion(event)">
      <label>Nombre: <input type="text" id="nombre" required></label><br><br>
      <label>Cantidad de personas: <input type="number" id="cantidad" min="1" required></label><br><br>
      <label>Restaurante:
        <select id="restaurante">
          <option value="Ember">Ember</option>
          <option value="Zao">Zao</option>
          <option value="Grappa">Grappa</option>
          <option value="Larimar">Larimar</option>
        </select>
      </label><br><br>
      <label>Horario:
        <select id="horario">
          <option value="6-8 PM">6-8 PM</option>
          <option value="8-10 PM">8-10 PM</option>
        </select>
      </label><br><br>
      <button type="submit">Guardar Reservación</button>
    </form>
  `;
  document.getElementById("contenido").innerHTML = html;
};

window.guardarReservacion = async (event) => {
  event.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const cantidad = parseInt(document.getElementById("cantidad").value);
  const restaurante = document.getElementById("restaurante").value;
  const horario = document.getElementById("horario").value;

  const res = await fetch(`${API_URL}/reservar`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre, cantidad, restaurante, horario }),
  });

  const resultado = await res.json();
  alert(resultado.mensaje);
  if (resultado.ok) {
    verDisponibilidad();
  }
};