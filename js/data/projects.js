/**
 * Project data — order follows the approved portfolio plan (1 → 16).
 *
 * `repo`   : repository name under github.com/veena-blabs  (URL = GITHUB_BASE + repo)
 * `stack`  : only technologies named in your project descriptions
 * `focus`  : what the project does, taken from your descriptions
 * `tags`   : filter categories -> "Web Apps" | "AI/ML" | "Tools" | "Learning"
 * `visual` : file in assets/visuals/ (one unique visual per project)
 *
 * To add a language/framework chip, push it into that project's `stack` array.
 */
(function () {
  var GITHUB_BASE = "https://github.com/veena-blabs/";

  var projects = [
    {
      rank: 1, tier: "Featured", name: "Criminal Investigation Tracker", repo: "Criminal-Investigation-Tracker",
      tags: ["AI/ML", "Web Apps"], visual: "criminal-investigation-tracker",
      summary: "A Flask-based criminal investigation system that manages criminal reports and uses a Random Forest machine learning model to compare new cases with existing records and identify potential suspects.",
      stack: ["Flask", "Python", "Random Forest"], focus: ["Criminal reports", "Case comparison", "Suspect matching"],
      alt: "Dark investigative case board with connected evidence nodes and decision trees"
    },
    {
      rank: 2, tier: "Featured", name: "GharRide", repo: "GharRide",
      tags: ["Web Apps"], visual: "gharride",
      summary: "A rental platform that connects customers with property and vehicle owners, offering property listings, vehicle rentals, and booking management.",
      stack: ["Rental platform"], focus: ["Property listings", "Vehicle rentals", "Booking management"],
      alt: "Isometric house and car on a platform linked by a route line to a map pin"
    },
    {
      rank: 3, tier: "Featured", name: "legals-ai", repo: "legals-ai",
      tags: ["AI/ML", "Web Apps"], visual: "legals-ai",
      summary: "An AI-powered legal directory platform designed to improve access to legal information and services through intelligent features and lawyer listings.",
      stack: ["AI features"], focus: ["Legal information", "Lawyer listings", "Directory"],
      alt: "Balanced scales with a neural network on one side and an open book on the other"
    },
    {
      rank: 4, tier: "Featured", name: "virtual-mouse", repo: "virtual-mouse",
      tags: ["AI/ML"], visual: "virtual-mouse",
      summary: "A computer vision-based virtual mouse that uses hand gestures and webcam tracking to control mouse movements, clicks, and scrolling.",
      stack: ["Computer Vision", "Webcam tracking"], focus: ["Hand gestures", "Mouse control", "Clicks & scrolling"],
      alt: "Wireframe hand with tracked landmarks controlling a floating cursor"
    },
    {
      rank: 5, tier: "Full-stack", name: "Smart-Booking", repo: "Smart-Booking",
      tags: ["Web Apps"], visual: "smart-booking",
      summary: "A smart booking management web application designed to simplify bookings, manage reservations, and provide an organized booking experience.",
      stack: ["Web app"], focus: ["Bookings", "Reservations", "Organized scheduling"],
      alt: "Calendar grid with one time slot highlighted and confirmed"
    },
    {
      rank: 6, tier: "Full-stack", name: "mini-crm", repo: "mini-crm",
      tags: ["Web Apps", "Tools"], visual: "mini-crm",
      summary: "A Mini CRM and Communication Portal designed to manage student information, organize records, and simplify data management through CRUD operations.",
      stack: ["CRUD"], focus: ["Student information", "Record management", "Communication portal"],
      alt: "Profile cards connected to a central database"
    },
    {
      rank: 7, tier: "Full-stack", name: "legals", repo: "legals",
      tags: ["Web Apps"], visual: "legals",
      summary: "A responsive legal directory website interface designed to present legal services, lawyer information, and professional resources.",
      stack: ["Responsive UI"], focus: ["Legal services", "Lawyer information", "Professional resources"],
      alt: "Lawyer profile cards beside courthouse columns and a gavel"
    },
    {
      rank: 8, tier: "Full-stack", name: "BusinessLabs", repo: "BusinessLabs",
      tags: ["Web Apps"], visual: "businesslabs",
      summary: "A business website designed to showcase services, manage customer inquiries, and handle business communication through an interactive web interface.",
      stack: ["Interactive web UI"], focus: ["Service showcase", "Customer inquiries", "Business communication"],
      alt: "Glowing laboratory flask surrounded by browser windows"
    },
    {
      rank: 9, tier: "Full-stack", name: "ecommerce_shopeasy", repo: "ecommerce_shopeasy",
      tags: ["Web Apps"], visual: "ecommerce-shopeasy",
      summary: "An e-commerce web application that provides an online shopping experience with product browsing, user interactions, and shopping management features.",
      stack: ["E-commerce"], focus: ["Product browsing", "User interactions", "Shopping management"],
      alt: "Shopping cart filled with product boxes under a storefront awning"
    },
    {
      rank: 10, tier: "Computer vision", name: "smart-motion-detector", repo: "smart-motion-detector",
      tags: ["AI/ML"], visual: "smart-motion-detector",
      summary: "A smart motion detection system that monitors surroundings, detects movement, and triggers automated responses to improve security.",
      stack: ["Motion detection", "Automation"], focus: ["Monitoring", "Movement detection", "Automated responses"],
      alt: "Radar sweep and motion trail seen from a security camera"
    },
    {
      rank: 11, tier: "Utility", name: "file-manager", repo: "file-manager",
      tags: ["Tools"], visual: "file-manager",
      summary: "A web-based file management application that allows users to organize, upload, manage, and access files through a user-friendly interface.",
      stack: ["Web app"], focus: ["Organize files", "Upload", "Access"],
      alt: "Stacked folders with documents rising out and an upload arrow"
    },
    {
      rank: 12, tier: "Utility", name: "live-search", repo: "live-search",
      tags: ["Tools"], visual: "live-search",
      summary: "A real-time search application that dynamically filters and displays relevant results as users type.",
      stack: ["Real-time filtering"], focus: ["Search as you type", "Dynamic results"],
      alt: "Magnifying glass over result cards with one match highlighted"
    },
    {
      rank: 13, tier: "Utility", name: "task_manager", repo: "task_manager",
      tags: ["Tools"], visual: "task-manager",
      summary: "A Task Manager Web Application that helps users organize daily activities by adding, updating, deleting, and tracking tasks.",
      stack: ["CRUD"], focus: ["Add & update tasks", "Delete tasks", "Progress tracking"],
      alt: "Kanban board with completed cards glowing amber"
    },
    {
      rank: 14, tier: "UI", name: "pinterest-clone", repo: "pinterest-clone",
      tags: ["Web Apps"], visual: "pinterest-clone",
      summary: "A Pinterest-inspired web application that allows users to explore, display, and organize visual content through an image-focused interface.",
      stack: ["Image-focused UI"], focus: ["Explore visuals", "Display content", "Organize content"],
      alt: "Masonry grid of colorful gradient tiles"
    },
    {
      rank: 15, tier: "Learning", name: "student-result-calculator", repo: "student-result-calculator",
      tags: ["Learning"], visual: "student-result-calculator",
      summary: "A student result management application that calculates academic results based on marks and helps evaluate student performance.",
      stack: ["Result calculation"], focus: ["Marks to results", "Performance evaluation"],
      alt: "Report-card panels with bar charts, a grade badge, graduation cap and calculator"
    },
    {
      rank: 16, tier: "Learning", name: "tnsbackendtraining", repo: "tnsbackendtraining",
      tags: ["Learning"], visual: "tnsbackendtraining",
      summary: "A backend development training project focused on learning server-side programming concepts and gaining practical software development experience.",
      stack: ["Server-side programming"], focus: ["Backend concepts", "Practical experience"],
      alt: "Stacked servers piping data into a database with a sapling growing beside it"
    }
  ];

  projects.forEach(function (p) {
    p.url = GITHUB_BASE + p.repo;
    p.image = "assets/visuals/" + p.visual + ".svg";
    p.featured = p.rank <= 4;
  });

  window.PortfolioData = window.PortfolioData || {};
  window.PortfolioData.projects = projects;
  window.PortfolioData.filters = ["All", "Featured", "Web Apps", "AI/ML", "Tools", "Learning"];
})();
