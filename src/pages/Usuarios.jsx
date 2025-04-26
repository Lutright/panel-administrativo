function Usuarios() {
    const usuarios = [
      { username: "admin", rol: "Administrador" },
      { username: "carla", rol: "Vendedor" },
      { username: "mario", rol: "Inventario" },
    ];
  
    return (
      <div>
        <h2 className="mb-4">Usuarios del Sistema</h2>
        <div className="row">
          {usuarios.map((u, i) => (
            <div className="col-md-4 mb-3" key={i}>
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">@{u.username}</h5>
                  <p className="card-text">Rol: {u.rol}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
export default Usuarios;  