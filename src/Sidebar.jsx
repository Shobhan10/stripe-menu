import { FaTimes } from "react-icons/fa";
import sublinks from "./data";

const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      <aside className="sidebar">
        <button className="close-btn">
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((link) => {
            const { page, links } = link;
            return (
              <article>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((sublink) => {
                    const { label, icon, url } = sublink;
                    return (
                      <a href={url}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
