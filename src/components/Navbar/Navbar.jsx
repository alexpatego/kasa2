import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/LOGO.png";

const Navbar = () => {
  const location = useLocation();
  const handleReload = (path) => {
    if (window.location.pathname === path) {
      window.location.reload();
    }
  };

  return (
    <nav className="navbar">
      <img className="navbar__img" src={logo} alt="logo" />
      <div className="navbar__links">
        <Link
          className={`navbar__links__a ${
            location.pathname === "/kasa2/" ? "active" : ""
          }`}
          to="/"
          onClick={() => handleReload("/kasa2/")}
        >
          Accueil
        </Link>
        <Link
          className={`navbar__links__a ${
            location.pathname === "/a-propos" ? "active" : ""
          }`}
          to="/a-propos"
          onClick={() => handleReload("/a-propos")}
        >
          A Propos
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
