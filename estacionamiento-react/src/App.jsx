import "./App.css";
import Header from "./components/Header";
import FormularioVehiculo from "./components/FormularioVehiculo";
import ListaVehiculos from "./components/ListaVehiculos";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <main>
        <FormularioVehiculo />
        <ListaVehiculos />
      </main>

      <Footer />
    </>
  );
}

export default App;