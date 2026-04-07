import { useNavigate } from "react-router-dom";

export default function HeroPageSwitchArrows({ prevRoute, nextRoute }) {
  const navigate = useNavigate();

  const handleSwitch = (route, slideDirection) => {
    if (!route) return;

    navigate(route, {
      state: { slideDirection },
    });
  };

  return (
    <div className="heroPageSwitchArrows" aria-label="Navigazione pagine servizio">
      {prevRoute ? (
        <button
          type="button"
          className="heroSideArrow heroSideArrowLeft"
          aria-label="Vai alla pagina precedente"
          onClick={() => handleSwitch(prevRoute, "from-left")}
        >
          ←
        </button>
      ) : null}

      {nextRoute ? (
        <button
          type="button"
          className="heroSideArrow heroSideArrowRight"
          aria-label="Vai alla pagina successiva"
          onClick={() => handleSwitch(nextRoute, "from-right")}
        >
          →
        </button>
      ) : null}
    </div>
  );
}