import { useEffect, useRef } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const container = useRef();
  const {
    isSubmenu,
    location,
    page: { page, links },
  } = useGlobalContext();

  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.top = `${bottom}px`;
    submenu.style.left = `${center}px`;
  }, [location]);

  return (
    <aside className={`submenu ${isSubmenu && "show"}`} ref={container}>
      <section>
        <h4>{page}</h4>
        <div className={`submenu-center col-${links.length}`}>
          {links.map((link, index) => {
            const { label, icon, url } = link;
            return (
              <a href={url} key={index}>
                {icon}
                {label}
              </a>
            );
          })}
        </div>
      </section>
    </aside>
  );
};

export default Submenu;
