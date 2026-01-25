"use client";

import { useState } from "react";

// Project Data Type
type Project = {
    id: string;
    filename: string;
    title: string;
    description: string;
    techStack: string[];
    videoUrl?: string;
    githubUrl?: string;
    liveUrl?: string;
    features: string[];
    category: "Web & AI" | "Mobile & AI" | "DevOps & Cloud";
};

export default function Projects() {
    const [activeProject, setActiveProject] = useState<string>("ai-release-manager");

    const projects: Project[] = [
        {
            id: "ai-release-manager",
            filename: "ReleaseManager.yml",
            title: "Smart CI/CD Pipeline with AI-Powered MCP Release Gate",
            description: "An AI-powered CI/CD release gate built with MCP architecture to intelligently control deployments. It analyzes test results, code quality, coverage, and security metrics using Google Gemini AI, assigns a confidence score, and automatically approves or blocks releases. Integrated into GitHub Actions, it generates clear AI-driven release summaries and ensures safer, smarter, and production-ready deployments.",
            techStack: ["Python", "MCP", "CI/CD", "Google Gemini AI", "GitHub Actions", "Docker"],
            features: [
                "AI-Powered Release Project evaluating tests, coverage, linting, and security metrics",
                "Uses Google Gemini AI to understand build risks and assign confidence scores",
                "Generates APPROVE or BLOCK deployment decisions with detailed summaries",
                "CI/CD Pipeline with GitHub Actions running unit tests, linting, type checks, and coverage",
                "Docker image building and production deployment integration"
            ],
            githubUrl: "https://github.com/firasyazid/AI-release-Manager--MCP-",
            category: "DevOps & Cloud",
        },
        {
            id: "rag-assistant",
            filename: "RAGAssistant.tsx",
            title: "Full-Stack AI Assistant: Web Scraping (LangChain) + RAG + LLM",
            description: "RAG Agent for Web Scraping & Question Answering. Scrape any website using LangChain WebBaseLoader, split & store content in ChromaDB with embeddings, and ask natural language questions to get contextual answers with LLM through a modern React + Tailwind frontend.",
            techStack: ["React", "TailwindCSS", "FastAPI", "LangChain", "ChromaDB", "OpenAI Embeddings", "LangGraph"],
            features: [
                "Web scraping powered by LangChain WebBaseLoader for dynamic content extraction",
                "Smart chunking & hybrid embeddings with semantic understanding",
                "Persistent vector storage with ChromaDB for efficient retrieval",
                "RESTful API with FastAPI for seamless backend integration",
                "End-to-end RAG pipeline: Scraping → Chunking → Storage → Retrieval → AI Answers",
                "Clean, interactive UI built with React + TailwindCSS for intuitive user experience"
            ],
            videoUrl: "https://drive.google.com/file/d/1ZqVJuwfqe5-bAUuyJxFcKEN3Lhw4sTiz/view?usp=sharing&usp=embed_facebook",
            category: "Web & AI",
        },
        {
            id: "github-assistant",
            filename: "GitHubAssistant.tsx",
            title: "AI-Powered GitHub Assistant with MCP + Llama",
            description: "A GitHub AI Assistant that integrates directly with repositories to make issue handling and code review smarter. Features AI-powered code review, issue triage with auto-labeling, and works offline with Llama running locally on LM Studio.",
            techStack: ["Llama", "MCP", "Node.js", "GitHub REST API", "React", "TailwindCSS"],
            features: [
                "AI-Powered Code Review analyzing code for bugs, missing documentation, and untested logic",
                "Suggests improvements for readability, maintainability, and best practices",
                "Works offline with Llama running locally on LM Studio",
                "Issue Triage fetching and summarizing repository issues in real-time",
                "Auto-suggests labels (bug, enhancement, documentation) to save maintainers' time",
                "Smart issue description summarization into actionable overviews"
            ],
            githubUrl: "https://github.com/firasyazid/AI-Powered-GitHub-Assistant-with-MCP",
            videoUrl: "https://drive.google.com/file/d/1vzF0qKA_CLu3hZTrcVT5FwtMbyvPX4x0/view?usp=sharing",
            category: "Web & AI",
        },
        {
            id: "eva-padel",
            filename: "EVAPadel.tsx",
            title: "EVA Padel – Real-Time Paddle Tournament & Player Tracking",
            description: "A comprehensive app dedicated to paddle players, coaches, and clubs, published on both App Store and Play Store. The app streamlines tournament and match management while providing performance tracking for players. Features include match & tournament management, player evaluation with coach reviews, automatic player level calculation, and live tournament support with real-time scores and updates.",
            techStack: ["React Native", "Node.js", "Express.js", "MongoDB", "Java", "Docker", "CI/CD Pipeline"],
            features: [
                "Match & Tournament Management for creating and organizing tournaments",
                "Player Evaluation system with coach reviews and feedback integration",
                "Automatic player level calculation based on performance metrics",
                "Live Tournament Support with real-time scores, ratings, and updates",
                "Personalized dashboards for players and coaches with performance insights",
                "Live notifications and updates during tournament matches"
            ],
            liveUrl: "https://apps.apple.com/tn/app/eva-padel/id6757681607",
            category: "Mobile & AI",
        },
        {
            id: "pilate-co",
            filename: "PilateCo.tsx",
            title: "Pilate & Co - Cross-Platform Mobile Application",
            description: "A modern and high-performance mobile application for Pilates enthusiasts, published on both App Store and Play Store, with secure authentication, online class booking, subscription management, and a real-time social news feed. Supports multilingual access (French & English), Expo push notifications for session reminders, and online payment integration.",
            techStack: ["React Native", "React.js", "Node.js", "MongoDB", "Expo", "Payment Integration"],
            features: [
                "Secure user authentication with encrypted credentials",
                "Online class reservations with real-time availability",
                "Subscription management with flexible billing options",
                "Social news feed for community interaction and engagement",
                "Intuitive and high-performance mobile interface",
                "Push notifications (via Expo) reminding users of upcoming sessions",
                "Multilingual support (French & English) for global reach"
            ],
            liveUrl: "https://apps.apple.com/us/app/pilates-co/id6754307786",
            category: "Mobile & AI",
        },
        {
            id: "delta-architect",
            filename: "DeltaArchitect.tsx",
            title: "Mobile Application - Delta Architect",
            description: "A mobile application developed for Delta Cuisine architects to manage their orders, track commands, stay updated with news, and access a loyalty system. Built with React Native and Node.js for a seamless user experience on both iOS and Android platforms.",
            techStack: ["React Native", "Node.js", "Express.js", "MongoDB", "Angular", "Expo", "Docker"],
            features: [
                "Order and command management for easy order tracking",
                "Real-time news updates to keep architects informed",
                "Loyalty program integration with rewards and benefits",
                "Seamless user experience built with React Native and Expo",
                "Backend API with Node.js and Express.js",
                "Secure data storage with MongoDB"
            ],
            liveUrl: "https://play.google.com/store/apps/details?id=com.firas_yazid1.DeltaFront&hl=en_US",
            category: "Mobile & AI",
        },
        {
            id: "ai-journal",
            filename: "AIJournal.tsx",
            title: "AI-Powered Interactive Journaling RAG, Embeddings, Vector DB & LLMs",
            description: "A personal journaling app that lets users interact with their past entries using AI. Each journal entry is converted into embeddings and stored in Pinecone for semantic search. When users ask questions, LangChain retrieves the most relevant entries and provides context-aware responses via the Qwen model.",
            techStack: ["React Native", "Expo", "NestJS", "MongoDB", "LangChain", "Pinecone", "Qwen LLM"],
            features: [
                "Vector embeddings (text-embedding-bge-m3) for semantic understanding of journal entries",
                "Pinecone vector database for efficient semantic search and retrieval",
                "LangChain integration for intelligent context-aware responses",
                "Qwen LLM for natural language understanding and generation",
                "Interactive journaling with AI-powered insights from past entries",
                "Full-stack architecture with Expo frontend and NestJS backend",
                "MongoDB for secure storage of journal data and embeddings"
            ],
            videoUrl: "https://drive.google.com/file/d/1IdR5CnCO_7IOt1FYZdEAbvgU_uN_67ro/view",
            category: "Mobile & AI",
        },
        {
            id: "gym-assistant",
            filename: "GymAssistant.tsx",
            title: "AI-Powered Gym Assistant App using MCP",
            description: "A fitness app powered by AI that generates personalized workout plans while remembering and understanding the user over time. This project demonstrates the practical use of Model Context Protocol (MCP) with locally hosted LLaMA 3, creating adaptive AI coaching that transforms personal fitness support.",
            techStack: ["LLaMA 3", "FastAPI", "MongoDB", "React Native", "Expo SDK 53", "MCP", "JWT"],
            features: [
                "MCP Integration enriching AI prompts with personal context (past workouts, injuries, emotional states)",
                "AI-Powered Adaptive Coaching providing real fitness support, not just content generation",
                "LLaMA 3 Local Model running via LM Studio for privacy and performance",
                "Personalized Workout Plan Generation based on user history and preferences",
                "Secure Authentication using JWT with AsyncStorage",
                "Minimalist dark theme UI for focused user experience",
                "Memory-driven coaching that adapts like a human personal trainer"
            ],
            githubUrl: "https://github.com/firasyazid/AI-Powered-Fitness-app-with-MCP",
            category: "Mobile & AI",
        },
        {
            id: "face-verification",
            filename: "FaceVerification.py",
            title: "Face Verification & Liveness Detection System",
            description: "Secure biometric onboarding pipeline combining face verification and active liveness detection to prevent identity fraud including photo attacks and video replays.",
            techStack: ["Python", "FastAPI", "React Native", "Machine Learning", "MediaPipe", "OpenCV"],
            features: [
                "FaceNet512 face embeddings via DeepFace with cosine similarity matching",
                "Real-time liveness detection using MediaPipe facial landmarks and head pose estimation",
                "Anti-spoofing protection against static images, screen replays, and prerecorded videos",
                "Two-step biometric verification with threshold-based decisioning",
                "Seamless React Native frontend with live video streaming integration"
            ],
            githubUrl: "https://github.com/firasyazid/Face-Verification-Liveness-Detection-system",
            category: "Mobile & AI",
        },
        {
            id: "emsat-platform",
            filename: "EMSATPlatform.ts",
            title: "EMSAT Exam Simulation Platform",
            description: "A comprehensive full-stack e-learning platform developed for an educational agency in Dubai. It simulates the standardized EMSAT exam environment, enabling students to practice under real-time conditions. The system features a robust assessment engine, detailed performance analytics, and a responsive student dashboard.",
            techStack: ["Angular", "Node.js", "MongoDB", "PostgreSQL", "Docker"],
            features: [
                "Real-time exam simulation engine mimicking official test conditions",
                "Dynamic Question System supporting Single/Multiple Choice and Drag-and-Drop interactions",
                "Advanced Student Dashboard for tracking progress and analyzing result trends",
                "Scalable microservices architecture containerized with Docker",
                "Responsive design ensuring seamless access across all devices"
            ],
            videoUrl: "https://drive.google.com/file/d/1hHVdLS--rs7YfPFiIrMZl93s3svGTGoY/view",
            category: "Web & AI",
        },
        {
            id: "general-disease-prediction",
            filename: "MultiDiseasePredictor.py",
            title: "Multi-Disease AI Prediction Platform",
            description: "A specialized healthcare web application utilizing an ensemble of five supervised machine learning models. It provides early-stage risk assessment for critical conditions including COVID-19, heart disease, diabetes, breast cancer, and over 50 other symptom-based illnesses, aiming to support preliminary medical screening.",
            techStack: ["Python", "Scikit-Learn", "Streamlit", "Pandas", "NumPy"],
            features: [
                "Ensemble ML Architecture deploying 5 distinct supervised models for high-accuracy predictions",
                "Critical Disease Screening for Heart Disease, Diabetes, Breast Cancer, and COVID-19",
                "Symptom-Based Diagnosis engine capable of identifying 50+ general illnesses",
                "Interactive Web Interface built with Streamlit for real-time user assessment",
                "Data-driven insights providing probability scores for medical risk analysis"
            ],
            videoUrl: "https://drive.google.com/file/d/1GkWGDLfS8JjNi4BMKfn7pttgOOlws87j/view",
            category: "Web & AI",
        },
        {
            id: "gitlab-ci-pipeline",
            filename: ".gitlab-ci.yml",
            title: "Cloud-Native CI/CD Pipeline Architecture",
            description: "A robust, 100% cloud-based Continuous Integration and Deployment pipeline designed for high-availability healthcare applications. This automated workflow orchestrates the entire software delivery lifecycle, ensuring code quality, security compliance, and rapid deployment cycles without manual intervention.",
            techStack: ["GitLab CI", "Docker", "SonarCloud", "Cloud Platform", "Bash"],
            features: [
                "Comprehensive 6-Stage Pipeline: Monitor → Artifacts → Sonar Check → Test → Build → Deploy",
                "SonarCloud Integration enabling rigorous static code analysis and security gates",
                "Automated Artifact Management generating and versioning build deliverables",
                "Cloud-Native Deployment ensuring seamless delivery to target production environments",
                "Scalable Infrastructure automating reliable 100% cloud-based delivery workflows"
            ],
            videoUrl: "#",
            category: "DevOps & Cloud",
        },
        {
            id: "mean-ecommerce",
            filename: "MeanCommerce.ts",
            title: "Full-Stack Digital Marketplace Architecture",
            description: "A high-performance e-commerce ecosystem built on the MEAN stack (MongoDB, Express, Angular, Node.js). This platform delivers a seamless digital shopping experience with robust backend management for users, products, and complex order workflows, designed for scalability and responsiveness.",
            techStack: ["Angular", "Node.js", "Express.js", "MongoDB", "TypeScript"],
            features: [
                "End-to-End MEAN Stack Architecture ensuring unified JavaScript development",
                "Advanced Product & Inventory Management with real-time updates",
                "Secure User Authentication & Profile System with role-based access control",
                "Responsive Frontend Design optimized for mobile and desktop conversions",
                "Integrated Order Processing Pipeline handling transactions and status tracking"
            ],
            videoUrl: "https://drive.google.com/file/d/1j-lSPOy7a6qyqEHi_oxeLQiB3iF64so9/view",
            category: "Web & AI",
        }
    ];

    const [collapsedFolders, setCollapsedFolders] = useState<Set<string>>(new Set());

    const categories = ["Web & AI", "Mobile & AI", "DevOps & Cloud"] as const;

    const projectsByCategory = categories.reduce((acc, category) => {
        acc[category] = projects.filter(p => p.category === category);
        return acc;
    }, {} as Record<string, Project[]>);

    const toggleFolder = (folder: string) => {
        const newCollapsed = new Set(collapsedFolders);
        if (newCollapsed.has(folder)) {
            newCollapsed.delete(folder);
        } else {
            newCollapsed.add(folder);
        }
        setCollapsedFolders(newCollapsed);
    };

    const selectedProject = projects.find(p => p.id === activeProject) || projects[0];

    return (
        <section className="min-h-screen px-4 md:px-6 py-16 md:py-32 relative z-10" id="projects">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight text-center md:text-left">
                    Featured Projects
                </h2>
                <p className="text-white/70 text-base md:text-lg mb-8 md:mb-12 text-center md:text-left font-light">
                    Freelance & personal projects showcasing innovative AI, mobile, and full-stack development solutions
                </p>

                {/* Mac-Style Glass Window Container */}
                <div className="bg-[#1e1e1e]/90 backdrop-blur-2xl border border-white/10 rounded-xl md:rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[600px] md:h-[650px] ring-1 ring-white/5">

                    {/* Mobile Category Tabs (Horizontal Scroll) */}
                    <div className="md:hidden bg-[#252526]/50 border-b border-white/5 p-4">
                        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin-horizontal">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => {
                                        const firstProject = projectsByCategory[category][0];
                                        if (firstProject) setActiveProject(firstProject.id);
                                    }}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 whitespace-nowrap ${projectsByCategory[category].some(p => p.id === activeProject)
                                        ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                                        : "text-white/60 hover:bg-white/5 hover:text-white border border-white/10"
                                        }`}
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" />
                                    </svg>
                                    <span className="font-medium text-sm">{category}</span>
                                    <span className="text-xs text-white/40">({projectsByCategory[category].length})</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar - "Explorer" */}
                    <div className="hidden md:flex md:w-64 bg-[#252526]/50 border-r border-white/5 flex-col backdrop-blur-md">
                        {/* Mac Traffic Lights */}
                        <div className="p-4 flex gap-2 border-b border-white/5 bg-[#252526]/50">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-sm"></div>
                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm"></div>
                            <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-sm"></div>
                        </div>

                        <div className="flex-1 overflow-y-auto pt-2">
                            <div className="px-2 pb-2">
                                <div className="flex items-center text-xs font-bold text-white/40 uppercase tracking-widest px-3 mb-2 mt-2">
                                    <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                    PORTFOLIO
                                </div>

                                {categories.map((category) => (
                                    <div key={category} className="mb-1">
                                        {/* Folder Header */}
                                        <button
                                            onClick={() => toggleFolder(category)}
                                            className="w-full flex items-center gap-2 px-3 py-1.5 text-xs text-white/60 hover:text-white hover:bg-white/5 transition-colors rounded"
                                        >
                                            <svg
                                                className={`w-3 h-3 transition-transform ${collapsedFolders.has(category) ? '' : 'rotate-90'}`}
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                            <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" />
                                            </svg>
                                            <span className="font-medium">{category}</span>
                                            <span className="ml-auto text-[10px] text-white/40">{projectsByCategory[category].length}</span>
                                        </button>

                                        {/* Folder Contents */}
                                        {!collapsedFolders.has(category) && (
                                            <div className="ml-3 mt-1 space-y-0.5">
                                                {projectsByCategory[category].map((project) => (
                                                    <button
                                                        key={project.id}
                                                        onClick={() => setActiveProject(project.id)}
                                                        className={`w-full flex items-center gap-2.5 px-3 py-2 text-sm transition-all rounded-lg group ${activeProject === project.id
                                                            ? "bg-[#37373d] text-white shadow-sm"
                                                            : "text-white/60 hover:bg-[#2a2d2e] hover:text-white"
                                                            }`}
                                                    >
                                                        {/* Dynamic Tech Icon */}
                                                        {project.filename.endsWith('.tsx') || project.filename.endsWith('.ts') || project.filename.endsWith('.yml') ? (
                                                            <div className="w-4 h-4 flex items-center justify-center text-blue-400">
                                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z" /></svg>
                                                            </div>
                                                        ) : (
                                                            <div className="w-4 h-4 flex items-center justify-center text-yellow-400">
                                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l7 4.5-7 4.5z" /></svg>
                                                            </div>
                                                        )}
                                                        <span className="truncate font-medium tracking-wide text-xs">{project.filename}</span>
                                                        {activeProject === project.id && (
                                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 ml-auto shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
                                                        )}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 flex flex-col bg-[#1e1e1e]/80 min-h-0">
                        {/* Editor Tab Bar */}
                        <div className="flex bg-[#2d2d2d] border-b border-black/20 overflow-x-auto shrink-0">
                            {projects.map((project) => (
                                <button
                                    key={project.id}
                                    onClick={() => setActiveProject(project.id)}
                                    className={`px-3 md:px-4 py-2 md:py-2.5 text-xs font-medium flex items-center gap-2 border-r border-white/5 transition-colors min-w-[120px] md:min-w-[140px] max-w-[180px] md:max-w-[200px] ${activeProject === project.id
                                        ? "bg-[#1e1e1e] text-blue-400 border-t-2 border-t-blue-500"
                                        : "bg-[#252526] text-white/50 hover:bg-[#2a2d2e] hover:text-white/80"
                                        }`}
                                >
                                    <span className="truncate">{project.filename}</span>
                                    {activeProject === project.id && <span className="text-[10px] ml-auto opacity-50">●</span>}
                                </button>
                            ))}
                        </div>

                        {/* Split View Content */}
                        <div className="flex-1 p-4 md:p-8 overflow-y-scroll scrollbar-thin">
                            <div className="space-y-10">

                                {/* Header Block */}
                                <div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-purple-400 font-mono text-sm">const</span>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{selectedProject.title}</h3>
                                        <span className="te
                                        xt-white/30 font-mono text-sm">=</span>
                                    </div>
                                    <div className="max-w-4xl">
                                        <p className="text-base md:text-lg text-white/70 leading-relaxed font-light border-l-2 border-white/10 pl-3 md:pl-4">
                                            {selectedProject.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Features List - Limited Width with Scroll */}
                                <div>
                                    <div className="text-sm font-mono text-white/40 mb-4 flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                                        key_features
                                    </div>
                                    <div className="max-w-2xl">
                                        <ul className="grid grid-cols-1 gap-3">
                                            {selectedProject.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center gap-3 text-sm text-white/80 bg-white/5 p-4 rounded-lg border border-white/5 hover:border-white/10 transition-colors group">
                                                    <span className="text-green-400 font-mono select-none flex-shrink-0 group-hover:scale-110 transition-transform text-lg leading-none">✓</span>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Tech Stack - Full Width */}
                                <div>
                                    <div className="text-sm font-mono text-white/40 mb-4 flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                                        skills
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.techStack.map((tech, idx) => (
                                            <span key={idx} className="px-4 py-2 bg-[#252526] hover:bg-[#2d2d30] border border-white/10 rounded-lg text-sm font-medium text-blue-300 transition-colors cursor-default flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Buttons - Only show if project has links */}
                                {(selectedProject.githubUrl || selectedProject.videoUrl || selectedProject.liveUrl) && (
                                    <div className="flex flex-col md:flex-row gap-3 md:gap-4 pt-4 md:pt-6 border-t border-white/10 justify-start">
                                        {selectedProject.githubUrl && (
                                            <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="min-w-fit bg-[#24292e] hover:bg-[#2f363d] text-white py-3 px-6 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all border border-white/10 shadow-lg hover:shadow-xl hover:scale-[1.02]">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.399 1.02 0 2.047.133 3.006.4 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                                View Source
                                            </a>
                                        )}
                                        {selectedProject.videoUrl && (
                                            <a href={selectedProject.videoUrl} target="_blank" rel="noopener noreferrer" className="min-w-fit bg-[#252526] hover:bg-[#2d2d30] text-white py-3 px-6 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all border border-white/10 shadow-lg hover:shadow-xl hover:scale-[1.02]">
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0 0 10 9.87v4.263a1 1 0 0 0 1.555.832l3.197-2.132a1 1 0 0 0 0-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" /></svg>
                                                Video Demo
                                            </a>
                                        )}
                                        {selectedProject.liveUrl && (
                                            <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="min-w-fit bg-[#252526] hover:bg-[#2d2d30] text-white py-3 px-6 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all border border-white/10 shadow-lg hover:shadow-xl hover:scale-[1.02]">
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                                View Live
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Status Bar */}
                        <div className="h-7 bg-[#007acc]/90 backdrop-blur text-white flex items-center px-4 text-[10px] select-none justify-between border-t border-white/5 font-mono">
                            <div className="flex gap-4">
                                <div className="flex items-center gap-1.5 hover:bg-white/10 px-2 py-0.5 rounded transition-colors cursor-pointer">
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                                    <span>main*</span>
                                </div>
                            </div>
                            <div className="flex gap-3 opacity-80">
                                <div className="flex items-center gap-1 hover:text-white cursor-pointer">
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                    Preview
                                </div>
                                <span>TSX</span>
                                <span>UTF-8</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
