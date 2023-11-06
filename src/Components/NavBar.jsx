import "./NavBar.scss";
import Logo from "../Assets/Logo/logo.png";
import { Link, Route } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import Icon from "./Icon";
import { useAuthContext } from "../hooks/useAuthContext";

function NavBar() {
  const { logout, isPending } = useLogout();
  const { user } = useAuthContext();
  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={Logo} style={{ marginTop: "2px" }} alt="logo"></img>
          <span>Kinder Care</span>
        </li>
        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </>
        )}
        {user && (
          <li>
            <Link to="/">Home</Link>
            <Link to="/chat">Chat</Link>
            <Link to="/game">Games</Link>
            <Link to="/learning">Learning</Link>
            <Icon src={user.photoURL} />

            <button className="btn logout" onClick={logout}>
              Logout
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default NavBar;
