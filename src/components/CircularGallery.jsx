import { useMemo, useState, useRef } from "react";
import gsap from "gsap";
import CertificateModal from "./CertificateModal";

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

export default function CircularGallery({
  items,
  borderRadius = 0.04,
  scrollSpeed = 1.5,
  scrollEase = 0.09,
  bend = 0,
}) {
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);
  const tweenRef = useRef(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cards = useMemo(() => {
    if (!Array.isArray(items)) return [];
    return items.map((item, index) => ({ ...item, id: `${item.src}-${index}` }));
  }, [items]);

  const handleWheel = (event) => {
    event.preventDefault();
    // Scroll disabilitato - navigazione solo manuale tramite bottoni
  };

  const navigate = (direction) => {
    if (cards.length === 0) return;
    if (tweenRef.current) tweenRef.current.kill();

    const step = 1 / cards.length;
    const targetProgress = progressRef.current + direction * step;
    const progressObj = { current: progressRef.current };

    tweenRef.current = gsap.to(progressObj, {
      current: targetProgress,
      duration: 0.6,
      ease: "power2.inOut",
      onUpdate() {
        progressRef.current = progressObj.current;
        setProgress(progressObj.current);
      },
    });
  };

  const handleCertificateClick = (item) => {
    setSelectedCertificate(item);
    setIsModalOpen(true);
  };

  return (
    <div className="circularGalleryWrapper">
      <button
        className="circularGalleryNavBtn circularGalleryNavBtnPrev"
        onClick={() => navigate(-1)}
        aria-label="Certificazione precedente"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <div className="circularGallery" onWheel={handleWheel}>
        <div className="circularGalleryTrack" style={{ "--galleryProgress": progress }}>
          {cards.map((item, index) => {
            const base = index / Math.max(1, cards.length);
            const raw = (base - progress) * Math.PI * 2;
            const angle = Math.atan2(Math.sin(raw), Math.cos(raw));
            const normalizedX = Math.sin(angle);
            const depth = Math.cos(angle);
            const curveOffset = bend * (1 - Math.abs(normalizedX));

            const x = normalizedX * 42;
            const y = curveOffset * 100;
            const scale = clamp(0.72 + (depth + 1) * 0.14, 0.72, 1);
            const opacity = clamp(0.3 + (depth + 1) * 0.4, 0.3, 1);
            const zIndex = Math.round((depth + 1) * 100);

            return (
              <figure
                key={item.id}
                className="circularGalleryCard"
                onClick={() => handleCertificateClick(item)}
                style={{
                  left: `${50 + x}%`,
                  transform: `translate(-50%, calc(-50% + ${y}px)) scale(${scale})`,
                  opacity,
                  zIndex,
                  borderRadius: `${borderRadius * 100}%`,
                  transition: `transform ${scrollEase}s ease, opacity ${scrollEase}s ease`,
                  cursor: "pointer",
                }}
              >
                <img src={item.src} alt={item.alt} loading="lazy" />
                <figcaption>{item.title}</figcaption>
              </figure>
            );
          })}
        </div>
      </div>

      <button
        className="circularGalleryNavBtn circularGalleryNavBtnNext"
        onClick={() => navigate(1)}
        aria-label="Certificazione successiva"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      <CertificateModal
        certificate={selectedCertificate}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
