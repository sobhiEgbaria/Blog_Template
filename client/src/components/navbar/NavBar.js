import logo from "./imgs/Black_Logo.png";
import "../navbar/NavBar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";

export const NavBar = () => {
  const { user, signOut } = useContext(AuthContext);

  // go to the top of the page to show the right content
  const handelScroll = () => {
    window.scrollTo(0, 100);
  };

  return (
    <>
      <div className="nav_container">
        <div className="logo">
          <Link to="/HomePage">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="right_elements">
          <ul>
            <li>
              <Link to="/Programming">Programming</Link>
            </li>
            <li>
              <Link to="/CS">CS</Link>
            </li>

            <li>
              <Link to="/Tools">Tools</Link>
            </li>
          </ul>

          <span>
            {user ? (
              <>
                <Link onClick={handelScroll} to="/AddBlog" id="newBlog">
                  New Blog <i className="fa-solid fa-plus"></i> &nbsp; &nbsp;
                </Link>
                <Link
                  className="add_blog"
                  onClick={() => signOut()}
                  to="/HomePage"
                >
                  {user.name} <i className="fa-solid fa-right-from-bracket"></i>
                </Link>
              </>
            ) : (
              <div id="signInDiv"></div>
            )}
          </span>
        </div>
      </div>
    </>
  );
};
