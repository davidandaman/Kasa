import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function Header() {
  const location = useLocation();

  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="Kasa" />
      </Link>
      <nav>
        <Link to="/" className={location.pathname === "/" ? "active-link" : ""}>
          Accueil
        </Link>
        <Link
          to="/a-propos"
          className={location.pathname === "/a-propos" ? "active-link" : ""}
        >
          A propos
        </Link>
      </nav>
    </div>
  );
}

export default Header;
