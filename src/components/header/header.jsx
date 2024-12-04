import { Link } from "react-router-dom";
import "./header.module.css";

function Header() {
  return (
    <header className="header">
      <h1>Stara Ponderosa</h1>
      <nav className="nav">
        <Link to="/" className="nav-item">
          About
        </Link>
        <Link to="/contact" className="nav-item">
          Contact
        </Link>
        <Link to="/events" className="nav-item">
          Events
        </Link>
        <Link to="/forum" className="nav-item">
          Forum
        </Link>
        <Link to="/menu" className="nav-item">
          Menu
        </Link>
      </nav>
    </header>
  );
}

export default Header;
