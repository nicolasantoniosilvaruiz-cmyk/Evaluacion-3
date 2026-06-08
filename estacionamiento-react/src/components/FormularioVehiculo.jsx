function FormularioVehiculo() {
  return (
    <section>
      <h2>Registrar vehiculo</h2>

      <form>
        <input type="text" placeholder="Patente" />
        <input type="text" placeholder="Nombre del conductor" />
        <select>
          <option>Auto</option>
          <option>Moto</option>
          <option>Camioneta</option>
        </select>
        <label>
          <input type="checkbox" />
          Permanente
        </label>
        <button type="submit">Registrar</button>
      </form>
    </section>
  );
}

export default FormularioVehiculo;