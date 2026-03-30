import HomePageNavbar from "@/app/home/HomePageNavbar";
import Hero from "@/app/home/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-gamesNeutral overflow-x-hidden">
      <HomePageNavbar />
      <Hero />
    </main>
  );
}

