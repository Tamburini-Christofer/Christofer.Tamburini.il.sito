import { useEffect, useState } from "react";

export default function BackToTopArrow() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 220);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className={`backToTopArrow ${isVisible ? "isVisible" : ""}`}
      aria-label="Torna in alto"
      onClick={handleBackToTop}
    >
      ↑
    </button>
  );
}