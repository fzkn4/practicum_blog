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

  // Keyboard navigation for gallery + post modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (galleryView.open) {
          setGalleryView({ ...galleryView, open: false });
        } else if (selectedPost) {
          setSelectedPost(null);
        }
      } else if (galleryView.open) {
        if (e.key === "ArrowLeft") {
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
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [galleryView, selectedPost]);

  // Lock body scroll when post modal or gallery is open
  useEffect(() => {
    if (selectedPost || galleryView.open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedPost, galleryView.open]);

  blogPosts.push({
    id: 3,
    week: "Week 2",
    date: "Jan 5 - Jan 9, 2026",
    title: "Building Three Essential Systems for PICTMU",
    tags: ["development", "systems", "pnp", "productivity"],
    images: [
      "/week2_1.jpg",
      "/week2_2.jpg",
      "/week2_3.jpg",
      "/week2_4.jpg",
      "/week2_5.jpg",
      "/week2_6.jpg",
      "/week2_7.jpg",
      "/week2_8.jpg",
      "/week2_9.jpg",
      "/week2_10.jpg",
    ],
    content: (
      <pre className="code-pre">
        <span className="code-comment">
          // Week 2: System Development at Provincial PNP - PICTMU Office
        </span>
        {"\n"}
        {"\n"}
        <span className="code-keyword">const</span>{" "}
        <span className="code-variable">week2</span>{" "}
        <span className="code-operator">=</span>{" "}
        <span className="code-bracket">{"{"}</span>
        {"\n"}
        {"  "}
        <span className="code-variable">location</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-string">
          "Provincial PNP - PICTMU Office"
        </span>
        <span className="code-operator">,</span>
        {"\n"}
        {"  "}
        <span className="code-variable">systemsDeveloped</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-bracket">[</span>
        {"\n"}
        {"    "}
        <span className="code-bracket">{"{"}</span>
        {"\n"}
        {"      "}
        <span className="code-variable">name</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-string">"e-DR System"</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"      "}
        <span className="code-variable">description</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-string">
          "Electronic Delinquency Report system for actual inspections to every individual, enabling immediate on-the-spot corrections of misdemeanors or minor infractions committed by PNP personnel without need for full blown hearing or summary proceedings"
        </span>
        <span className="code-operator">,</span>
        {"\n"}
        {"      "}
        <span className="code-variable">features</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-bracket">[</span>
        {"\n"}
        {"        "}
        <span className="code-string">
          "Electronic incident logging during inspections"
        </span>
        <span className="code-operator">,</span>
        {"\n"}
        {"        "}
        <span className="code-string">
          "Immediate correction documentation"
        </span>
        <span className="code-operator">,</span>
        {"\n"}
        {"        "}
        <span className="code-string">
          "Minor infraction tracking"
        </span>
        <span className="code-operator">,</span>
        {"\n"}
        {"        "}
        <span className="code-string">
          "Eliminates need for formal hearings"
        </span>
        {"\n"}
        {"      "}
        <span className="code-bracket">]</span>
        {"\n"}
        {"    "}
        <span className="code-bracket">{"}"}</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"    "}
        <span className="code-bracket">{"{"}</span>
        {"\n"}
        {"      "}
        <span className="code-variable">name</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-string">"Gate Security System"</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"      "}
        <span className="code-variable">description</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-string">
          "Automated entrance gate system at PNP entrance that opens and closes via QR code given to registered PNP personnel"
        </span>
        <span className="code-operator">,</span>
        {"\n"}
        {"      "}
        <span className="code-variable">features</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-bracket">[</span>
        {"\n"}
        {"        "}
        <span className="code-string">
          "QR code-based access control"
        </span>
        <span className="code-operator">,</span>
        {"\n"}
        {"        "}
        <span className="code-string">
          "Automated gate operation"
        </span>
        <span className="code-operator">,</span>
        {"\n"}
        {"        "}
        <span className="code-string">
          "Personnel registration system"
        </span>
        <span className="code-operator">,</span>
        {"\n"}
        {"        "}
        <span className="code-string">
          "Enhanced security verification"
        </span>
        {"\n"}
        {"      "}
        <span className="code-bracket">]</span>
        {"\n"}
        {"    "}
        <span className="code-bracket">{"}"}</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"    "}
        <span className="code-bracket">{"{"}</span>
        {"\n"}
        {"      "}
        <span className="code-variable">name</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-string">
          "Intern Attendance System"
        </span>
        <span className="code-operator">,</span>
        {"\n"}
        {"      "}
        <span className="code-variable">description</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-string">
          "Transparent attendance system tracking the duty hours of interns"
        </span>
        <span className="code-operator">,</span>
        {"\n"}
        {"      "}
        <span className="code-variable">features</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-bracket">[</span>
        {"\n"}
        {"        "}
        <span className="code-string">
          "Transparent hour tracking"
        </span>
        <span className="code-operator">,</span>
        {"\n"}
        {"        "}
        <span className="code-string">
          "Duty hour monitoring"
        </span>
        <span className="code-operator">,</span>
        {"\n"}
        {"        "}
        <span className="code-string">
          "Accurate time recording"
        </span>
        <span className="code-operator">,</span>
        {"\n"}
        {"        "}
        <span className="code-string">
          "Clear attendance documentation"
        </span>
        {"\n"}
        {"      "}
        <span className="code-bracket">]</span>
        {"\n"}
        {"    "}
        <span className="code-bracket">{"}"}</span>
        {"\n"}
        {"  "}
        <span className="code-bracket">]</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"  "}
        <span className="code-variable">techStack</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-bracket">[</span>
        {"\n"}
        {"    "}
        <span className="code-string">"Web development"</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"    "}
        <span className="code-string">"Database management"</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"    "}
        <span className="code-string">"UI/UX design"</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"    "}
        <span className="code-string">"Security implementation"</span>
        {"\n"}
        {"  "}
        <span className="code-bracket">]</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"  "}
        <span className="code-variable">impact</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-string">
          "Streamlined operations, improved security, enhanced efficiency"
        </span>
        <span className="code-operator">,</span>
        {"\n"}
        {"  "}
        <span className="code-variable">status</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-string">"80-90% complete"</span>
        {"\n"}
        <span className="code-bracket">{"}"}</span>
      </pre>
    ),
    reflection: `This week focused on developing three critical systems for the Provincial PNP - PICTMU office, all now 80-90% complete.

      The e-DR system enables electronic documentation of minor infractions during inspections, allowing immediate on-the-spot corrections 
      without formal proceedings. The gate security system automates entrance access via QR codes for registered PNP personnel, replacing 
      manual security checks with efficient automated control. The intern attendance system provides transparent duty hour tracking, ensuring 
      accurate time-in/time-out documentation for supervisors and interns.

      These projects provided hands-on experience with full-stack development, database design, and security implementation. 
      I learned to create user-friendly interfaces with robust backends while addressing real-world public service requirements.`,
  });

  blogPosts.push({
    id: 4,
    week: "Week 3",
    date: "Jan 12 - Jan 16, 2026",
    title: "Proposal for a Centralized e-document system",
    tags: ["proposal", "e-document", "automation", "workflow"],
    images: ["/week3_1.png", "/week3_2.jpg"],
    content: (
      <pre className="code-pre">
        <span className="code-comment">
          // Week 3: e-document System Proposal - Centralizing Document Flow
        </span>
        {"\n"}
        {"\n"}
        <span className="code-keyword">const</span>{" "}
        <span className="code-variable">eDocumentSystem</span>{" "}
        <span className="code-operator">=</span>{" "}
        <span className="code-bracket">{"{"}</span>
        {"\n"}
        {"  "}
        <span className="code-variable">objective</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-string">"Centralize flow and process of documents"</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"  "}
        <span className="code-variable">problemSolved</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-string">"Eliminates personal travel between departments for approvals/edits"</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"  "}
        <span className="code-variable">workflow</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-bracket">[</span>
        {"\n"}
        {"    "}
        <span className="code-string">"Digital document submission"</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"    "}
        <span className="code-string">"Inter-departmental digital routing"</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"    "}
        <span className="code-string">"Real-time editing and feedback"</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"    "}
        <span className="code-string">"Final approval by Provincial Director/Head Officer"</span>
        {"\n"}
        {"  "}
        <span className="code-bracket">]</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"  "}
        <span className="code-variable">benefits</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-bracket">[</span>
        {"\n"}
        {"    "}
        <span className="code-string">"Seamless processes"</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"    "}
        <span className="code-string">"Time efficiency"</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"    "}
        <span className="code-string">"Audit trails"</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"    "}
        <span className="code-string">"Reduced paper waste"</span>
        {"\n"}
        {"  "}
        <span className="code-bracket">]</span>
        {"\n"}
        <span className="code-bracket">{"}"}</span>
      </pre>
    ),
    reflection: `This week was dedicated to proposing the e-document system, a significant step towards digitizing the administrative 
      workflow. The core idea is to centralize the entire document lifecycle—from creation to final approval—within a single digital platform. 
      By doing so, we aim to eliminate the need for personnel to manually carry physical documents between departments for signatures and revisions.

      The system will allow departments to collaborate on documents in real-time, providing feedback and making edits digitally. 
      The final approval step is reserved for the Provincial Director or head officer, ensuring that the process remains secure and formal 
      while significantly reducing the turnaround time. This project highlights the importance of process automation in improving 
      organizational efficiency and transparency.`,
  });

  blogPosts.push({
    id: 5,
    week: "Week 4",
    date: "Jan 19 - Jan 23, 2026",
    title: "Technical Support and Continued Development",
    tags: ["troubleshooting", "systems", "development", "pnp"],
    images: ["/week4_1.jpg", "/week4_2.jpg", "/week4_3.jpg"],
    content: (
      <pre className="code-pre">
        <span className="code-comment">
          // Week 4: Technical Troubleshooting and System Development
        </span>
        {"\n"}
        {"\n"}
        <span className="code-keyword">const</span>{" "}
        <span className="code-variable">week4</span>{" "}
        <span className="code-operator">=</span>{" "}
        <span className="code-bracket">{"{"}</span>
        {"\n"}
        {"  "}
        <span className="code-variable">activities</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-bracket">[</span>
        {"\n"}
        {"    "}
        <span className="code-string">"Troubleshooting PNP personnel's laptop"</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"    "}
        <span className="code-string">"Continued system development"</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"    "}
        <span className="code-string">"Feature refinement for current projects"</span>
        {"\n"}
        {"  "}
        <span className="code-bracket">]</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"  "}
        <span className="code-variable">focus</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-string">"Maintenance and Progress"</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"  "}
        <span className="code-variable">status</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-string">"ongoing"</span>
        {"\n"}
        <span className="code-bracket">{"}"}</span>
      </pre>
    ),
    reflection: `This week was a mix of hands-on technical support and focused development. 
      I assisted a PNP personnel with troubleshooting their laptop, which provided 
      a practical look at the hardware and software issues encountered in the office. 
      The rest of the week was dedicated to continuing the development of our systems, 
      ensuring that we stay on track with our project goals and refine the features 
      based on the needs we've identified so far.`,
  });

  blogPosts.push({
    id: 6,
    week: "Week 5",
    date: "Jan 26 - Jan 30, 2026",
    title: "Technical Assistance: PNP One Stop Shop Event",
    tags: ["event", "technical-support", "pnp", "zsppo"],
    images: ["/week5_1.jpg", "/week5_2.jpg"],
    content: (
      <pre className="code-pre">
        <span className="code-comment">
          // Week 5: Technical Assistance for PNP One Stop Shop
        </span>
        {"\n"}
        {"\n"}
        <span className="code-keyword">const</span>{" "}
        <span className="code-variable">week5</span>{" "}
        <span className="code-operator">=</span>{" "}
        <span className="code-bracket">{"{"}</span>
        {"\n"}
        {"  "}
        <span className="code-variable">event</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-string">"PNP One Stop Shop"</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"  "}
        <span className="code-variable">role</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-string">"Technical Assistants"</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"  "}
        <span className="code-variable">tasks</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-bracket">[</span>
        {"\n"}
        {"    "}
        <span className="code-string">"Event preparation and setup"</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"    "}
        <span className="code-string">"Technical maintenance during event"</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"    "}
        <span className="code-string">"Ensuring smooth technical operations"</span>
        {"\n"}
        {"  "}
        <span className="code-bracket">]</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"  "}
        <span className="code-variable">recipient</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-string">"ZSPPO"</span>
        {"\n"}
        <span className="code-bracket">{"}"}</span>
      </pre>
    ),
    reflection: `This week was centered around the PNP One Stop Shop event. We were assigned 
      as technical assistants to the ZSPPO, supporting them from the initial preparation 
      phase through to the conclusion of the event. Our primary responsibility was 
      ensuring that all technical aspects remained functional and that the operations 
      ran smoothly as various agencies offered their services on the PNP premises. 
      It was a valuable experience in event-driven technical support and teamwork.`,
  });

  blogPosts.push({
    id: 7,
    week: "Week 6",
    date: "Feb 2 - Feb 6, 2026",
    title: "Design and Preparation: ZSPPO Event Tarpaulin",
    tags: ["design", "preparation", "tarpaulin", "zsppo"],
    images: ["/week6_1.jpeg", "/week6_2.jpg"],
    content: (
      <pre className="code-pre">
        <span className="code-comment">
          // Week 6: Tarpaulin Design and Preparation for ZSPPO
        </span>
        {"\n"}
        {"\n"}
        <span className="code-keyword">const</span>{" "}
        <span className="code-variable">week6</span>{" "}
        <span className="code-operator">=</span>{" "}
        <span className="code-bracket">{"{"}</span>
        {"\n"}
        {"  "}
        <span className="code-variable">task</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-string">"Tarpaulin Design"</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"  "}
        <span className="code-variable">client</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-string">"ZSPPO"</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"  "}
        <span className="code-variable">tools</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-bracket">[</span>
        {"\n"}
        {"    "}
        <span className="code-string">"Graphic design software"</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"    "}
        <span className="code-string">"Visual communication principles"</span>
        {"\n"}
        {"  "}
        <span className="code-bracket">]</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"  "}
        <span className="code-variable">outcome</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-string">"Event tarpaulin ready for printing"</span>
        {"\n"}
        <span className="code-bracket">{"}"}</span>
      </pre>
    ),
    reflection: `During this week, we shifted our focus towards graphic design tasks. 
      We were tasked with designing and preparing a tarpaulin for an upcoming event 
      organized by the ZSPPO. This involved using design software to create a 
      visually appealing layout that met the event's requirements. It was a good 
      opportunity to apply our creative skills and contribute to the organizational 
      needs of our placement office in a different capacity.`,
  });

  blogPosts.push({
    id: 8,
    week: "Week 7",
    date: "Feb 9 - Feb 13, 2026",
    title: "Network Maintenance and Hardware Troubleshooting",
    tags: ["networking", "maintenance", "troubleshooting", "hardware"],
    images: ["/week7_1.jpg", "/week7_2.jpg", "/week7_3.jpg"],
    content: (
      <pre className="code-pre">
        <span className="code-comment">
          // Week 7: Network Maintenance and Technical Support
        </span>
        {"\n"}
        {"\n"}
        <span className="code-keyword">const</span>{" "}
        <span className="code-variable">week7</span>{" "}
        <span className="code-operator">=</span>{" "}
        <span className="code-bracket">{"{"}</span>
        {"\n"}
        {"  "}
        <span className="code-variable">location</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-string">"ZSPPO Premises"</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"  "}
        <span className="code-variable">projects</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-bracket">[</span>
        {"\n"}
        {"    "}
        <span className="code-bracket">{"{"}</span>
        {"\n"}
        {"      "}
        <span className="code-variable">type</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-string">"Network Maintenance"</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"      "}
        <span className="code-variable">scope</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-string">"3 Buildings inside ZSPPO"</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"      "}
        <span className="code-variable">objective</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-string">"Resolve poor internet connection"</span>
        {"\n"}
        {"    "}
        <span className="code-bracket">{"}"}</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"    "}
        <span className="code-bracket">{"{"}</span>
        {"\n"}
        {"      "}
        <span className="code-variable">type</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-string">"Hardware Troubleshooting"</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"      "}
        <span className="code-variable">target</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-string">"OCPD's Office Computer"</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"      "}
        <span className="code-variable">status</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-string">"successfully_fixed"</span>
        {"\n"}
        {"    "}
        <span className="code-bracket">{"}"}</span>
        {"\n"}
        {"  "}
        <span className="code-bracket">]</span>
        {"\n"}
        <span className="code-bracket">{"}"}</span>
      </pre>
    ),
    reflection: `This week was physically active, as we assisted PNP personnel with network 
      maintenance across three different buildings within the ZSPPO premises. The goal 
      was to address the poor internet connectivity that was hindering office efficiency. 
      Additionally, I was tasked with troubleshooting a specific issue on the OCPD's 
      office computer. After diagnosing the problem and applying the necessary fixes, 
      I successfully restored the computer to full functionality. These hands-on 
      tasks provided great experience in both infrastructure maintenance and 
      individual workstation support.`,
  });

  blogPosts.push({
    id: 9,
    week: "Week 8",
    date: "Feb 16 - Feb 20, 2026",
    title: "System Development and Office Atmosphere",
    tags: ["development", "systems", "productivity", "pnp"],
    images: ["/week8_1.jpg", "/week8_2.jpg"],
    content: (
      <pre className="code-pre">
        <span className="code-comment">
          // Week 8: Focused System Development Amidst Office Activity
        </span>
        {"\n"}
        {"\n"}
        <span className="code-keyword">const</span>{" "}
        <span className="code-variable">week8</span>{" "}
        <span className="code-operator">=</span>{" "}
        <span className="code-bracket">{"{"}</span>
        {"\n"}
        {"  "}
        <span className="code-variable">focus</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-string">"Continued System Development"</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"  "}
        <span className="code-variable">environment</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-string">"Busy with departmental meetings"</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"  "}
        <span className="code-variable">progress</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-string">"Steady development on current modules"</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"  "}
        <span className="code-variable">status</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-string">"productive_isolation"</span>
        {"\n"}
        <span className="code-bracket">{"}"}</span>
      </pre>
    ),
    reflection: `This week was relatively quiet in terms of external tasks but very 
      productive for our system development. The office was bustling with various 
      departmental meetings held right at our workspace, which created a busy 
      atmosphere. We took this opportunity to double down on our coding tasks, 
      advancing the development of the systems we've been working on. It was a week 
      of steady progress and focused implementation.`,
  });

  blogPosts.push({
    id: 10,
    week: "Week 9",
    date: "Feb 23 - Feb 27, 2026",
    title: "System Presentation and Community Building",
    tags: ["presentation", "demo", "feedback", "pnp", "community"],
    images: [
      "/week9_1.jpg",
      "/week9_2.jpg",
      "/week9_3.jpg",
      "/week9_4.jpg",
      "/week9_5.jpg",
    ],
    content: (
      <pre className="code-pre">
        <span className="code-comment">
          // Week 9: System Demo, Feedback, and PICTMU Celebration
        </span>
        {"\n"}
        {"\n"}
        <span className="code-keyword">const</span>{" "}
        <span className="code-variable">week9</span>{" "}
        <span className="code-operator">=</span>{" "}
        <span className="code-bracket">{"{"}</span>
        {"\n"}
        {"  "}
        <span className="code-variable">milestones</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-bracket">[</span>
        {"\n"}
        {"    "}
        <span className="code-string">"Full functional system demo"</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"    "}
        <span className="code-string">"Gathered user feedback for refinement"</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"    "}
        <span className="code-string">"Participation in spiritual fellowship"</span>
        {"\n"}
        {"  "}
        <span className="code-bracket">]</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"  "}
        <span className="code-variable">celebration</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-string">"Lunch with PICTMU staff"</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"  "}
        <span className="code-variable">status</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-string">"successful_presentation"</span>
        {"\n"}
        <span className="code-bracket">{"}"}</span>
      </pre>
    ),
    reflection: `Week 9 was incredibly eventful and rewarding. We reached a major 
      milestone by finally presenting and demonstrating our fully functional 
      systems to the PNP personnel. This session was crucial for gathering 
      direct feedback, allowing us to further tailor the systems to their 
      specific needs and preferences. Beyond technical work, we had the 
      opportunity to participate in a Bible meeting with a PNP pastor, 
      fostering a deeper connection with the community. We capped off the 
      week with a celebration lunch together with the PICTMU staff, 
      marking the success of our presentation and the hard work we've 
      put in so far.`,
  });

  blogPosts.push({
    id: 11,
    week: "Week 10",
    date: "Mar 2 - Mar 6, 2026",
    title: "Final Refinements and Wrapping Up",
    tags: ["finalization", "refinement", "wrap-up", "pnp", "zsppo"],
    images: ["/week10_1.jpg", "/week10_2.jpg", "/week10_3.jpg"],
    content: (
      <pre className="code-pre">
        <span className="code-comment">
          // Week 10: Final System Refinements and Practicum Conclusion
        </span>
        {"\n"}
        {"\n"}
        <span className="code-keyword">const</span>{" "}
        <span className="code-variable">finalWeek</span>{" "}
        <span className="code-operator">=</span>{" "}
        <span className="code-bracket">{"{"}</span>
        {"\n"}
        {"  "}
        <span className="code-variable">tasks</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-bracket">[</span>
        {"\n"}
        {"    "}
        <span className="code-string">"Minor system modifications"</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"    "}
        <span className="code-string">"Final feedback implementation"</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"    "}
        <span className="code-string">"Documenting and wrapping up projects"</span>
        {"\n"}
        {"  "}
        <span className="code-bracket">]</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"  "}
        <span className="code-variable">location</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-string">"ZSPPO"</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"  "}
        <span className="code-variable">status</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-string">"practicum_completed"</span>
        {"\n"}
        <span className="code-bracket">{"}"}</span>
      </pre>
    ),
    reflection: `This marked our final week at ZSPPO, and it was primarily 
      dedicated to wrapping things up. We focused on implementing minor 
      changes and modifications to the systems based on the final rounds 
      of feedback. It's been a journey of learning and growth, and 
      spending this time at ZSPPO has been both productive and enjoyable. 
      As we conclude our practicum, we're proud of the systems we've 
      developed and the relationships we've built. It's been quite 
      some fun here, and we're grateful for the experience.`,
  });

  blogPosts.push({
    id: 12,
    week: "Turnover",
    date: "Mar 23, 2026",
    title: "System Turnover Ceremony",
    tags: ["turnover", "ceremony", "systems", "zsppo", "milestone"],
    images: [
      "/turnover_1.jpg",
      "/turnover_2.jpg",
      "/turnover_3.jpg",
      "/turnover_4.jpg",
      "/turnover_5.jpg",
      "/turnover_6.jpg",
      "/turnover_7.jpg",
    ],
    content: (
      <pre className="code-pre">
        <span className="code-comment">
          // Official System Turnover Ceremony
        </span>
        {"\n"}
        {"\n"}
        <span className="code-keyword">const</span>{" "}
        <span className="code-variable">systemTurnover</span>{" "}
        <span className="code-operator">=</span>{" "}
        <span className="code-bracket">{"{"}</span>
        {"\n"}
        {"  "}
        <span className="code-variable">systems</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-bracket">[</span>
        {"\n"}
        {"    "}
        <span className="code-string">"Gate Security System"</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"    "}
        <span className="code-string">"E-Document System"</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"    "}
        <span className="code-string">"FitWatch"</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"    "}
        <span className="code-string">"E-DR System"</span>
        {"\n"}
        {"  "}
        <span className="code-bracket">]</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"  "}
        <span className="code-variable">recipient</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-string">"ZSPPO"</span>
        <span className="code-operator">,</span>
        {"\n"}
        {"  "}
        <span className="code-variable">status</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-string">"officially_turned_over"</span>
        {"\n"}
        <span className="code-bracket">{"}"}</span>
      </pre>
    ),
    reflection: `This was the official turnover ceremony of the 4 systems that we 
      developed for the ZSPPO during our OJT: the Gate Security System, 
      E-Document System, FitWatch, and E-DR System. It was a proud moment 
      seeing the fruits of our hard work formally handed over and accepted 
      by the personnel. This ceremony marked the culmination of weeks of 
      development, testing, and refinement. We're grateful for the 
      opportunity to have contributed tangible tools that will serve the 
      ZSPPO moving forward.`,
  });

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
            <span className="stat-value">10</span>
            <span className="stat-label">weeks</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{blogPosts.length}</span>
            <span className="stat-label">posts</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">Done</span>
            <span className="stat-label">status</span>
          </div>
        </div>
      </section>

      <section className="blog-content">
        {/* Progress Bar */}
        <div className="level-progress" aria-label="OJT progress: 10 of 10 levels completed">
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className="progress-segment" />
          ))}
          <span className="progress-label">10/10</span>
        </div>

        {/* Timeline */}
        <div className="blog-timeline">
          {blogPosts.map((post, index) => {
            const isLeft = index % 2 === 0;
            const levelNum = String(index + 1).padStart(2, "0");

            return (
              <div
                key={post.id}
                className={`level-row ${isLeft ? "level-row--left" : "level-row--right"}`}
              >
                {/* Card area */}
                <div className="level-card-area">
                  <div
                    className="level-card"
                    onClick={() => setSelectedPost(post)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Level ${levelNum}: ${post.title}`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedPost(post);
                      }
                    }}
                  >
                    <div className="level-card-header">
                      <div className="level-card-meta">
                        <span className="level-card-week">{post.week}</span>
                        <span className="level-card-date">{post.date}</span>
                      </div>
                      <div className="post-tags">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="post-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <h2 className="level-card-title">{post.title}</h2>
                    <p className="level-card-preview">
                      // Click to view details...
                    </p>
                  </div>
                </div>

                {/* Center node */}
                <div className="level-node-area">
                  <div
                    className={`level-node ${selectedPost?.id === post.id ? "active" : ""}`}
                    onClick={() => setSelectedPost(post)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Open level ${levelNum}`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedPost(post);
                      }
                    }}
                  >
                    <span className="level-number">{levelNum}</span>
                  </div>
                  <span className="level-status" aria-hidden="true">
                    clear
                  </span>
                </div>

                {/* Empty spacer for the other side */}
                <div className="level-card-area" />
              </div>
            );
          })}

          {/* ===== Finish Line ===== */}
          <div className="finish-line">
            <div className="finish-line-track">
              <div className="finish-checker" />
              <div className="finish-checker" />
              <div className="finish-checker" />
              <div className="finish-checker" />
              <div className="finish-checker" />
              <div className="finish-checker" />
              <div className="finish-checker" />
              <div className="finish-checker" />
            </div>
            <div className="finish-badge">
              <span className="finish-icon" aria-hidden="true">🏆</span>
              <span className="finish-text">QUEST COMPLETE</span>
              <span className="finish-sub">
                // return &quot;Mission Accomplished&quot;;
              </span>
            </div>
            <div className="finish-line-track">
              <div className="finish-checker" />
              <div className="finish-checker" />
              <div className="finish-checker" />
              <div className="finish-checker" />
              <div className="finish-checker" />
              <div className="finish-checker" />
              <div className="finish-checker" />
              <div className="finish-checker" />
            </div>
          </div>
        </div>
      </section>

      <section className="blog-footer">
        <div className="code-block-large">
          <pre className="code-pre">
            <span className="code-comment">// OJT Journey completed successfully</span>
            {"\n"}
            <span className="code-keyword">const</span>{" "}
            <span className="code-variable">ojtExperience</span>{" "}
            <span className="code-operator">=</span>{" "}
            <span className="code-bracket">{"{"}</span>
            {"\n"}
            {"  "}
            <span className="code-variable">status</span>
            <span className="code-operator">:</span>{" "}
            <span className="code-string">"completed"</span>
            <span className="code-operator">,</span>
            {"\n"}
            {"  "}
            <span className="code-variable">totalWeeks</span>
            <span className="code-operator">:</span>{" "}
            <span className="code-string">"10 Weeks"</span>
            <span className="code-operator">,</span>
            {"\n"}
            {"  "}
            <span className="code-variable">location</span>
            <span className="code-operator">:</span>{" "}
            <span className="code-string">"ZSPPO - PICTMU"</span>
            <span className="code-operator">,</span>
            {"\n"}
            {"  "}
            <span className="code-variable">outcome</span>
            <span className="code-operator">:</span>{" "}
            <span className="code-string">"Mission Accomplished"</span>
            {"\n"}
            <span className="code-bracket">{"}"}</span>
          </pre>
        </div>
      </section>

      {/* ===== Post Detail Modal ===== */}
      {selectedPost && (
        <div
          className="post-modal-overlay"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="post-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={selectedPost.title}
          >
            <button
              className="post-modal-close"
              onClick={() => setSelectedPost(null)}
              aria-label="Close post"
            >
              ×
            </button>

            <div className="post-modal-header">
              <div className="post-modal-meta">
                <span className="post-modal-badge">
                  LVL{" "}
                  {String(
                    blogPosts.findIndex((p) => p.id === selectedPost.id) + 1
                  ).padStart(2, "0")}
                </span>
                <span className="post-modal-week">{selectedPost.week}</span>
                <span className="post-modal-date">{selectedPost.date}</span>
              </div>
              <div className="post-tags">
                {selectedPost.tags.map((tag) => (
                  <span key={tag} className="post-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <h2 className="post-modal-title">{selectedPost.title}</h2>

            {/* Images */}
            {selectedPost.images && selectedPost.images.length > 0 && (
              <div className="post-images">
                {(showAllImages[selectedPost.id]
                  ? selectedPost.images
                  : selectedPost.images.slice(0, 3)
                ).map((image, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="post-image-wrapper"
                    onClick={() => {
                      setGalleryView({
                        open: true,
                        images: selectedPost.images,
                        currentIndex: imgIndex,
                      });
                    }}
                  >
                    <img
                      src={image}
                      alt={`${selectedPost.title} - Image ${imgIndex + 1}`}
                      className="post-image"
                    />
                    <div className="image-overlay">
                      <span className="image-number">
                        {imgIndex + 1} / {selectedPost.images.length}
                      </span>
                    </div>
                  </div>
                ))}
                {selectedPost.images.length > 3 &&
                  !showAllImages[selectedPost.id] && (
                    <div
                      className="see-more-images"
                      onClick={() => {
                        setShowAllImages({
                          ...showAllImages,
                          [selectedPost.id]: true,
                        });
                      }}
                    >
                      <span className="see-more-text">
                        +{selectedPost.images.length - 3} more
                      </span>
                      <span className="see-more-hint">
                        // Click to view all
                      </span>
                    </div>
                  )}
              </div>
            )}

            {/* Code content */}
            <div className="post-code">
              {typeof selectedPost.content === "string" ? (
                <pre className="code-pre">{selectedPost.content}</pre>
              ) : (
                selectedPost.content
              )}
            </div>

            {/* Reflection */}
            <div className="post-reflection">
              <h3 className="reflection-title">// Reflection</h3>
              <p className="reflection-text">{selectedPost.reflection}</p>
            </div>
          </div>
        </div>
      )}

      {/* ===== Image Gallery Modal ===== */}
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
