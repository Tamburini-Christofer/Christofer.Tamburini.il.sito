import { NavLink } from "react-router-dom";

let NavBarMenu = [
  { route: "/", label: "Homepage" },
  { route: "web-developer", label: "Web Developer" },
  { route: "fotografia", label: "Fotografia" },
  { route: "video-droni", label: "Video & Drone" },
  { route: "Stampa3D", label: "Stampoa3D" },
];

export default function NavBar() {
  return (
    <>
      <div>
        <img src="" alt="" />
        <div>
          <ul>
            {NavBarMenu.map((link, index) => {
              <li key={index}>
                <NavLink
                  to={link.route}>
                  {link.label}
                </NavLink>
              </li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
