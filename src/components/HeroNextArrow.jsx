import { useEffect, useState } from "react";

const NAVBAR_OFFSET = 88;

function getCenteredScrollTop(targetTop, targetHeight) {
  const documentHeight = document.documentElement.scrollHeight;
  const viewportHeight = window.innerHeight;
  const availableHeight = viewportHeight - NAVBAR_OFFSET;
  const centerOffset = Math.max((availableHeight - targetHeight) / 2, 0);

  const centeredTop = targetTop - NAVBAR_OFFSET - centerOffset;
  const maxScrollTop = Math.max(documentHeight - viewportHeight, 0);

  return Math.min(Math.max(centeredTop, 0), maxScrollTop);
}

export default function HeroNextArrow() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const updateVisibility = () => {
      const maxScrollY =
        document.documentElement.scrollHeight - window.innerHeight;
      const pageBottomReached = Math.ceil(window.scrollY) >= Math.floor(maxScrollY);

      setIsVisible(!pageBottomReached);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility);
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  const handleNextSection = () => {
    const sections = Array.from(document.querySelectorAll("main section"));
    const footer = document.querySelector("footer");

    if (sections.length === 0 && !footer) return;

    const currentScroll = window.scrollY + NAVBAR_OFFSET + 8;
    const nextSection = sections.find((section) => section.offsetTop > currentScroll);

    if (!nextSection) {
      if (!footer) return;

      window.scrollTo({
        top: getCenteredScrollTop(footer.offsetTop, footer.offsetHeight),
        behavior: "smooth",
      });
      return;
    }

    window.scrollTo({
      top: getCenteredScrollTop(nextSection.offsetTop, nextSection.offsetHeight),
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      className={`heroNextArrow ${isVisible ? "" : "isHidden"}`.trim()}
      aria-label="Vai alla sezione successiva"
      onClick={handleNextSection}
    >
      ↓
    </button>
  );
}