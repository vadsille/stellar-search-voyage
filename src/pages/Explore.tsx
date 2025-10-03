import { useState, useEffect } from "react";
import { SurveyModal, UserType } from "@/components/SurveyModal";
import { SearchFilters } from "@/components/SearchFilters";
import { ResearchCard } from "@/components/ResearchCard";
import { AIChatButton } from "@/components/AIChatButton";
import heroImage from "@/assets/hero-space.jpg";

const Index = () => {
  const [showSurvey, setShowSurvey] = useState(true);
  const [userType, setUserType] = useState<UserType>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");

  // Mock research data
  const researchData = [
    {
      id: "1",
      title: "Microgravity Effects on Cellular Growth",
      description: "Study of cellular behavior and growth patterns in microgravity environments aboard the ISS.",
      category: "Space Biology",
      date: "March 15, 2024",
      views: 1234,
    },
    {
      id: "2",
      title: "Solar Wind Impact on Spacecraft Materials",
      description: "Analysis of material degradation due to solar wind exposure during long-duration missions.",
      category: "Physics",
      date: "February 28, 2024",
      views: 856,
    },
    {
      id: "3",
      title: "AI-Powered Autonomous Navigation Systems",
      description: "Development of machine learning algorithms for spacecraft autonomous navigation in deep space.",
      category: "Technology",
      date: "March 10, 2024",
      views: 2103,
    },
    {
      id: "4",
      title: "Mars Soil Composition Analysis",
      description: "Detailed chemical analysis of Martian regolith samples collected by Perseverance rover.",
      category: "Exploration",
      date: "January 22, 2024",
      views: 3421,
    },
    {
      id: "5",
      title: "Radiation Shielding for Deep Space Missions",
      description: "Novel materials and techniques for protecting astronauts from cosmic radiation.",
      category: "Technology",
      date: "March 5, 2024",
      views: 1567,
    },
    {
      id: "6",
      title: "Plant Growth in Lunar Regolith Simulant",
      description: "Experimental cultivation of terrestrial plants in simulated lunar soil conditions.",
      category: "Space Biology",
      date: "February 14, 2024",
      views: 992,
    },
  ];

  const handleUserTypeSelect = (type: UserType) => {
    setUserType(type);
    setShowSurvey(false);
  };

  const filteredResearch = researchData.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === "all" || item.category.toLowerCase().includes(category);
    return matchesSearch && matchesCategory;
  });

  const getWelcomeMessage = () => {
    switch (userType) {
      case "scientist":
        return "Access cutting-edge research and technical publications";
      case "explorer":
        return "Discover the wonders of space exploration";
      case "adventurer":
        return "Embark on an exciting journey through space!";
      default:
        return "Explore NASA's research archive";
    }
  };

  return (
    <div className="min-h-screen">
      <SurveyModal open={showSurvey} onSelect={handleUserTypeSelect} />

      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div className="max-w-4xl space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-6xl font-bold text-gradient">
              NASA Research Portal
            </h1>
            <p className="text-2xl text-foreground/90">
              {getWelcomeMessage()}
            </p>
            <div className="flex gap-4 justify-center text-sm text-muted-foreground">
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
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-8">
        <SearchFilters
          userType={userType}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          category={category}
          onCategoryChange={setCategory}
        />

        <div>
          <h2 className="text-2xl font-bold mb-6 text-foreground">
            Research Publications ({filteredResearch.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResearch.map((research) => (
              <ResearchCard key={research.id} {...research} />
            ))}
          </div>
        </div>
      </div>

      <AIChatButton />
    </div>
  );
};

export default Index;
