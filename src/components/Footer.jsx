import { NavLink, useLocation } from "react-router-dom";

let columnServizi = [
  { label: "SERVIZI" },
  { label: "Web Development", route: "/web-developer" },
  { label: "Fotografia", route: "/fotografia" },
  { label: "Video & Droni", route: "/video-droni" },
  { label: "3D & Stampa", route: "/stampa3D" },
];
let columnContatti = [
  { label: "CONTATTI" },
  { label: "+39 347 340 2835" },
  { label: "Trento - Italia" },
  {
    label: "christofer.tamburini92@gmail.com",
    href: "mailto:christofer.tamburini92@gmail.com",
  },
];

export default function Footer() {
  const { pathname } = useLocation();

  const getActivePageColor = () => {
    if (pathname.startsWith("/web-developer")) return "var(--webDeveloper)";
    if (pathname.startsWith("/fotografia")) return "var(--fotografia)";
    if (pathname.startsWith("/video-droni")) return "var(--videoDrone)";
    if (pathname.startsWith("/stampa3D")) return "var(--stampa3D)";
    return "var(--primaryWhite)";
  };

  const activePageColor = getActivePageColor();

  return (
    <>
      <div id="footerContenitore">
        <div>
          <p>
            Creatività multidisciplinare al servizio di idee ambiziose. Dal
            digitale al fisico, ogni progetto è un'opportunità per innovare.
          </p>
          <div>
            <ul className="socialIcon">
              <li className="GitHubIcon">
                <a href="https://github.com/Tamburini-Christofer"><i class="fa-brands fa-github"></i></a>
              </li >
              <li className="LinkIcon">
                <a href="https://www.linkedin.com/in/christofer-tamburini-6710b5346/"><i class="fa-brands fa-linkedin"></i></a>
              </li>
              <li className="InstagramIcon">
                <a href="https://www.instagram.com/christofer.tamburini/"><i class="fa-brands fa-instagram"></i></a>
              </li>
              <li className="YoutubeIcon">
                <a href="https://www.youtube.com/@christofertamburiniChannel"><i class="fa-brands fa-youtube"></i></a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <ul>
            {columnServizi.map((s) => (
              <li
                key={s.label}
                className={
                  s.label === "web Development"
                    ? "hoverWeb"
                    : s.label === "Fotografia"
                      ? "hoverFot"
                      : s.label === "Video & Droni"
                        ? "hoverVid"
                        : s.label === "3D & Stampa"
                          ? "hoverSta"
                          : ""
                }
              >
                {s.route ? <NavLink to={s.route}>{s.label}</NavLink> : s.label}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            {columnContatti.map((c) => (
              <li key={c.label}>
                {c.href ? (
                  <a
                    href={c.href}
                    className="footerEmailLink"
                    style={{ color: activePageColor }}
                  >
                    {c.label}
                  </a>
                ) : (
                  c.label
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
