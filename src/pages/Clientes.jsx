function Clientes() {
    const clientes = [
      { id: 1, nombre: "Juan Pérez", correo: "juan@mail.com" },
      { id: 2, nombre: "Ana Torres", correo: "ana@mail.com" },
    ];
  
    return (
      <div>
        <h2 className="mb-4">Clientes</h2>
        <table className="table table-striped">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Correo</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((c) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.nombre}</td>
                <td>{c.correo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
export default Clientes;  