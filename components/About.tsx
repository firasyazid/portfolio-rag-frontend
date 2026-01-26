"use client";

import { useState } from "react";

type Section = "about" | "experience" | "education" | "certifications" | "skills";

export default function About() {
  const [activeSection, setActiveSection] = useState<Section>("about");

  const experiences = [
    {
      date: "Jan 2025 – Present",
      role: "Full Stack AI Developer",
      company: "NobleMind",
      details: [
        "Design and build scalable web & mobile AI-powered applications using React.js, React Native, Next.js, Node.js, and Python",
        "Develop healthcare platforms focusing on patient care, medical data management, and digital health innovation",
        "Integrate Generative AI solutions including chatbots, automated workflows, predictive analytics, and personalized recommendations",
        "Architect intelligent systems combining LLMs with Retrieval-Augmented Generation (RAG) for context-aware solutions",
      ],
    },
    {
      date: "Dec 2022 – Feb 2025",
      role: "Full Stack TypeScript Developer",
      company: "Parhelion Consulting & Training",
      details: [
        "Designed and developed high-performance web and mobile applications with React, Angular, and React Native",
        "Built scalable backend systems using Node.js and Spring Boot with MongoDB and SQL databases",
        "Implemented CI/CD pipelines and containerization with Docker for efficient deployment across environments",
        "Optimized database design and performance for both NoSQL and relational systems",
      ],
    },
    {
      date: "Feb 2024 – Jul 2024",
      role: "Full Stack JavaScript Developer & MLOps Engineer",
      company: "B2M-IT",
      details: [
        "Developed intelligent healthcare mobile app connecting doctors, pharmacies, and patients for seamless communication and medication tracking",
        "Built advanced ML models for disease prediction, achieving high diagnostic accuracy and supporting clinical decision-making",
        "Created web-based disease prediction platform providing real-time insights for healthcare specialists",
        "Implemented CI/CD pipelines automating development workflows with minimal downtime",
      ],
    },
    {
      date: "Sept 2023 – May 2024",
      role: "Teacher and Trainer",
      company: "CMF Formation",
      details: [
        "Provided in-person university support courses for undergraduate computer science students",
        "Taught core programming concepts including C Language, Java, and fundamental algorithms",
      ],
    },
    {
      date: "Jun 2022 – Aug 2022",
      role: "Full Stack Web Application Developer",
      company: "Parhelion Consulting & Training",
      details: [
        "Developed complete e-commerce platform using MEAN stack (Angular, Node.js, Express.js, MongoDB)",
        "Implemented responsive frontend interfaces and scalable backend APIs",
        "Containerized application using Docker for consistent deployment",
      ],
    },
    {
      date: "Jun 2021 – Sept 2021",
      role: "Full Stack Web Application Developer",
      company: "Aftercode",
      details: [
        "Built hotel booking platform with React frontend and Node.js backend",
        "Implemented database design using MongoDB and version control with GitHub",
        "Ensured smooth user experience with robust functionality and responsive design",
      ],
    },
  ];

  const education = [
    {
      date: "2019 – 2024",
      title: "Software Engineer Degree",
      institution: "ESPRIT, Tunisia",
      focus: "Engineering Excellence",
    },
    {
      date: "2015 – 2019",
      title: "High School Diploma in Computer Science",
      institution: "Tunisia",
      focus: "Computer Science Focus",
    },
  ];

  const certifications = [
    { name: "Generative AI: Foundation Models and Platforms", issuer: "IBM", date: "Nov 2025" },
    { name: "Vector Databases for Embeddings with Pinecone", issuer: "DataCamp", date: "Oct 2025" },
    { name: "Developing LLM Applications with LangChain", issuer: "DataCamp", date: "Aug 2025" },
    { name: "Python Programming", issuer: "Microsoft", date: "Aug 2025" },
    { name: "Fundamentals Of Model Context Protocol (MCP)", issuer: "Hugging Face", date: "Jun 2025" },
    { name: "React Native Developer", issuer: "Meta", date: "Apr 2025" },
    { name: "Docker Foundations Professional Certificate", issuer: "Docker, Inc", date: "Mar 2025" },
    { name: "Containerization and Virtualization Concepts", issuer: "DataCamp", date: "Feb 2025" },
    { name: "Intermediate FastAPI", issuer: "DataCamp", date: "Feb 2025" },
    { name: "AI Fundamentals by DataCamp", issuer: "DataCamp", date: "Jan 2025" },
    { name: "React - State management in functional components (HOOKS)", issuer: "Coursera", date: "Jan 2025" },
    { name: "SQL Joins", issuer: "Coursera", date: "Jan 2025" },
    { name: "DevOps on AWS", issuer: "Amazon Web Services (AWS)", date: "Dec 2024" },
    { name: "Git and Github", issuer: "365 Data Science", date: "Nov 2024" },
    { name: "Career Essentials in Software Development by Microsoft and LinkedIn", issuer: "Microsoft", date: "Oct 2024" },
    { name: "Generative AI", issuer: "Microsoft", date: "Sept 2024" },
    { name: "Programming Foundations: Beyond the Fundamentals", issuer: "LinkedIn", date: "Aug 2024" },
    { name: "Containerize a full-stack NodeJS application in Docker", issuer: "Coursera", date: "Jul 2024" },
    { name: "Linear Regression with NumPy and Python", issuer: "Coursera", date: "Jun 2024" },
    { name: "Typescript in React", issuer: "Coursera", date: "Jun 2024" },
    { name: "Machine Learning Web App with Streamlit and Python", issuer: "Coursera", date: "May 2024" },
    { name: "Python Essential Training", issuer: "LinkedIn", date: "Apr 2024" },
    { name: "React JS", issuer: "Great Learning", date: "Jun 2023" },
    { name: "Cisco Certified Network Associate (CCNA)", issuer: "Cisco", date: "May 2023" },
  ];

  const skills = {
    languages: ["Python", "Java", "C", "TypeScript", "JavaScript"],
    frontend: ["React", "Next.js", "Angular", "Tailwind CSS"],
    mobile: ["React Native"],
    backend: [ "FastAPI", "Node.js", "Spring Boot", "PostgreSQL", "MongoDB"],
    ai: ["LLMs", "RAG", "Vector DBs","MCP", "LangChain"],
    devops: ["Docker", "CI/CD", "GitLab", "Jenkins","SonarQube","Pometheus","Grafana"],
  };

  const menuItems = [
    { id: "about" as Section, label: "About Me", icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
    { id: "experience" as Section, label: "Experience", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
    { id: "education" as Section, label: "Education", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
    { id: "certifications" as Section, label: "Certifications", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
    { id: "skills" as Section, label: "Skills", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
  ];

  return (
    <section className="min-h-screen px-4 md:px-6 py-16 md:py-32 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* macOS Window */}
        <div className="bg-zinc-900/90 backdrop-blur-xl border border-zinc-700/50 rounded-2xl overflow-hidden shadow-2xl">
          {/* Window Header (macOS Style) */}
          <div className="bg-zinc-800/80 border-b border-zinc-700/50 px-4 py-3 flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="flex-1 text-center">
              <span className="text-sm text-white/60 font-medium">Profile</span>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex flex-col md:flex-row">
            {/* Sidebar */}
            <div className="w-full md:w-64 bg-zinc-800/40 border-b md:border-b-0 md:border-r border-zinc-700/50 p-4">
              <div className="flex md:flex-col gap-2 md:gap-1 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-3 rounded-lg transition-all duration-200 whitespace-nowrap ${
                      activeSection === item.id
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                        : "text-white/60 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                    <span className="font-medium text-sm md:text-base">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-4 md:p-8 h-[500px] md:h-[600px] overflow-y-auto scrollbar-thin">
              {activeSection === "about" && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6">About Me</h3>
                  <div className="bg-zinc-800/40 border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-500/40 transition-colors">
                    <p className="text-base md:text-lg text-white/80 leading-relaxed font-light">
                      Software Engineer with 3 years of experience in full-stack development. Experienced in building scalable web & mobile applications using modern frameworks like React, Angular, React Native, and FastAPI. Strong DevOps mindset with containerization expertise (Docker) and CI/CD pipeline implementation. Passionate about integrating cutting-edge AI technologies including LLMs, RAG systems, and Model Context Protocol (MCP) into real-world applications.
                    </p>
                  </div>
                </div>
              )}
              {activeSection === "experience" && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6">Work Experience</h3>
                  {experiences.map((exp, i) => (
                    <div key={i} className="border-l-2 border-cyan-500/30 pl-6 pb-6 hover:border-cyan-500 transition-colors">
                      <div className="text-xs text-cyan-400 mb-2 font-mono">{exp.date}</div>
                      <div className="text-xl text-white font-semibold mb-1">{exp.role}</div>
                      <div className="text-cyan-300 mb-3">{exp.company}</div>
                      <ul className="space-y-2">
                        {exp.details.map((detail, j) => (
                          <li key={j} className="flex items-start gap-3 text-white/70">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {activeSection === "education" && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
                  {education.map((edu, i) => (
                    <div key={i} className="border-l-2 border-indigo-500/30 pl-6 pb-6 hover:border-indigo-500 transition-colors">
                      <div className="text-xs text-cyan-300 mb-2 font-mono">{edu.date}</div>
                      <div className="text-xl text-white font-semibold mb-1">{edu.title}</div>
                      <div className="text-cyan-300 mb-2">{edu.institution}</div>
                      <div className="text-white/70">{edu.focus}</div>
                    </div>
                  ))}
                </div>
              )}

              {activeSection === "certifications" && (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Certifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {certifications.map((cert, i) => (
                      <div
                        key={i}
                        className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-violet-500/50 transition-all"
                      >
                        <div className="text-white font-medium mb-2">{cert.name}</div>
                        <div className="text-cyan-300 text-sm mb-1">by {cert.issuer}</div>
                        <div className="text-white/50 text-xs">{cert.date}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeSection === "skills" && (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
                  <div className="space-y-6">
                    {Object.entries(skills).map(([category, items]) => (
                      <div key={category}>
                        <div className="text-sm text-cyan-300 uppercase tracking-wider mb-3 font-semibold">
                          {category}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {items.map((skill) => (
                            <span
                              key={skill}
                              className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white/80 hover:bg-white/10 hover:border-blue-500/50 transition-all cursor-default"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
