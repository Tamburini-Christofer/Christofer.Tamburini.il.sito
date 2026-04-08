import { useEffect, useRef, useState } from "react";

export default function ScrollRevealBlock({
  className = "",
  children,
  variant = "up",
}) {
  const blockRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const blockElement = blockRef.current;
    if (!blockElement) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(blockElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={blockRef}
      className={`${className} scrollRevealBlock variant-${variant} ${isVisible ? "isVisible" : ""}`}
    >
      {children}
    </div>
  );
}