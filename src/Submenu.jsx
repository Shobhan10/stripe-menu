import sublinks from "./data";

const Submenu = () => {
  return (
    <aside className="submenu">
      <section>
        {sublinks.map((link) => {
          const { page, links } = link;
          return (
            <>
              <h4>{page}</h4>
              <div className={`submenu-center col-${links.length}`}>
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
            </>
          );
        })}
      </section>
    </aside>
  );
};

export default Submenu;
