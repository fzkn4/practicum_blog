import React, { useState, useEffect } from "react";
import Icon from "./Icon";

const Timeline = () => {
  const [galleryView, setGalleryView] = useState({
    open: false,
    images: [],
    currentIndex: 0,
  });

  // Timeline items - college journey from 1st year to 4th year
  const timelineItems = [
    {
      date: "Year 1",
      title: "First Year",
      icon: "bookOpen",
      description:
        "The start of my college journey marked a time of exploring new opportunities and laying the groundwork for my academic path. The first programming language I learned was Java—and I instantly got hooked.",
      images: ["/timeline/year1.jpg", "/timeline/year1.1.jpg"],
    },
  ];

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
    <div className="timeline">
      <section className="timeline-hero">
        <div className="section-header">
          <span className="section-number">02</span>
          <span className="section-label">// timeline</span>
        </div>
        <h1 className="page-title">
          <span className="code-keyword">const</span>{" "}
          <span className="code-function">timeline</span>{" "}
          <span className="code-operator">=</span>{" "}
          <span className="code-bracket">[</span>
        </h1>
        <p className="page-subtitle">
          // A chronological journey through events
        </p>
      </section>

      <section className="timeline-content">
        <div className="timeline-container">
          {timelineItems.length > 0 ? (
            timelineItems.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">
                  <div className="timeline-dot"></div>
                  {index < timelineItems.length - 1 && (
                    <div className="timeline-line"></div>
                  )}
                </div>
                <div className="timeline-content-wrapper">
                  <div className="timeline-date">{item.date}</div>
                  <div className="timeline-header">
                    {item.icon && (
                      <span className="timeline-icon">
                        <Icon name={item.icon} size={32} color="#a3e635" />
                      </span>
                    )}
                    <h3 className="timeline-title">{item.title}</h3>
                  </div>
                  {item.description && (
                    <p className="timeline-description">{item.description}</p>
                  )}
                  {item.images && item.images.length > 0 && (
                    <div className="timeline-images">
                      {item.images.map((image, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="timeline-image-wrapper"
                          onClick={() => {
                            setGalleryView({
                              open: true,
                              images: item.images,
                              currentIndex: imgIndex,
                            });
                          }}
                        >
                          <img
                            src={image}
                            alt={`${item.title} - ${imgIndex + 1}`}
                            className="timeline-image"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="timeline-empty">
              <p className="timeline-empty-text">
                // Timeline items will be added here
              </p>
            </div>
          )}
        </div>
      </section>

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
          <div className="gallery-main" onClick={(e) => e.stopPropagation()}>
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
  );
};

export default Timeline;
