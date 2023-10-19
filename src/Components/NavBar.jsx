import "./NavBar.scss";
import Logo from "../Assets/Logo/logo.png";
import { Link, Route } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={Logo} alt="logo"></img>
          <span>Kinder Care</span>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <button className="btn">Logout</button>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
