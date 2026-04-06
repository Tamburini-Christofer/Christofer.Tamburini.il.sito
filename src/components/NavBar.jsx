import { NavLink } from "react-router-dom";

let navBarMenu = [
  { route: "web-developer", label: "Web Developer" },
  { route: "fotografia", label: "Fotografia" },
  { route: "video-droni", label: "Video & Drone" },
  { route: "Stampa3D", label: "Stampa3D" },
];

export default function NavBar() {
  return (
    <>
      <div id="contenitoreNavBar">
        <img
          src="/public/Sfondi/chris_watermark_bianco.png"
          alt="Logo di Christofer Tamburini"
        />
        <div>
          <ul className="contenitoreMenu">
            {navBarMenu.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.route}
                  className={
                    link.label === "Web Developer"
                      ? "hoverWeb"
                      : link.label === "Fotografia"
                        ? "hoverFot"
                        : link.label === "Video & Drone"
                          ? "hoverVid"
                          : link.label === "Stampa3D"
                            ? "hoverSta"
                            : ""
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
