import logo from "./imgs/logo.png";
import "../navbar/NavBar.css";
import { Link } from "react-router-dom";
export const NavBar = () => {
  return (
    <>
      <div className="nav_container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="right_elements">
          <ul>
            <li>
              <Link to="/DailyDigest">Daily Digest</Link>
            </li>
            <li>
              <Link to="/DesignTools">Design Tools</Link>
            </li>

            <li>
              <Link to="/Tutorials">Tutorials</Link>
            </li>
          </ul>
          <button>
            <Link to="/">Subscribe</Link>
          </button>
        </div>
      </div>
    </>
  );
};
