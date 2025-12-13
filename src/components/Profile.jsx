import React from "react";

const Profile = () => {
  return (
    <div className="profile">
      <section className="profile-hero">
        <div className="section-header">
          <span className="section-number">01</span>
          <span className="section-label">// profile</span>
        </div>
        <div className="profile-header">
          <div className="profile-avatar">
            <img
              src="/profile_pic.jpg"
              alt="Jhon Anthony B. Tomogsok"
              className="avatar-image"
            />
          </div>
          <div className="profile-info">
            <h1 className="profile-name">Jhon Anthony B. Tomogsok</h1>
            <p className="profile-title">
              // Fourth-Year B.S. Computer Science Student
            </p>
            <div className="profile-links">
              <a
                href="https://facebook.com/fzkn4"
                className="profile-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                facebook
              </a>
              <span className="code-operator">|</span>
              <a
                href="https://github.com/fzkn4"
                className="profile-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </a>
              <span className="code-operator">|</span>
              <a
                href="https://www.linkedin.com/in/fzkn4/"
                className="profile-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin
              </a>
              <span className="code-operator">|</span>
              <a href="#" className="profile-link">
                tomogsokin@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="profile-content">
        <div className="content-section">
          <h2 className="section-title">
            <span className="code-keyword">const</span>{" "}
            <span className="code-variable">aboutMe</span> ={" "}
            <span className="code-bracket">{"{"}</span>
          </h2>
          <div className="code-block-content">
            <pre className="code-pre">
              <span className="code-bracket">{"{"}</span>
              {"\n"}
              {"  "}
              <span className="code-variable">name</span>
              <span className="code-operator">:</span>{" "}
              <span className="code-string">"Jhon Anthony B. Tomogsok"</span>
              <span className="code-operator">,</span>
              {"\n"}
              {"  "}
              <span className="code-variable">location</span>
              <span className="code-operator">:</span>{" "}
              <span className="code-string">
                "Pagadian City, Zamboanga del Sur, Philippines"
              </span>
              <span className="code-operator">,</span>
              {"\n"}
              {"  "}
              <span className="code-variable">education</span>
              <span className="code-operator">:</span>{" "}
              <span className="code-string">
                "Bachelor of Science in Computer Science at Saint Columban
                College"
              </span>
              <span className="code-operator">,</span>
              {"\n"}
              {"\n"}
              {"  "}
              <span className="code-variable">phone</span>
              <span className="code-operator">:</span>{" "}
              <span className="code-string">"09650389562"</span>
              <span className="code-operator">,</span>
              {"\n"}
              {"  "}
              <span className="code-variable">email</span>
              <span className="code-operator">:</span>{" "}
              <span className="code-string">"tomogsokin@gmail.com"</span>
              <span className="code-operator">,</span>
              {"\n"}
              {"  "}
              <span className="code-variable">summary</span>
              <span className="code-operator">:</span>{" "}
              <span className="code-string">
                "Motivated and hardworking fourth-year B.S. in Computer Science
                student seeking to apply academic knowledge in software
                development, networking, and ICT support in a professional
                environment. Dedicated to continuous learning, collaborating
                effectively with teams, and delivering reliable, high-quality
                work."
              </span>
              <span className="code-operator">,</span>
              {"\n"}
              {"  "}
              <span className="code-variable">interests</span>
              <span className="code-operator">:</span>{" "}
              <span className="code-bracket">[</span>
              {"\n"}
              {"    "}
              <span className="code-string">"Software Development"</span>
              <span className="code-operator">,</span>
              {"\n"}
              {"    "}
              <span className="code-string">"Networking"</span>
              <span className="code-operator">,</span>
              {"\n"}
              {"    "}
              <span className="code-string">"ICT Support"</span>
              <span className="code-operator">,</span>
              {"\n"}
              {"    "}
              <span className="code-string">"Cyber Security"</span>
              {"\n"}
              {"  "}
              <span className="code-bracket">]</span>
              <span className="code-operator">,</span>
              {"\n"}
              {"  "}
              <span className="code-variable">currentFocus</span>
              <span className="code-operator">:</span>{" "}
              <span className="code-string">"Practicum Program"</span>
              <span className="code-operator">,</span>
              {"\n"}
              {"  "}
              <span className="code-variable">status</span>
              <span className="code-operator">:</span>{" "}
              <span className="code-string">"actively_learning"</span>
              {"\n"}
              <span className="code-bracket">{"}"}</span>
            </pre>
          </div>
        </div>

        <div className="content-section">
          <h2 className="section-title">
            <span className="code-keyword">const</span>{" "}
            <span className="code-variable">experience</span> ={" "}
            <span className="code-bracket">[</span>
          </h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Freelance Developer</h3>
                <p className="timeline-org">Self-Employed</p>
                <p className="timeline-date">2023 - 2025</p>
                <p className="timeline-desc">
                  * Developed full-stack web and mobile applications using
                  multiple programming languages
                  <br />
                  * Built Real-time Emotion Detection Multimodal model via
                  Facial and Heart rate
                  <br />
                  * Implemented intelligent response and micro-insurance web
                  applications with Python Flask
                  <br />
                  * Developed a Real-time Pest detection using YOLOV8n on a
                  Raspberry Pi and Esp32-cam
                  <br />
                  * Created responsive web applications with AI-powered features
                  and real-time database sync
                  <br />* MDRRMO Disaster Response System - Geotagged
                  photo-based incident reporting system
                </p>
              </div>
            </div>
          </div>
          <span className="code-bracket">];</span>
        </div>

        <div className="content-section">
          <h2 className="section-title">
            <span className="code-keyword">const</span>{" "}
            <span className="code-variable">skills</span> ={" "}
            <span className="code-bracket">[</span>
          </h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3 className="skill-category-title">Languages</h3>
              <div className="skill-tags">
                <span className="skill-tag">Kotlin</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">C#</span>
                <span className="skill-tag">C</span>
              </div>
            </div>
            <div className="skill-category">
              <h3 className="skill-category-title">Frameworks & Tools</h3>
              <div className="skill-tags">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Flask</span>
                <span className="skill-tag">Jetpack Compose</span>
                <span className="skill-tag">Firebase</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express</span>
              </div>
            </div>
            <div className="skill-category">
              <h3 className="skill-category-title">Technologies & Skills</h3>
              <div className="skill-tags">
                <span className="skill-tag">Cyber Security</span>
                <span className="skill-tag">AI/ML</span>
                <span className="skill-tag">Embedded Systems</span>
                <span className="skill-tag">Geotagging</span>
                <span className="skill-tag">Mobile Development</span>
                <span className="skill-tag">SMTP</span>
                <span className="skill-tag">Linux</span>
              </div>
            </div>
          </div>
          <span className="code-bracket">];</span>
        </div>

        <div className="content-section">
          <h2 className="section-title">
            <span className="code-keyword">const</span>{" "}
            <span className="code-variable">education</span> ={" "}
            <span className="code-bracket">[</span>
          </h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="timeline-org">Saint Columban College</p>
                <p className="timeline-date">2022 - 2026</p>
                <p className="timeline-desc">
                  Pagadian City, Zamboanga del Sur
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Senior High School</h3>
                <p className="timeline-org">
                  Misamis Occidental National High School
                </p>
                <p className="timeline-date">2018 - 2019</p>
                <p className="timeline-desc">
                  Oroquieta City, Misamis Occidental
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">High School</h3>
                <p className="timeline-org">
                  Misamis Occidental National High School
                </p>
                <p className="timeline-date">2014 - 2018</p>
                <p className="timeline-desc">
                  Oroquieta City, Misamis Occidental
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Elementary</h3>
                <p className="timeline-org">
                  San Vicente Flores Memorial Elementary School
                </p>
                <p className="timeline-date">2013 - 2014</p>
                <p className="timeline-desc">
                  Oroquieta City, Misamis Occidental
                </p>
              </div>
            </div>
          </div>
          <span className="code-bracket">];</span>
        </div>

        <div className="content-section">
          <h2 className="section-title">
            <span className="code-keyword">const</span>{" "}
            <span className="code-variable">achievements</span> ={" "}
            <span className="code-bracket">[</span>
          </h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Cyber Exercise PA 2025</h3>
                <p className="timeline-org">1st Place</p>
                <p className="timeline-date">2025</p>
                <p className="timeline-desc">
                  // Achieved 1st Place in the 2025 Cyber Exercise PA conducted
                  online
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Provincial Hack4Gov 2025</h3>
                <p className="timeline-org">Overall Champion</p>
                <p className="timeline-date">2025</p>
                <p className="timeline-desc">
                  // Won the Provincial Hack4Gov 2025, emerging as the
                  competition's overall champion
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Regional Hack4Gov 2025</h3>
                <p className="timeline-org">9th Place</p>
                <p className="timeline-date">2025</p>
                <p className="timeline-desc">
                  // Achieved 9th place in the Regional Hack4Gov event hosted in
                  Zamboanga City
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">IT Diagnostic Level 1</h3>
                <p className="timeline-org">Passer</p>
                <p className="timeline-date">2025</p>
                <p className="timeline-desc">
                  Pagadian City, Zamboanga del Sur
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Level 1 PhilNITS</h3>
                <p className="timeline-org">
                  Philippine National IT Standards Exam Passer
                </p>
                <p className="timeline-date">2025</p>
                <p className="timeline-desc">
                  Pagadian City, Zamboanga del Sur
                </p>
              </div>
            </div>
          </div>
          <span className="code-bracket">];</span>
        </div>
      </section>
    </div>
  );
};

export default Profile;
