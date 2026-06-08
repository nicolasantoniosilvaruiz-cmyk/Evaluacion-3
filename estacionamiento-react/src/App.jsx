import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import FormularioVehiculo from "./components/FormularioVehiculo";
import ListaVehiculos from "./components/ListaVehiculos";
import Footer from "./components/Footer";

function App() {
  const capacidadTotal = 10;

  const [vehiculos, setVehiculos] = useState(() => {
    const datosGuardados = localStorage.getItem("vehiculos");

    if (datosGuardados) {
      return JSON.parse(datosGuardados);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem("vehiculos", JSON.stringify(vehiculos));
  }, [vehiculos]);

  function agregarVehiculo(nuevoVehiculo) {
    if (vehiculos.length >= capacidadTotal) {
      alert("No hay cupos disponibles en el estacionamiento.");
      return;
    }

    const patenteExiste = vehiculos.some(
      (vehiculo) => vehiculo.patente === nuevoVehiculo.patente
    );

    if (patenteExiste) {
      alert("La patente ya se encuentra registrada.");
      return;
    }

    setVehiculos([...vehiculos, nuevoVehiculo]);
  }

  function eliminarVehiculo(patente) {
    const vehiculosActualizados = vehiculos.filter(
      (vehiculo) => vehiculo.patente !== patente
    );

    setVehiculos(vehiculosActualizados);
  }

  const cuposDisponibles = capacidadTotal - vehiculos.length;

  return (
    <>
      <Header />

      <main className="contenedor-principal">
        <section className="resumen-estacionamiento">
          <h2>Estado del estacionamiento</h2>
          <p>Capacidad total: {capacidadTotal} cupos</p>
          <p>Vehículos registrados: {vehiculos.length}</p>
          <p>Cupos disponibles: {cuposDisponibles}</p>
        </section>

        <FormularioVehiculo agregarVehiculo={agregarVehiculo} />

        <ListaVehiculos
          vehiculos={vehiculos}
          eliminarVehiculo={eliminarVehiculo}
        />
      </main>

      <Footer />
    </>
  );
}

export default App;