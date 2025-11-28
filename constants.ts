import { Experience, Project, SkillCategory, Education, SocialLink } from './types';

export const PERSONAL_INFO = {
  name: "Pranav Dwivedi",
  title: "IT Graduate | Robotics & AI Major",
  location: "Kingston, ACT, Australia",
  email: "pranavdofficial@gmail.com",
  phone: "+61 0493509331",
  summary: "IT Graduate with a Bachelor of Information Technology (Robotics & AI major) from the University of Canberra. Skilled in Python, cloud technologies, and data analysis with hands-on project experience in machine learning, automation, and system design. Experienced in customer-facing and technical support roles at JB Hi-Fi, with a strong foundation in troubleshooting, systems management, and process optimization. Actively pursuing AWS Cloud Practitioner and ITIL certifications.",
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/pranav-dwivedi-05b4b921b", icon: "linkedin" },
  { platform: "GitHub", url: "https://github.com/pronzzz", icon: "github" },
  { platform: "Email", url: `mailto:${PERSONAL_INFO.email}`, icon: "mail" },
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages & Tools",
    skills: ["Python", "Java", "SQL", "Bash", "R", "HTML/CSS", "JavaScript", "MATLAB", "C#"]
  },
  {
    category: "Frameworks & Libraries",
    skills: ["TensorFlow", "Keras", "PyTorch", "OpenCV", "Scikit-learn", "Pandas", "NumPy"]
  },
  {
    category: "Concepts",
    skills: ["Machine Learning", "Data Analysis", "Cloud Computing", "Computer Vision", "Predictive Modeling", "Robotics"]
  },
  {
    category: "DevOps & Operations",
    skills: ["Git", "GitHub", "Docker", "Agile", "VS Code", "POS Administration", "IT Troubleshooting", "Process Optimization"]
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "University of Canberra",
    degree: "Bachelor of Information Technology (Major: Robotics & AI)",
    year: "Graduated May 2025",
    details: "GPA: 4.6/7.0"
  },
  {
    institution: "Senior Secondary & High School, India",
    degree: "Higher Distinctions",
    year: "2021"
  }
];

export const CERTIFICATIONS = [
  "Cybersecurity Fundamentals – La Trobe University (2023)",
  "Business Basics Workshop – University of Canberra (2022)",
  "AWS Cloud Practitioner (In Progress)",
  "ITIL Foundation (In Progress)"
];

export const PROJECTS: Project[] = [
  {
    title: "Weather Prediction using Deep Learning (NeuralSky)",
    category: "AI/ML",
    tech: ["PyTorch", "Vision Transformers", "GradCAM"],
    description: [
      "Built and deployed a weather prediction model using PyTorch and Vision Transformers.",
      "Implemented GradCAM for explainability and model bias mitigation."
    ]
  },
  {
    title: "Robotic Manipulator Control",
    category: "Robotics",
    tech: ["Python", "Inverse Kinematics", "Matplotlib"],
    description: [
      "Developed robotic arm control using Python with inverse kinematics and transformation matrices.",
      "Simulated motion and visualized results using Matplotlib."
    ]
  },
  {
    title: "Diabetes Prediction using ML Models",
    category: "Data",
    tech: ["SVM", "Decision Trees", "Random Forest", "EDA"],
    description: [
      "Applied SVM, Decision Trees, and Random Forest on medical dataset.",
      "Conducted feature engineering, EDA, and performance evaluation (precision, recall, F1-score)."
    ]
  },
  {
    title: "Fingerprint Classification (CNNs)",
    category: "AI/ML",
    tech: ["TensorFlow", "CNN", "Data Augmentation"],
    description: [
      "Built a biometric classifier with TensorFlow.",
      "Optimized models through augmentation and hyperparameter tuning."
    ]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    company: "JB Hi-Fi Australia",
    role: "Merchandise Coordinator & Specialist Roles",
    duration: "Sep 2023 – Present",
    location: "Canberra, ACT",
    type: "Professional",
    description: [
      "Progressed through multiple operations and technical roles (Merchandise Coordinator, Counter Specialist).",
      "Coordinated storewide digital and in-store merchandising systems and data integrity.",
      "Liaised with IT and operations teams to maintain system functionality and resolve technical issues.",
      "Managed POS back-end transaction systems and trained staff on digital processes.",
      "Collaborated with IT support for troubleshooting terminal or software-related issues."
    ]
  },
  {
    company: "IKEA",
    role: "SSFA Staff",
    duration: "Sep 2022 – Oct 2023",
    location: "Canberra",
    type: "Professional",
    description: [
      "Resolved customer issues quickly and professionally in a high-volume retail environment.",
      "Collaborated with cross-functional teams, reinforcing Agile teamwork skills."
    ]
  },
  {
    company: "Pinnacle People",
    role: "Customer Service Staff",
    duration: "Jan 2023 – Jun 2023",
    location: "Canberra",
    type: "Professional",
    description: [
      "Provided support for event systems and logistics, ensuring smooth technical operations."
    ]
  },
  {
    company: "Retail Pharmacy",
    role: "Pharmacy Assistant",
    duration: "2019 – 2022",
    location: "Lucknow, India",
    type: "Professional",
    description: [
      "Assisted with database and stock management systems.",
      "Delivered accurate product information and support in a regulated environment."
    ]
  },
  {
    company: "Helping ACT",
    role: "Volunteer",
    duration: "",
    location: "ACT",
    type: "Volunteer",
    description: [
      "Managed logistics and provided technical support during community events.",
      "Developed adaptability and communication skills under pressure."
    ]
  }
];

export const LANGUAGES = [
  { language: "English", level: "Fluent" },
  { language: "Hindi", level: "Native" },
  { language: "Bengali", level: "Fluent" },
  { language: "Japanese", level: "Elementary" }
];