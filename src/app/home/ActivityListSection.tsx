"use client";

import ActivityCard from "./ActivityCard";
import { Waves, Target, Gamepad2 } from "lucide-react";

const ActivityListSection = () => {
    const activities = [
        {
            title: "Pool",
            description: "Professional-grade tables with high-speed cloth and precision cues for the ultimate game.",
            imageSrc: "/activities/pool-activity-card.png",
            status: "Available Now",
            Icon: Waves,
            color: "gamesPrimary" as const,
        },
        {
            title: "Ping Pong",
            description: "Olympic-standard tables and paddles for fast-paced rallies and intense friendly competition.",
            imageSrc: "/activities/ping-pong-activity-card.png",
            status: "Peak Hours: 6PM - 10PM",
            Icon: Target,
            color: "gamesSecondary" as const,
        },
        {
            title: "PlayStation",
            description: "Latest PS5 consoles on 65\" OLED screens with immersive surround sound and 4K resolution.",
            imageSrc: "/activities/playstation-activity-card.png",
            status: "New Games Added Weekly",
            Icon: Gamepad2,
            color: "gamesTertiary" as const,
        },
    ];

    return (
        <section id="the-arena" className="py-24 px-6 md:px-16 bg-gamesNeutral overflow-hidden">
            <div className="max-w-[1440px] mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl">
                        <span className="text-gamesTertiary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                            Unrivaled Facilities
                        </span>
                        <h2 className="text-5xl md:text-7xl font-bold text-white font-heading tracking-tight mb-0">
                            <span className="text-white">Activities</span>
                        </h2>
                    </div>
                    <p className="text-gray-400 text-lg font-sans max-w-md leading-relaxed">
                        State-of-the-art equipment paired with a premium lounge atmosphere for the competitive spirit.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {activities.map((activity, index) => (
                        <ActivityCard key={index} {...activity} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ActivityListSection;
