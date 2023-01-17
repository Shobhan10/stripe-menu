import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import sublinks from "./data";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const menuBtn = e.target.getBoundingClientRect();
    const center = (menuBtn.left + menuBtn.right) / 2;
    const bottom = menuBtn.bottom;
    openSubmenu(page, { center, bottom });
  };

  function handleSubmenu(e) {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  }

  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="nav-logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {sublinks.map((link, index) => {
            const { page } = link;
            return (
              <li key={index}>
                <button className="link-btn" onMouseOver={displaySubmenu}>
                  {page}
                </button>
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
