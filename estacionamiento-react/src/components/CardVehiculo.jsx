function CardVehiculo({ vehiculo, eliminarVehiculo }) {
  return (
    <article
      className={`card-vehiculo ${
        vehiculo.permanente ? "vehiculo-permanente" : "vehiculo-temporal"
      }`}
    >
      <h3>{vehiculo.patente}</h3>

      <p>
        <strong>Conductor:</strong> {vehiculo.conductor}
      </p>

      <p>
        <strong>Tipo:</strong> {vehiculo.tipo}
      </p>

      <p>
        <strong>Estado:</strong>{" "}
        {vehiculo.permanente ? "Permanente" : "Temporal"}
      </p>

      <button onClick={() => eliminarVehiculo(vehiculo.patente)}>
        Retirar vehículo
      </button>
    </article>
  );
}

export default CardVehiculo;