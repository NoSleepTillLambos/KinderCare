import "./NavBar.scss";
import Logo from "../Assets/Logo/logo.png";
import { Link, Route } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

function NavBar() {
  const { logout, isPending } = useLogout();
  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={Logo} style={{ marginLeft: "10px" }} alt="logo"></img>
          <span>Kinder Care</span>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          {!isPending && (
            <button className="btn" onClick={logout}>
              Logout
            </button>
          )}
          {isPending && (
            <button className="btn" disabled onClick={logout}>
              Logging out...
            </button>
          )}
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
