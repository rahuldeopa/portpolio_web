import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import cert1 from "../assets/cert-1.png";
import cert2 from "../assets/cert-2.png";

export const HERO_CONTENT = `I am a passionate software developer with expertise in building efficient, scalable, and innovative solutions. With hands-on experience in web and cloud technologies, I aim to create impactful applications that enhance user experience and solve real-world problems.`;

export const ABOUT_TEXT = `I am a dedicated software developer with a strong foundation in Java, Python, and SQL, complemented by experience in modern frameworks like ReactJS. I have worked on projects ranging from AI-powered storytelling to real-time bidding systems and face recognition-based attendance management. My focus lies in leveraging technology to craft practical solutions and contribute meaningfully to collaborative development efforts. When not coding, I enjoy exploring advancements in AI, cloud technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023",
    role: "Virtual Experience Participant",
    company: "J.P. Morgan Chase & Co.",
    description: `Analyzed large datasets of fraudulent financial payments as part of a cybersecurity virtual experience program. Applied data science techniques to identify patterns and improve fraud detection strategies.`,
    technologies: ["Python", "Data Analysis", "Cybersecurity"],
  },
  {
    year: "2024",
    role: "Freelancer",
    company: "Fiverr",
    description: `Provided freelancing services, including custom web development, bug fixing, and software solutions. Delivered high-quality projects for clients globally, meeting tight deadlines and ensuring client satisfaction.`,
    technologies: ["ReactJS", "Node.js", "MySQL", "API Development"],
  },
];

export const PROJECTS = [
  {
    title: "Tale Weaver: AI-Powered Story Generator",
    image: project1,
    description:
      "A web application that generates visualized stories with plot, characters, and dialogues using GPT models. Combines artificial intelligence and creative storytelling for an immersive experience.",
    technologies: ["Angular", "Java","Springboot","python"],
    github: "https://github.com/rahuldeopa/tale-weaver",
  },
  {
    title: "Real-Time Bidding System",
    image: project2,
    description:
      "A scalable system that enables real-time auction functionality, integrated with MySQL for secure and efficient data storage, hosted using cloud technologies.",
    technologies: ["Python", "MySQL", "Cloud Services"],
    github: "https://github.com/rahuldeopa/real-time-bidding",
  },
  {
    title: "Attendance Management System Using Face Recognition",
    image: project3,
    description:
      "A web application that captures and records entities using face recognition to mark attendance, ensuring accuracy and efficiency.",
    technologies: ["Python", "OpenCV", "MySQL"],
    github: "https://github.com/rahuldeopa/FaceRecognitionAttendanceUsingPython",
  },
  {
    title: "E-Shop Platform",
    image: project4,
    description:
      "An e-commerce platform featuring product listings, user authentication, shopping carts, and payment integrations. Designed for seamless user experience and scalability.",
    technologies: ["ReactJS", "Node.js", "MongoDB"],
    github: "https://github.com/rahuldeopa/eShop",
  },
];
export const CERTIFICATES = [
  {
    title: "Cybersecurity Virtual Experience Program",
    organization: "J.P. Morgan Chase & Co.",
    description:
      "Analyzed large datasets of fraud in financial payment services as part of this virtual program.",
    image: cert1,
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/gWbW5qHAChqQBGWpA_JPMorgan%20Chase%20&%20Co._kM2NX8AzPg4nTvbPb_1702720727197_completion_certificate.pdf",
  },
  {
    title: "Java Full Stack",
    organization: "Wipro",
    description:
      "Mastered advanced concepts in Java, including springboot and performance optimization.",
    image: cert2,
    link: "https://cert.diceid.com/csr/cid/spp3er",
  },
];

export const CONTACT = {
  address: "Dehradun",
  phoneNo: "8445633859 ",
  email: "rahuldeopa1818@gmail.com",
};
