import CardVehiculo from "./CardVehiculo";

function ListaVehiculos({ vehiculos, eliminarVehiculo }) {
  return (
    <section className="lista-seccion">
      <h2>Vehículos registrados</h2>

      {vehiculos.length === 0 ? (
        <p className="mensaje-vacio">No hay vehículos registrados.</p>
      ) : (
        <div className="lista-vehiculos">
          {vehiculos.map((vehiculo) => (
            <CardVehiculo
              key={vehiculo.patente}
              vehiculo={vehiculo}
              eliminarVehiculo={eliminarVehiculo}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default ListaVehiculos;