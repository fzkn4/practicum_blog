import React from "react";
import Icon from "./Icon";

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <div className="code-block">
            <span className="code-keyword">const</span>{" "}
            <span className="code-variable">practicum</span> ={" "}
            <span className="code-function">async</span>{" "}
            <span className="code-operator">()</span> {"=>"}{" "}
            <span className="code-bracket">{"{"}</span>
          </div>
          <h1 className="hero-title">
            <span className="code-syntax" style={{ color: "#a3e635" }}>
              &lt;
            </span>
            <span className="title-main">practicum.blog</span>
            <span className="code-syntax" style={{ color: "#a3e635" }}>
              /&gt;
            </span>
          </h1>
          <p className="hero-subtitle">
            // Building skills, documenting growth, one commit at a time
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-value">8+</span>
              <span className="stat-label">weeks</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">Dec 8</span>
              <span className="stat-label">started</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">∞</span>
              <span className="stat-label">learning</span>
            </div>
          </div>
          <div className="hero-cta">
            <button className="cta-button">
              <span className="code-keyword">scroll</span>{" "}
              <span className="code-operator">()</span> {"=>"}{" "}
              <span className="code-string">'explore'</span>
            </button>
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="section-header">
          <span className="section-number">01</span>
          <span className="section-label">// about</span>
        </div>
        <div className="intro-content">
          <div className="code-block-large">
            <pre className="code-pre">
              <span className="code-comment">/**</span>
              {"\n"}
              <span className="code-comment">
                {" "}
                * @description Practicum OJT Blog
              </span>
              {"\n"}
              <span className="code-comment">
                {" "}
                * @author Jhon Anthony B. Tomogsok
              </span>
              {"\n"}
              <span className="code-comment"> * @since 12-8-2025</span>
              {"\n"}
              <span className="code-comment"> */</span>
              {"\n"}
              {"\n"}
              <span className="code-keyword">const</span>{" "}
              <span className="code-variable">blog</span>{" "}
              <span className="code-operator">=</span>{" "}
              <span className="code-bracket">{"{"}</span>
              {"\n"}
              {"  "}
              <span className="code-variable">purpose</span>
              <span className="code-operator">:</span>{" "}
              <span className="code-string">
                "Document my journey through the practicum"
              </span>
              <span className="code-operator">,</span>
              {"\n"}
              {"  "}
              <span className="code-variable">focus</span>
              <span className="code-operator">:</span>{" "}
              <span className="code-bracket">[</span>
              <span className="code-string">"Learning"</span>
              <span className="code-operator">,</span>{" "}
              <span className="code-string">"Growth"</span>
              <span className="code-operator">,</span>{" "}
              <span className="code-string">"Reflection"</span>
              <span className="code-operator">,</span>{" "}
              <span className="code-string">"Documentation"</span>
              <span className="code-bracket">]</span>
              <span className="code-operator">,</span>
              {"\n"}
              {"  "}
              <span className="code-variable">approach</span>
              <span className="code-operator">:</span>{" "}
              <span className="code-string">
                "Weekly updates and reflections"
              </span>
              <span className="code-operator">,</span>
              {"\n"}
              {"  "}
              <span className="code-variable">status</span>
              <span className="code-operator">:</span>{" "}
              <span className="code-string">"in_progress"</span>
              {"\n"}
              <span className="code-bracket">{"}"}</span>
            </pre>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="section-header">
          <span className="section-number">02</span>
          <span className="section-label">// sections</span>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <Icon name="profile" size={48} color="#a3e635" />
            </div>
            <h3 className="feature-title">Profile</h3>
            <p className="feature-desc">// Personal profile and background</p>
            <span className="feature-tag">personal</span>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <Icon name="book" size={48} color="#a3e635" />
            </div>
            <h3 className="feature-title">Preparation</h3>
            <p className="feature-desc">
              // How I prepared for this practicum journey
            </p>
            <span className="feature-tag">preparation</span>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <Icon name="blog" size={48} color="#a3e635" />
            </div>
            <h3 className="feature-title">Blog</h3>
            <p className="feature-desc">// Weekly reflections and learnings</p>
            <span className="feature-tag">updates</span>
          </div>
        </div>
      </section>

      <section className="quote-section">
        <div className="quote-content">
          <p className="quote-text">"𝘝𝘢𝘳𝘪𝘦𝘵𝘺 𝘪𝘴 𝘵𝘩𝘦 𝘴𝘱𝘪𝘤𝘦 𝘰𝘧 𝘭𝘪𝘧𝘦."</p>
          <p className="quote-author">// William Cowper</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
