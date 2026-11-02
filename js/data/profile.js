/**
 * Profile data — taken from the LinkedIn profile and approved portfolio plan only.
 * Nothing here should claim more than those sources support.
 */
(function () {
  var data = window.PortfolioData = window.PortfolioData || {};

  data.profile = {
    rotatingWords: ["web applications", "backend systems", "AI/ML projects", "useful products"]
  };

  data.services = [
    { icon: "web", title: "Web applications", text: "Directories, booking tools, e-commerce, rentals and business websites with responsive, user-friendly interfaces." },
    { icon: "server", title: "Backend systems", text: "Server-side logic with Node.js and Flask, CRUD workflows, and record and communication management." },
    { icon: "brain", title: "AI & machine learning", text: "A Random Forest case-matching model, AI-powered legal directory features and data analytics learning." },
    { icon: "eye", title: "Computer vision & automation", text: "Webcam hand-gesture control and motion detection that triggers automated responses." }
  ];

  // Technical expertise. "featured" marks skills LinkedIn lists as Top Skills.
  data.skills = [
    { title: "Frontend Development", items: [
      { name: "HTML" }, { name: "CSS" }, { name: "JavaScript", featured: true }, { name: "Bootstrap", featured: true }, { name: "React" }, { name: "Responsive design" }
    ]},
    { title: "Backend Development", items: [
      { name: "Node.js", featured: true }, { name: "Flask" }, { name: "Server-side programming" }
    ]},
    { title: "Programming Languages", items: [
      { name: "JavaScript", featured: true }, { name: "Python" }, { name: "HTML & CSS" }
    ]},
    { title: "Databases & Data Handling", items: [
      { name: "CRUD operations" }, { name: "Record management" }, { name: "Data analytics (TATA simulation)" }
    ]},
    { title: "AI & Machine Learning", items: [
      { name: "Random Forest" }, { name: "Computer vision" }, { name: "Motion detection" }, { name: "GenAI-powered analytics" }
    ]},
    { title: "Developer Tools", items: [
      { name: "GitHub" }
    ]}
  ];

  data.experience = [
    { role: "Web Development Trainee", org: "Business Labs", place: "Hyderabad, Telangana, India", period: "March 2026 – Present",
      text: "Currently working as a web development trainee." },
    { role: "GenAI Powered Data Analytics Job Simulation", org: "TATA", place: "India", period: "February 2025 – July 2025",
      text: "Completed a job simulation focused on GenAI-powered data analytics." }
  ];

  data.education = [
    { school: "AVN Institute of Engineering and Technology", degree: "Bachelor of Technology — Computer Science and Engineering", period: "November 2022 – May 2026" },
    { school: "C.V. Raman Junior College", degree: "Intermediate — MPC", period: "January 2022 – July 2022" },
    { school: "Annu's Academy High School", degree: "High School", period: "April 2019 – May 2020" }
  ];

  data.marquee = ["JavaScript", "Node.js", "Bootstrap", "HTML", "CSS", "React", "Python", "Flask", "Random Forest", "Computer Vision", "GitHub"];
})();
