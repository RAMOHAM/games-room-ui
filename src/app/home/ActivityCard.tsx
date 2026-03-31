"use client";

import Image from "next/image";
import { LucideIcon } from "lucide-react";

interface ActivityCardProps {
    title: string;
    description: string;
    imageSrc: string;
    status: string;
    Icon: LucideIcon;
    color: "gamesPrimary" | "gamesSecondary" | "gamesTertiary";
}

const ActivityCard = ({ title, description, imageSrc, status, Icon, color }: ActivityCardProps) => {
    // Mapping for colors to ensure Tailwind picks them up correctly
    const colorClasses = {
        gamesPrimary: "text-gamesPrimary bg-gamesPrimary",
        gamesSecondary: "text-gamesSecondary bg-gamesSecondary",
        gamesTertiary: "text-gamesTertiary bg-gamesTertiary",
    };

    const textColor = colorClasses[color].split(" ")[0];
    const bgColor = colorClasses[color].split(" ")[1];

    return (
        <div className="bg-gamesNeutralLight rounded-[32px] overflow-hidden border border-white/5 flex flex-col h-full transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] group">
            <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#15151A] via-transparent to-transparent opacity-60" />
            </div>

            <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white font-heading tracking-tight">{title}</h3>
                    <div className={`${textColor}`}>
                        <Icon className="w-6 h-6 stroke-[2.5]" />
                    </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1 font-sans">
                    {description}
                </p>

                <div className="flex items-center gap-2.5 mt-auto">
                    <div className={`w-2 h-2 rounded-full ${bgColor} animate-pulse`} />
                    <span className={`text-[10px] font-bold ${textColor} tracking-[0.2em] uppercase font-sans`}>
                        {status}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ActivityCard;
