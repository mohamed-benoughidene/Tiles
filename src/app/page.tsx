import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { BentoGrid } from "@/components/home/BentoGrid";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-display bg-background-light dark:bg-background-dark text-zinc-900 dark:text-white overflow-x-hidden">
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow flex items-center justify-center py-12 px-6 lg:px-12 relative overflow-hidden">
        {/* Ambient Background Glows */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl w-full grid lg:grid-cols-12 gap-12 lg:gap-20 items-center z-10">
          <HeroSection />
          <BentoGrid />
        </div>
      </main>

      <Footer />
    </div>
  );
}
