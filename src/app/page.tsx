import HomePageNavbar from "@/app/home/HomePageNavbar";
import Hero from "@/app/home/Hero";
import ActivityListSection from "@/app/home/ActivityListSection";
import BookingComponent from "@/app/home/BookingComponent";
import Footer from "@/app/home/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gamesNeutral overflow-x-hidden">
      <HomePageNavbar />
      <Hero />
      <ActivityListSection />
      <BookingComponent />
      <Footer />
    </main>
  );
}
