import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#011638' }}>
      <div className="container">
        <NavLink className="navbar-brand" to="/">
            <img 
                src={logo} 
                alt="Logo" 
                width="40" 
                height="40" 
                className="d-inline-block align-text-top rounded-circle p-1"
                style={{ backgroundColor: 'white' }}
            />
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Clientes</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/proveedor">Proveedor</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/usuarios">Usuarios</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/logout">Logout</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;