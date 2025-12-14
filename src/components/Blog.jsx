import { useState, useEffect } from "react";

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [galleryView, setGalleryView] = useState({
    open: false,
    images: [],
    currentIndex: 0,
  });
  const [showAllImages, setShowAllImages] = useState({});

  // Calculate weeks from Nov 24, 2025 to present
  const startDate = new Date("2025-12-08");
  const currentDate = new Date();
  const daysSinceStart = Math.max(
    0,
    Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24))
  );
  const weeksSinceStart = Math.max(1, Math.floor(daysSinceStart / 7) + 1);

  // Helper function to format date range for a week
  const getWeekDateRange = (weekNum) => {
    const weekStart = new Date(startDate);
    weekStart.setDate(weekStart.getDate() + (weekNum - 1) * 7);
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekEnd.getDate() + 6);

    const options = { month: "short", day: "numeric", year: "numeric" };
    return `${weekStart.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    })} - ${weekEnd.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })}`;
  };

  const blogPosts = [
    {
      id: 1,
      week: "Week 1",
      date: getWeekDateRange(1),
      title: "CCS Practicum: Workshop Etiquette on Office and Workplace",
      tags: ["workshop", "etiquette", "professionalism", "practicum"],
      images: [
        "/workshop/30-4.jpg",
        "/workshop/30-5.jpg",
        "/workshop/30-7.jpg",
        "/workshop/30-12.jpg",
        "/workshop/30-16.jpg",
        "/workshop/30-18.jpg",
        "/workshop/30-19.jpg",
        "/workshop/30-20.jpg",
        "/workshop/30-21.jpg",
        "/workshop/30-29.jpg",
        "/workshop/30-53.jpg",
        "/workshop/30-71.jpg",
        "/workshop/30-104.jpg",
        "/workshop/30-106.jpg",
        "/workshop/30-123.jpg",
        "/workshop/30-124.jpg",
        "/workshop/30-127.jpg",
        "/workshop/30-128.jpg",
        "/workshop/30-141.jpg",
      ],
      content: (
        <pre className="code-pre">
          <span className="code-comment">
            // Week 1: CCS Practicum Workshop - Office & Workplace Etiquette
          </span>
          {"\n"}
          {"\n"}
          <span className="code-keyword">const</span>{" "}
          <span className="code-variable">workshop</span>{" "}
          <span className="code-operator">=</span>{" "}
          <span className="code-bracket">{"{"}</span>
          {"\n"}
          {"  "}
          <span className="code-variable">title</span>
          <span className="code-operator">:</span>{" "}
          <span className="code-string">
            "Workshop Etiquette on Office and Workplace"
          </span>
          <span className="code-operator">,</span>
          {"\n"}
          {"  "}
          <span className="code-variable">type</span>
          <span className="code-operator">:</span>{" "}
          <span className="code-string">"CCS Practicum Workshop"</span>
          <span className="code-operator">,</span>
          {"\n"}
          {"  "}
          <span className="code-variable">topics</span>
          <span className="code-operator">:</span>{" "}
          <span className="code-bracket">[</span>
          {"\n"}
          {"    "}
          <span className="code-string">
            "Professional communication in office settings"
          </span>
          <span className="code-operator">,</span>
          {"\n"}
          {"    "}
          <span className="code-string">
            "Workplace dress code and appearance"
          </span>
          <span className="code-operator">,</span>
          {"\n"}
          {"    "}
          <span className="code-string">
            "Meeting etiquette and participation"
          </span>
          <span className="code-operator">,</span>
          {"\n"}
          {"    "}
          <span className="code-string">"Time management and punctuality"</span>
          <span className="code-operator">,</span>
          {"\n"}
          {"    "}
          <span className="code-string">
            "Respectful interaction with colleagues and supervisors"
          </span>
          <span className="code-operator">,</span>
          {"\n"}
          {"    "}
          <span className="code-string">
            "Email and digital communication standards"
          </span>
          <span className="code-operator">,</span>
          {"\n"}
          {"    "}
          <span className="code-string">
            "Office space and shared resource etiquette"
          </span>
          {"\n"}
          {"  "}
          <span className="code-bracket">]</span>
          <span className="code-operator">,</span>
          {"\n"}
          {"  "}
          <span className="code-variable">keyTakeaways</span>
          <span className="code-operator">:</span>{" "}
          <span className="code-bracket">[</span>
          {"\n"}
          {"    "}
          <span className="code-string">
            "First impressions matter in professional environments"
          </span>
          <span className="code-operator">,</span>
          {"\n"}
          {"    "}
          <span className="code-string">
            "Understanding workplace culture and expectations"
          </span>
          <span className="code-operator">,</span>
          {"\n"}
          {"    "}
          <span className="code-string">
            "Building professional relationships through respect"
          </span>
          <span className="code-operator">,</span>
          {"\n"}
          {"    "}
          <span className="code-string">
            "Adapting communication style to workplace context"
          </span>
          {"\n"}
          {"  "}
          <span className="code-bracket">]</span>
          <span className="code-operator">,</span>
          {"\n"}
          {"  "}
          <span className="code-variable">status</span>
          <span className="code-operator">:</span>{" "}
          <span className="code-string">"completed"</span>
          <span className="code-operator">,</span>
          {"\n"}
          {"  "}
          <span className="code-variable">value</span>
          <span className="code-operator">:</span>{" "}
          <span className="code-string">"essential_for_ojt_preparation"</span>
          {"\n"}
          <span className="code-bracket">{"}"}</span>
        </pre>
      ),
      reflection: `This workshop provided essential guidance on professional etiquette that will be crucial 
      for my upcoming OJT experience. The session covered various aspects of workplace behavior, from 
      appropriate dress codes to effective communication strategies. Learning about meeting etiquette 
      and time management practices will help me integrate smoothly into any professional environment. 
      The emphasis on respectful interactions and understanding workplace culture resonated with me, as 
      these soft skills are just as important as technical competencies. This workshop has prepared me 
      to make a positive first impression and navigate professional settings with confidence during my 
      practicum.`,
    },
    {
      id: 2,
      week: "Week 1",
      date: getWeekDateRange(1),
      title: "OJT Application & Preparation",
      tags: ["ojt", "application", "preparation"],
      images: ["/week_1.1.jpg", "/week_1.2.jpg", "/week_1.3.jpg"],
      content: (
        <pre className="code-pre">
          <span className="code-comment">
            // Week 1: OJT Application & Preparation
          </span>
          {"\n"}
          {"\n"}
          <span className="code-keyword">const</span>{" "}
          <span className="code-variable">firstWeek</span>{" "}
          <span className="code-operator">=</span>{" "}
          <span className="code-bracket">{"{"}</span>
          {"\n"}
          {"  "}
          <span className="code-variable">ojtStatus</span>
          <span className="code-operator">:</span>{" "}
          <span className="code-bracket">{"{"}</span>
          {"\n"}
          {"    "}
          <span className="code-variable">pnpOffice</span>
          <span className="code-operator">:</span>{" "}
          <span className="code-string">"pending"</span>
          <span className="code-operator">,</span>
          {"\n"}
          {"    "}
          <span className="code-variable">reason</span>
          <span className="code-operator">:</span>{" "}
          <span className="code-string">
            "Office is too busy, waiting for their call"
          </span>
          <span className="code-operator">,</span>
          {"\n"}
          {"    "}
          <span className="code-variable">action</span>
          <span className="code-operator">:</span>{" "}
          <span className="code-string">
            "Prepared alternative application"
          </span>
          {"\n"}
          {"  "}
          <span className="code-bracket">{"}"}</span>
          <span className="code-operator">,</span>
          {"\n"}
          {"  "}
          <span className="code-variable">activities</span>
          <span className="code-operator">:</span>{" "}
          <span className="code-bracket">[</span>
          {"\n"}
          {"    "}
          <span className="code-string">
            "Submitted OJT application to PNP office"
          </span>
          <span className="code-operator">,</span>
          {"\n"}
          {"    "}
          <span className="code-string">
            "Prepared backup application letter and endorsement"
          </span>
          <span className="code-operator">,</span>
          {"\n"}
          {"    "}
          <span className="code-string">
            "Continued working on side projects and clients"
          </span>
          <span className="code-operator">,</span>
          {"\n"}
          {"    "}
          <span className="code-string">
            "Maintained productivity while waiting for response"
          </span>
          {"\n"}
          {"  "}
          <span className="code-bracket">]</span>
          <span className="code-operator">,</span>
          {"\n"}
          {"  "}
          <span className="code-variable">preparation</span>
          <span className="code-operator">:</span>{" "}
          <span className="code-bracket">[</span>
          {"\n"}
          {"    "}
          <span className="code-string">
            "Alternative office application ready"
          </span>
          <span className="code-operator">,</span>
          {"\n"}
          {"    "}
          <span className="code-string">
            "Multiple options for OJT placement"
          </span>
          <span className="code-operator">,</span>
          {"\n"}
          {"    "}
          <span className="code-string">
            "Staying proactive in the application process"
          </span>
          {"\n"}
          {"  "}
          <span className="code-bracket">]</span>
          <span className="code-operator">,</span>
          {"\n"}
          {"  "}
          <span className="code-variable">status</span>
          <span className="code-operator">:</span>{" "}
          <span className="code-string">"actively_preparing"</span>
          {"\n"}
          <span className="code-bracket">{"}"}</span>
        </pre>
      ),
      reflection: `This first week has been about navigating the OJT application process. 
      I submitted my application to the PNP office, but they informed us that they were 
      too busy and asked us to wait for their call. Rather than just waiting passively, 
      I took the initiative to prepare another application letter and endorsement for 
      an alternative office. This way, I have a backup plan in case the PNP office 
      doesn't respond or rejects our application. In the meantime, I've been continuing 
      to work on my side projects and serve my clients, ensuring I remain productive 
      and maintain my skills while waiting for the OJT placement.`,
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

  // Generate placeholder posts for remaining weeks (starting from week 4)
  for (let i = 4; i <= weeksSinceStart; i++) {
    blogPosts.push({
      id: i,
      week: `Week ${i}`,
      date: getWeekDateRange(i),
      title: `Week ${i} Update`,
      tags: ["update", "progress"],
      content: `// Week ${i}: Progress Update

const week${i} = {
  status: "in_progress",
  focus: "Continuing practicum work",
  updates: "To be documented..."
}`,
      reflection: `This week's reflection will be updated as the practicum progresses.`,
    });
  }

  return (
    <div className="blog">
      <section className="blog-cover">
        <img src="/cover.jpg" alt="Blog Cover" className="cover-image" />
      </section>
      <section className="blog-hero">
        <div className="section-header">
          <span className="section-number">03</span>
          <span className="section-label">// blog</span>
        </div>
        <h1 className="page-title">
          <span className="code-keyword">export</span>{" "}
          <span className="code-keyword">const</span>{" "}
          <span className="code-variable">blogPosts</span> ={" "}
          <span className="code-bracket">[</span>
        </h1>
        <p className="page-subtitle">
          // Weekly reflections and learnings from the practicum
        </p>
        <div className="blog-stats">
          <div className="stat-item">
            <span className="stat-value">{weeksSinceStart}</span>
            <span className="stat-label">weeks</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{blogPosts.length}</span>
            <span className="stat-label">posts</span>
          </div>
        </div>
      </section>

      <section className="blog-content">
        <div className="posts-grid">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className={`post-card ${
                selectedPost?.id === post.id ? "expanded" : ""
              }`}
              onClick={() =>
                setSelectedPost(selectedPost?.id === post.id ? null : post)
              }
            >
              <div className="post-header">
                <div className="post-meta">
                  <span className="post-week">{post.week}</span>
                  <span className="post-date">{post.date}</span>
                </div>
                <div className="post-tags">
                  {post.tags.map((tag) => (
                    <span key={tag} className="post-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h2 className="post-title">{post.title}</h2>
              {selectedPost?.id === post.id ? (
                <div className="post-expanded">
                  {post.images && post.images.length > 0 && (
                    <div className="post-images">
                      {(showAllImages[post.id]
                        ? post.images
                        : post.images.slice(0, 3)
                      ).map((image, index) => (
                        <div
                          key={index}
                          className="post-image-wrapper"
                          onClick={(e) => {
                            e.stopPropagation();
                            setGalleryView({
                              open: true,
                              images: post.images,
                              currentIndex: index,
                            });
                          }}
                        >
                          <img
                            src={image}
                            alt={`${post.title} - Image ${index + 1}`}
                            className="post-image"
                          />
                          <div className="image-overlay">
                            <span className="image-number">
                              {index + 1} / {post.images.length}
                            </span>
                          </div>
                        </div>
                      ))}
                      {post.images.length > 3 && !showAllImages[post.id] && (
                        <div
                          className="see-more-images"
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowAllImages({
                              ...showAllImages,
                              [post.id]: true,
                            });
                          }}
                        >
                          <span className="see-more-text">
                            +{post.images.length - 3} more
                          </span>
                          <span className="see-more-hint">
                            // Click to view all
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                  <div className="post-code">
                    {typeof post.content === "string" ? (
                      <pre className="code-pre">{post.content}</pre>
                    ) : (
                      post.content
                    )}
                  </div>
                  <div className="post-reflection">
                    <h3 className="reflection-title">// Reflection</h3>
                    <p className="reflection-text">{post.reflection}</p>
                  </div>
                </div>
              ) : (
                <p className="post-preview">// Click to read full post...</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="blog-footer">
        <div className="code-block-large">
          <pre className="code-pre">
            <span className="code-comment">// More posts coming soon...</span>
            {"\n"}
            <span className="code-keyword">const</span>{" "}
            <span className="code-variable">upcomingPosts</span>{" "}
            <span className="code-operator">=</span>{" "}
            <span className="code-bracket">{"{"}</span>
            {"\n"}
            {"  "}
            <span className="code-variable">status</span>
            <span className="code-operator">:</span>{" "}
            <span className="code-string">"in_progress"</span>
            <span className="code-operator">,</span>
            {"\n"}
            {"  "}
            <span className="code-variable">frequency</span>
            <span className="code-operator">:</span>{" "}
            <span className="code-string">"weekly"</span>
            <span className="code-operator">,</span>
            {"\n"}
            {"  "}
            <span className="code-variable">nextUpdate</span>
            <span className="code-operator">:</span>{" "}
            <span className="code-string">"As practicum progresses"</span>
            {"\n"}
            <span className="code-bracket">{"}"}</span>
          </pre>
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
                    setGalleryView({ ...galleryView, currentIndex: index })
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

export default Blog;
