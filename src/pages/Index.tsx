import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Rocket, Microscope, Database, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-space.jpg";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Database,
      title: "Vast Research Archive",
      description: "Access thousands of NASA research publications and datasets",
    },
    {
      icon: Microscope,
      title: "Scientific Excellence",
      description: "Cutting-edge studies from space biology to deep space exploration",
    },
    {
      icon: Sparkles,
      title: "AI-Powered Discovery",
      description: "Intelligent search and personalized recommendations",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <div className="max-w-5xl space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="space-y-4">
              <h1 className="text-7xl md:text-8xl font-bold text-gradient leading-tight">
                Explore the Universe
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground/90">
                of NASA Research
              </h2>
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Discover groundbreaking space research, from microgravity experiments 
              to deep space exploration missions
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button
                onClick={() => navigate("/explore")}
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Begin Exploration
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-foreground/30 rounded-full" />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-16 text-gradient">
          What You'll Discover
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group glass-panel p-8 rounded-2xl hover:glow-primary transition-all duration-300 hover:scale-105"
              >
                <div className="mb-6">
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-primary to-secondary">
                    <Icon className="h-8 w-8 text-background" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        <div className="glass-panel p-12 rounded-3xl space-y-6">
          <h2 className="text-4xl font-bold text-gradient">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-muted-foreground">
            Join scientists, explorers, and space enthusiasts from around the world
          </p>
          <Button
            onClick={() => navigate("/explore")}
            size="lg"
            className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity mt-6"
          >
            <Rocket className="mr-2 h-5 w-5" />
            Launch Portal
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div className="flex gap-4">
              <a href="https://www.nasa.gov/osdr/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                NASA OSDR
              </a>
              <span>•</span>
              <a href="https://public.ksc.nasa.gov/nslsl/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                NSLSL
              </a>
              <span>•</span>
              <a href="https://taskbook.nasaprs.com/tbp/welcome.cfm" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                NASA Task Book
              </a>
            </div>
            <p>© 2024 NASA Research Portal - Space Apps Challenge</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
