import logo from "./imgs/logo.png";
import "../navbar/NavBar.css";
export const NavBar = () => {
  return (
    <>
      <div className="nav_container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="right_elements">
          <ul>
            <li>
              <a href="/">Daily Digest</a>
            </li>
            <li>
              <a href="/">Design Tools</a>
            </li>
            <li>
              <a href="/">Tutorials</a>
            </li>
          </ul>
          <button>
            <a href="/">Subscribe</a>
          </button>
        </div>
      </div>
    </>
  );
};
