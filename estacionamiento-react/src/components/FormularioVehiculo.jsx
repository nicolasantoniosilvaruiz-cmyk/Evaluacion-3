import { useState } from "react";

function FormularioVehiculo({ agregarVehiculo }) {
  const [patente, setPatente] = useState("");
  const [conductor, setConductor] = useState("");
  const [tipo, setTipo] = useState("Automóvil");
  const [permanente, setPermanente] = useState(false);
  const [mensajeError, setMensajeError] = useState("");

  function manejarEnvio(evento) {
    evento.preventDefault();

    const patenteLimpia = patente.trim().toUpperCase();
    const conductorLimpio = conductor.trim();

    const regexPatente = /^[A-Z]{4}[0-9]{2}$/;

    if (patenteLimpia === "" || conductorLimpio === "") {
      setMensajeError("No se permiten campos vacíos.");
      return;
    }

    if (!regexPatente.test(patenteLimpia)) {
      setMensajeError("La patente debe tener 4 letras y 2 números. Ejemplo: ABCD12");
      return;
    }

    const nuevoVehiculo = {
      patente: patenteLimpia,
      conductor: conductorLimpio,
      tipo: tipo,
      permanente: permanente
    };

    agregarVehiculo(nuevoVehiculo);

    setPatente("");
    setConductor("");
    setTipo("Automóvil");
    setPermanente(false);
    setMensajeError("");
  }

  return (
    <section className="formulario-seccion">
      <h2>Registrar vehículo</h2>

      <form className="formulario-vehiculo" onSubmit={manejarEnvio}>
        <div className="campo-formulario">
          <label>Patente</label>
          <input
            type="text"
            placeholder="Ej: ABCD12"
            value={patente}
            onChange={(evento) => setPatente(evento.target.value)}
          />
        </div>

        <div className="campo-formulario">
          <label>Conductor</label>
          <input
            type="text"
            placeholder="Nombre del conductor"
            value={conductor}
            onChange={(evento) => setConductor(evento.target.value)}
          />
        </div>

        <div className="campo-formulario">
          <label>Tipo de vehículo</label>
          <select
            value={tipo}
            onChange={(evento) => setTipo(evento.target.value)}
          >
            <option>Automóvil</option>
            <option>Moto</option>
            <option>Camioneta</option>
            <option>Furgón</option>
          </select>
        </div>

        <label className="checkbox-permanente">
          <input
            type="checkbox"
            checked={permanente}
            onChange={(evento) => setPermanente(evento.target.checked)}
          />
          Vehículo permanente
        </label>

        <button type="submit">Registrar vehículo</button>
      </form>

      {mensajeError && <p className="mensaje-error">{mensajeError}</p>}
    </section>
  );
}

export default FormularioVehiculo;