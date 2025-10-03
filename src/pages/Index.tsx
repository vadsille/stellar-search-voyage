import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Database, Sparkles, Target, Users } from "lucide-react";
import heroImage from "@/assets/hero-space.jpg";

const Index = () => {
  const navigate = useNavigate();

  const stats = [
    { value: "608+", label: "Publications" },
    { value: "15+", label: "Research Topics" },
    { value: "30+", label: "Missions" },
  ];

  const features = [
    {
      icon: Database,
      title: "Comprehensive Database",
      description: "Access to 608+ curated NASA publications",
    },
    {
      icon: Sparkles,
      title: "AI Summarization",
      description: "Get instant insights with AI-powered analysis",
    },
    {
      icon: Target,
      title: "Mission Planning",
      description: "Data-driven insights for Mars missions",
    },
    {
      icon: Users,
      title: "Multi-Role Support",
      description: "Tailored views for scientists, managers, and planners",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-screen overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        </div>
        
        <div className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 py-20">
          <div className="max-w-5xl space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-bold text-gradient leading-tight">
                Space Biology
                <br />
                Knowledge Engine
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Discover, analyze, and unlock insights from 608+ NASA space biology publications. 
                Your gateway to understanding life beyond Earth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button
                onClick={() => navigate("/explore")}
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
              >
                Explore Now
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="glass-panel p-6 rounded-xl">
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="glass-panel p-10 rounded-3xl space-y-6">
            <h2 className="text-4xl font-bold text-gradient">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To democratize access to space biology research and empower the next generation 
              of scientists, researchers, and mission planners with cutting-edge knowledge 
              discovery tools. We bridge the gap between raw research data and actionable 
              insights for humanity's journey to Mars and beyond.
            </p>
          </div>

          <div className="glass-panel p-10 rounded-3xl space-y-6">
            <h2 className="text-4xl font-bold text-gradient">
              Our Vision
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A future where every researcher, student, and space enthusiast can effortlessly 
              explore the vast landscape of space biology knowledge. We envision AstroBase as 
              the cornerstone platform that accelerates discoveries and enables sustainable 
              human presence in space.
            </p>
          </div>
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
