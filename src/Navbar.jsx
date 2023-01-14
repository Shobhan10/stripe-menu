import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import sublinks from "./data";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="nav-logo" />
          <button className="btn toggle-btn">
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {sublinks.map((link) => {
            const { page } = link;
            return (
              <li>
                <button className="link-btn">{page}</button>
              </li>
            );
          })}
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
