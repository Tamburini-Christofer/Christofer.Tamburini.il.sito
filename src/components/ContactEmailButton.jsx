import { useLocation } from "react-router-dom";

export default function ContactEmailButton() {
  const { pathname } = useLocation();

  const getActivePageColor = () => {
    if (pathname.startsWith("/web-developer")) return "var(--SoftwebDeveloper)";
    if (pathname.startsWith("/fotografia")) return "var(--Softfotografia)";
    if (pathname.startsWith("/video-droni")) return "var(--SoftvideoDrone)";
    if (pathname.startsWith("/stampa3D")) return "var(--Softstampa3D)";
    return "var(--SoftwebDeveloper)";
  };

  return (
    <a
      href="mailto:christofer.tamburini92@gmail.com"
      className="contactEmailButton"
      style={{ backgroundColor: getActivePageColor() }}
    >
      Contattami
    </a>
  );
}