import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Preparation from "./components/Preparation";
import Blog from "./components/Blog";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const sections = [
    { id: "home", label: "home" },
    { id: "profile", label: "profile" },
    { id: "preparation", label: "preparation" },
    { id: "blog", label: "blog" },
  ];

  return (
    <div className="app">
      <nav className="nav">
        <div className="nav-brand">
          <span className="code-syntax">&lt;</span>
          <span className="brand-name">practicum.blog</span>
          <span className="code-syntax">/&gt;</span>
        </div>
        <div className="nav-links">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`nav-link ${
                activeSection === section.id ? "active" : ""
              }`}
              onClick={() => setActiveSection(section.id)}
            >
              {section.label}
            </button>
          ))}
        </div>
      </nav>

      <main className="main-content">
        {activeSection === "home" && <Home />}
        {activeSection === "profile" && <Profile />}
        {activeSection === "preparation" && <Preparation />}
        {activeSection === "blog" && <Blog />}
      </main>

      <footer className="footer">
        <div className="footer-content">
          <span className="code-comment">// © 2025 practicum.blog</span>
          <span className="code-comment">// Built with Labjoyhoop</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
