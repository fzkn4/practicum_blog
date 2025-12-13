import React, { useState, useEffect, useRef } from "react";
import Icon from "./Icon";

const Preparation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);
  const [galleryView, setGalleryView] = useState({
    open: false,
    images: [],
    currentIndex: 0,
  });
  const imagesLoadedRef = useRef(false);

  // Workshop images
  const workshopImages = [
    "/workshop/30-104.jpg",
    "/workshop/30-106.jpg",
    "/workshop/30-12.jpg",
    "/workshop/30-123.jpg",
    "/workshop/30-124.jpg",
    "/workshop/30-127.jpg",
    "/workshop/30-128.jpg",
    "/workshop/30-141.jpg",
    "/workshop/30-16.jpg",
    "/workshop/30-18.jpg",
    "/workshop/30-19.jpg",
    "/workshop/30-20.jpg",
    "/workshop/30-21.jpg",
    "/workshop/30-29.jpg",
    "/workshop/30-4.jpg",
    "/workshop/30-5.jpg",
    "/workshop/30-53.jpg",
    "/workshop/30-7.jpg",
    "/workshop/30-71.jpg",
  ];

  // Check if images are already cached in browser
  const checkImagesCached = async () => {
    const checkPromises = workshopImages.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          // If onload fires immediately or image is complete, it's cached
          resolve(img.complete);
        };
        img.onerror = () => resolve(false);
        img.src = src;
        // Check if already complete (cached)
        if (img.complete) {
          resolve(true);
        }
      });
    });

    const results = await Promise.all(checkPromises);
    return results.every((cached) => cached);
  };

  // Load images on component mount
  useEffect(() => {
    const preloadImages = async () => {
      // Check if images are already cached first
      const areCached = await checkImagesCached();
      if (areCached) {
        // Images are cached, skip loading state
        setIsLoading(false);
        imagesLoadedRef.current = true;
        return;
      }

      // Images not cached, show loading and preload
      setIsLoading(true);
      setLoadedImages(0);

      const loadPromises = workshopImages.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            setLoadedImages((prev) => prev + 1);
            resolve();
          };
          img.onerror = reject;
          img.src = src;
        });
      });

      try {
        await Promise.all(loadPromises);
        imagesLoadedRef.current = true;
        // Small delay to ensure smooth transition
        await new Promise((resolve) => setTimeout(resolve, 300));
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading images:", error);
        setIsLoading(false);
      }
    };

    preloadImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keyboard navigation for gallery
  useEffect(() => {
    if (!galleryView.open) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setGalleryView({ ...galleryView, open: false });
      } else if (e.key === "ArrowLeft") {
        setGalleryView({
          ...galleryView,
          currentIndex:
            galleryView.currentIndex > 0
              ? galleryView.currentIndex - 1
              : galleryView.images.length - 1,
        });
      } else if (e.key === "ArrowRight") {
        setGalleryView({
          ...galleryView,
          currentIndex:
            galleryView.currentIndex < galleryView.images.length - 1
              ? galleryView.currentIndex + 1
              : 0,
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [galleryView]);

  return (
    <div className="preparation">
      <section className="preparation-hero">
        <div className="section-header">
          <span className="section-number">02</span>
          <span className="section-label">// preparation</span>
        </div>
        <h1 className="page-title">
          <span className="code-keyword">async</span>{" "}
          <span className="code-function">prepare</span>{" "}
          <span className="code-operator">()</span> {"=>"}{" "}
          <span className="code-bracket">{"{"}</span>
        </h1>
        <p className="page-subtitle">
          // How I prepared for this practicum journey
        </p>
      </section>

      <section className="preparation-content">
        <div className="content-section">
          <h2 className="section-title">
            <span className="code-comment">// Workshop</span>
          </h2>
          <div className="prep-item">
            <div className="prep-header">
              <span className="prep-icon">
                <Icon name="settings" size={32} color="#a3e635" />
              </span>
              <h3 className="prep-title">
                Workshop: Etiquette on Office and Workplace
              </h3>
            </div>
            <p className="prep-description">
              We conducted a workshop focused on professional etiquette and
              workplace behavior. This workshop provided valuable insights into
              office culture, communication, and professional conduct that will
              be essential during the practicum.
            </p>
            <div className="workshop-gallery-container">
              {isLoading ? (
                <div className="workshop-loading">
                  <div className="loading-spinner"></div>
                  <p className="loading-text">
                    Loading images... {loadedImages} / {workshopImages.length}
                  </p>
                </div>
              ) : (
                <div className="workshop-images-grid">
                  {workshopImages.map((image, index) => (
                    <div
                      key={index}
                      className="workshop-image-wrapper"
                      onClick={() => {
                        setGalleryView({
                          open: true,
                          images: workshopImages,
                          currentIndex: index,
                        });
                      }}
                    >
                      <img
                        src={image}
                        alt={`Workshop image ${index + 1}`}
                        className="workshop-image"
                      />
                      <div className="image-overlay">
                        <span className="image-number">
                          {index + 1} / {workshopImages.length}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Image Gallery Modal */}
            {galleryView.open && (
              <div
                className="gallery-modal"
                onClick={() => setGalleryView({ ...galleryView, open: false })}
              >
                <button
                  className="gallery-close"
                  onClick={(e) => {
                    e.stopPropagation();
                    setGalleryView({ ...galleryView, open: false });
                  }}
                >
                  ×
                </button>
                <button
                  className="gallery-nav gallery-prev"
                  onClick={(e) => {
                    e.stopPropagation();
                    setGalleryView({
                      ...galleryView,
                      currentIndex:
                        galleryView.currentIndex > 0
                          ? galleryView.currentIndex - 1
                          : galleryView.images.length - 1,
                    });
                  }}
                >
                  ‹
                </button>
                <div
                  className="gallery-main"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="gallery-image-container">
                    <img
                      key={galleryView.currentIndex}
                      src={galleryView.images[galleryView.currentIndex]}
                      alt={`Gallery image ${galleryView.currentIndex + 1}`}
                      className="gallery-main-image"
                    />
                  </div>
                  <div className="gallery-thumbnails">
                    {galleryView.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className={`gallery-thumbnail ${
                          index === galleryView.currentIndex ? "active" : ""
                        }`}
                        onClick={() =>
                          setGalleryView({
                            ...galleryView,
                            currentIndex: index,
                          })
                        }
                      />
                    ))}
                  </div>
                  <div className="gallery-counter">
                    {galleryView.currentIndex + 1} / {galleryView.images.length}
                  </div>
                </div>
                <button
                  className="gallery-nav gallery-next"
                  onClick={(e) => {
                    e.stopPropagation();
                    setGalleryView({
                      ...galleryView,
                      currentIndex:
                        galleryView.currentIndex < galleryView.images.length - 1
                          ? galleryView.currentIndex + 1
                          : 0,
                    });
                  }}
                >
                  ›
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Preparation;
