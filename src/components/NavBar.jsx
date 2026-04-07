import { NavLink } from "react-router-dom";

let navBarMenu = [
  {
    route: "/",
    label: "Homepage",
    hoverClass: "hoverHome",
    activeClass: "activeHome",
    end: true,
  },
  {
    route: "web-developer",
    label: "Web Developer",
    hoverClass: "hoverWeb",
    activeClass: "activeWeb",
  },
  {
    route: "fotografia",
    label: "Fotografia",
    hoverClass: "hoverFot",
    activeClass: "activeFot",
  },
  {
    route: "video-droni",
    label: "Video & Drone",
    hoverClass: "hoverVid",
    activeClass: "activeVid",
  },
  {
    route: "stampa3D",
    label: "Stampa3D",
    hoverClass: "hoverSta",
    activeClass: "activeSta",
  },
];

export default function NavBar() {
  return (
    <>
      <div id="contenitoreNavBar">
        <div className="navMenuWrapper">
          <ul className="contenitoreMenu">
            {navBarMenu.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.route}
                  end={link.end}
                  className={({ isActive }) =>
                    `${link.hoverClass} ${isActive ? link.activeClass : ""}`.trim()
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
