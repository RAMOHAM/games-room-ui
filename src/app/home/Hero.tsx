"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-20 px-6 md:px-16 overflow-hidden bg-gamesNeutral">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-main-page.png"
                    alt="Lounge Background"
                    fill
                    sizes="100vw"
                    className="object-cover opacity-50"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gamesNeutral/90 via-gamesNeutral/70 to-transparent" />
            </div>

            <div className="relative w-full max-w-[1440px] mx-auto z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
                <div className="flex-1 text-center lg:text-left">
                    <h1 className="text-5xl md:text-7xl lg:text-[100px] font-bold font-heading leading-tight mb-8 text-white">
                        Level Up Your <br />
                        <span className="text-gamesPrimary">Leisure.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 font-sans max-w-xl mx-auto lg:mx-0 mb-12 leading-relaxed">
                        The ultimate high-octane social hub. From precision pool to competitive console gaming, experience entertainment redefined.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                        <Button className="bg-gamesPrimary hover:bg-gamesPrimary/80 hover:text-white text-black rounded-lg px-10 py-8 text-lg font-bold font-sans h-auto">
                            Book Your Table
                        </Button>
                        <Button variant="outline" className="border-gamesSecondary/30 text-gamesSecondary hover:bg-gamesSecondary/10 hover:text-white rounded-lg px-10 py-8 text-lg font-bold font-sans h-auto bg-transparent border-2">
                            Explore The Arena
                        </Button>
                    </div>
                </div>

                <div className="flex-1 relative w-full max-w-2xl aspect-[1.2/1]">
                    {/* Pink glow effect background */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gamesSecondary/40 blur-[120px] rounded-full z-0" />

                    {/* Image Frame */}
                    <div className="relative w-full h-full rounded-[40px] overflow-hidden border-[20px] border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] transform -rotate-1 lg:-rotate-2">
                        <Image
                            src="/hero-game-controller.png"
                            alt="Game Controller"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
