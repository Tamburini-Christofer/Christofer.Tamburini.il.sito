let columnServizi = [
  "SERVIZI",
  "web Development",
  "Fotografia",
  "Video & Droni",
  "3D & Stampa",
];
let columnContatti = [
  "CONTATTI",
  "+39 347 340 2835",
  "Trento - Italia",
  "christofer.tamburini92@gmail.com",
];

export default function Footer() {
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
                <i class="fa-brands fa-github"></i>
              </li >
              <li className="LinkIcon">
                <i class="fa-brands fa-linkedin"></i>
              </li>
              <li className="InstagramIcon">
                <i class="fa-brands fa-instagram"></i>
              </li>
              <li className="YoutubeIcon">
                <i class="fa-brands fa-youtube"></i>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <ul>
            {columnServizi.map((s) => (
              <li
                key={s}
                className={
                  s === "web Development"
                    ? "hoverWeb"
                    : s === "Fotografia"
                      ? "hoverFot"
                      : s === "Video & Droni"
                        ? "hoverVid"
                        : s === "3D & Stampa"
                          ? "hoverSta"
                          : ""
                }
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            {columnContatti.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
