import React from 'react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { BackgroundEffects } from '@/components/construction/BackgroundEffects';
import { ConstructionCard } from '@/components/construction/ConstructionCard';
import { Toaster } from '@/components/ui/sonner';
export default function HomePage() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-background selection:bg-primary/10">
      {/* Visual background layers */}
      <BackgroundEffects />
      {/* Utility: Theme Toggle */}
      <ThemeToggle className="fixed top-6 right-6 z-50" />
      {/* Main Content Area */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 md:py-10 lg:py-12 flex flex-col items-center justify-center min-h-[80vh]">
          <ConstructionCard />
        </div>
      </main>
      {/* Footer Branded Meta */}
      <footer className="absolute bottom-8 left-0 right-0 z-10 text-center">
        <p className="text-xs tracking-widest uppercase text-muted-foreground/60 font-medium">
          &copy; {new Date().getFullYear()} Layer7 POC &bull; Built for Performance
        </p>
      </footer>
      <Toaster position="bottom-center" />
    </div>
  );
}
export { HomePage };