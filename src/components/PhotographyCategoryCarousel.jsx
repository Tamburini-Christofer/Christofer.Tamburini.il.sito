import { useEffect, useState } from "react";

function getInitialCategory(collections) {
  return collections.find((collection) => collection.images?.length > 0)?.id ?? collections[0]?.id ?? null;
}

export default function PhotographyCategoryCarousel({ collections }) {
  const [activeCategoryId, setActiveCategoryId] = useState(() => getInitialCategory(collections ?? []));
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveCategoryId(getInitialCategory(collections ?? []));
  }, [collections]);

  const activeCollection = collections.find((collection) => collection.id === activeCategoryId) ?? collections[0];
  const activeImages = activeCollection?.images ?? [];
  const hasImages = activeImages.length > 0;
  const safeImageIndex = hasImages ? activeImageIndex % activeImages.length : 0;
  const activeImage = hasImages ? activeImages[safeImageIndex] : null;

  useEffect(() => {
    setActiveImageIndex(0);
  }, [activeCategoryId]);

  if (!collections?.length) {
    return null;
  }

  const goToPreviousImage = () => {
    if (!hasImages) {
      return;
    }

    setActiveImageIndex((currentIndex) => (currentIndex - 1 + activeImages.length) % activeImages.length);
  };

  const goToNextImage = () => {
    if (!hasImages) {
      return;
    }

    setActiveImageIndex((currentIndex) => (currentIndex + 1) % activeImages.length);
  };

  return (
    <div className="photoCategoryShowcase">
      <aside className="photoCategorySidebar">
        <div
          className="photoCategoryList"
          role="tablist"
          aria-label="Scegli una categoria fotografica"
        >
          {collections.map((collection) => {
            const isActive = collection.id === activeCategoryId;

            return (
              <button
                key={collection.id}
                type="button"
                className={isActive ? "photoCategoryListItem isActive" : "photoCategoryListItem"}
                onClick={() => setActiveCategoryId(collection.id)}
                aria-pressed={isActive}
              >
                <span className="photoCategoryListLabel">{collection.label}</span>
              </button>
            );
          })}
        </div>
      </aside>

      <div className="photoCategoryStage">
        {hasImages ? (
          <>
            <div className="photoCategoryMediaLayout">
              <div className="photoCategoryFrame">
                <img src={activeImage.src} alt={activeImage.alt} loading="lazy" />
              </div>

              <div className="photoCategoryThumbs" role="tablist" aria-label={`Miniature ${activeCollection.label}`}>
                {activeImages.map((image, index) => {
                  const isActive = index === safeImageIndex;

                  return (
                    <button
                      key={`${activeCollection.id}-${index}`}
                      type="button"
                      className={isActive ? "photoCategoryThumb isActive" : "photoCategoryThumb"}
                      onClick={() => setActiveImageIndex(index)}
                      aria-pressed={isActive}
                      aria-label={`Mostra scatto ${index + 1} di ${activeCollection.label}`}
                    >
                      <img src={image.src} alt={image.alt} loading="lazy" />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="photoCategoryControls">
              <div className="photoCategoryControlButtons">
                <button
                  type="button"
                  className="photoCategoryArrow"
                  onClick={goToPreviousImage}
                  aria-label={`Scatto precedente categoria ${activeCollection.label}`}
                >
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button
                  type="button"
                  className="photoCategoryArrow"
                  onClick={goToNextImage}
                  aria-label={`Scatto successivo categoria ${activeCollection.label}`}
                >
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="photoCategoryEmptyState">
            <span>Categoria in aggiornamento</span>
            <p>
              Questa sezione e gia predisposta. Appena mi invii le altre fotografie, la popolazione del carosello e immediata.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}