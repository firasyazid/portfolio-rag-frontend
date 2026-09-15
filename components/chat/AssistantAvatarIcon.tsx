interface AssistantAvatarIconProps {
    className?: string;
    size?: "sm" | "md" | "lg";
}

const sizeMap = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-7 w-7",
};

/** Branded mark for Firas AI — chat bubble + profile, no generic sparkles */
export const AssistantAvatarIcon = ({
    className = "",
    size = "sm",
}: AssistantAvatarIconProps) => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${sizeMap[size]} ${className}`}
            aria-hidden="true"
        >
            <rect
                x="3"
                y="4"
                width="14"
                height="11"
                rx="3"
                className="stroke-cyan-400"
                strokeWidth="1.5"
                fill="rgb(34 211 238 / 0.12)"
            />
            <path
                d="M7 9.5h6M7 12h4"
                className="stroke-cyan-400/90"
                strokeWidth="1.25"
                strokeLinecap="round"
            />
            <path
                d="M8 15v1.5c0 .8.7 1.5 1.5 1.5H11l2.5 2.5V18h1.5c.8 0 1.5-.7 1.5-1.5V15"
                className="stroke-cyan-400/70"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <circle
                cx="17.5"
                cy="8.5"
                r="4.25"
                className="stroke-cyan-400"
                strokeWidth="1.5"
                fill="rgb(34 211 238 / 0.18)"
            />
            <circle cx="16.25" cy="7.75" r="0.65" className="fill-cyan-300" />
            <circle cx="18.75" cy="7.75" r="0.65" className="fill-cyan-300" />
            <path
                d="M16.4 10.1c.55.35 1.2.35 1.75 0"
                className="stroke-cyan-300/90"
                strokeWidth="1"
                strokeLinecap="round"
            />
        </svg>
    );
};
