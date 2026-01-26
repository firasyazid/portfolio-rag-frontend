"use client";

import { SiPython, SiReact, SiNodedotjs, SiNextdotjs, SiTypescript, SiMongodb, SiPostgresql, SiDocker, SiFastapi, SiRedis, SiTailwindcss } from "react-icons/si";
import { TbBrain, TbLink, TbBrandMeta } from "react-icons/tb";
import { IconType } from "react-icons";

interface Tech {
    name: string;
    Icon: IconType;
}

const techs: Tech[] = [
    { name: "Machine Learning", Icon: TbBrain },
    { name: "Python", Icon: SiPython },
    { name: "React", Icon: SiReact },
    { name: "Node.js", Icon: SiNodedotjs },
    { name: "Next.js", Icon: SiNextdotjs },
    { name: "TypeScript", Icon: SiTypescript },
    { name: "MongoDB", Icon: SiMongodb },
    { name: "PostgreSQL", Icon: SiPostgresql },
    { name: "Docker", Icon: SiDocker },
    { name: "FastAPI", Icon: SiFastapi },
    { name: "Redis", Icon: SiRedis },
    { name: "LangChain", Icon: TbLink },
    { name: "LLaMA", Icon: TbBrandMeta },
    { name: "Tailwind", Icon: SiTailwindcss },
];

// Duplicate for seamless infinite loop
const allTechs = [...techs, ...techs];

export default function TechStack() {
    return (
        <section className="px-4 md:px-6 py-20 md:py-32 relative z-10 overflow-hidden" id="techstack">
            <div className="max-w-7xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3 text-cyan-300 tracking-tight">
                    Tech Stack
                </h2>
                <p className="text-white/70 text-base md:text-lg font-light">
                    Technologies and tools I work with to build modern applications
                </p>
            </div>

            {/* Auto-scrolling Container */}
            <div className="relative">
                {/* Animated Slider */}
                <div className="flex gap-6 md:gap-10 animate-scroll">
                    {allTechs.map((tech, index) => {
                        const Icon = tech.Icon;
                        return (
                            <div
                                key={`${tech.name}-${index}`}
                                className="flex-shrink-0 group"
                            >
                                <div className="flex flex-col items-center gap-4">
                                    {/* Icon Container */}
                                    <div className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center bg-gradient-to-br from-[#1e1e2e]/80 to-[#252535]/60 border border-white/10 rounded-2xl group-hover:border-cyan-500/50 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all duration-500 backdrop-blur-sm group-hover:scale-110">
                                        <Icon className="w-10 h-10 md:w-14 md:h-14 text-white/60 group-hover:text-cyan-400 transition-colors duration-500" />
                                    </div>
                                    {/* Label */}
                                    <span className="text-sm md:text-base font-medium text-white/50 group-hover:text-cyan-300 transition-colors duration-500 text-center whitespace-nowrap">
                                        {tech.name}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                .animate-scroll {
                    animation: scroll 30s linear infinite;
                }

                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
}
