import logo from "./imgs/logo.png";
import "../navbar/NavBar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { useContext } from "react";

export const NavBar = () => {
  const { user, signIn } = useContext(AuthContext);
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

          <span>
            {user ? (
              <>
                <Link to="/AddBlog" id="subsLink">
                  Add Blog <i class="fa-solid fa-plus"></i> &nbsp; &nbsp;
                </Link>
                <span className="add_blog">Welcome {user.userName}</span>
              </>
            ) : (
              <button className="subsBtn" onClick={signIn}>
                subscribe
              </button>
            )}
          </span>
        </div>
      </div>
    </>
  );
};
