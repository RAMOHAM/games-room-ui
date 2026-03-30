"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const HomePageNavbar = () => {
    const navItems = ["Home", "Activities", "Pricing"];
    return (
        <header className="absolute top-0 left-0 right-0 z-50 bg-gamesNeutral">
            <nav className="flex items-center justify-between px-6 md:px-16 py-6 w-full max-w-[1440px] mx-auto text-white">
                <div className="text-xl md:text-2xl font-bold font-heading tracking-tight text-gamesPrimary">
                    The Level Up Lounge
                </div>
                <div className="hidden md:flex items-center gap-16 font-sans text-lg font-medium">
                    {navItems.map((item, index) => (
                        <Link key={index} href="" className="text-gray-300 hover:text-gamesPrimary transition-colors">{item}</Link>
                    ))}
                </div>
                <Button className="bg-gamesPrimary hover:bg-gamesPrimary/90 text-black rounded-lg px-8 py-5 text-sm font-bold font-sans">
                    Book Now
                </Button>
            </nav>
        </header>
    );
};

export default HomePageNavbar;