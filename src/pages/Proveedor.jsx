function Proveedor() {
    const proveedores = [
      { id: 101, empresa: "Tech Solutions", contacto: "tech@sol.com" },
      { id: 102, empresa: "Distribuciones S.A.", contacto: "ventas@dsa.com" },
    ];
  
    return (
      <div>
        <h2 className="mb-4">Proveedores</h2>
        <ul className="list-group">
          {proveedores.map((p) => (
            <li className="list-group-item" key={p.id}>
              <strong>{p.empresa}</strong> – {p.contacto}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
export default Proveedor;  