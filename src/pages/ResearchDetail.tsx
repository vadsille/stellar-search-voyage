import { useParams, Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Eye, FileText, Clock, Network } from "lucide-react";
import { AIChatButton } from "@/components/AIChatButton";

export default function ResearchDetail() {
  const { id } = useParams();

  // Mock data - replace with actual data fetching
  const research = {
    id: id || "1",
    title: "Microgravity Effects on Cellular Growth",
    description: "Comprehensive study of cellular behavior and growth patterns in microgravity environments aboard the International Space Station.",
    category: "Space Biology",
    date: "March 15, 2024",
    views: 1234,
    details: {
      abstract: "This research investigates the fundamental mechanisms of cellular growth and adaptation in microgravity conditions. Our experiments conducted aboard the ISS revealed significant alterations in cell morphology, growth rates, and gene expression patterns.",
      methodology: "We cultured various cell lines in specialized bioreactors designed for microgravity research. Samples were analyzed using advanced microscopy and genomic sequencing.",
      findings: "Key findings include a 30% increase in cell division rates and altered protein expression related to cytoskeleton organization.",
    },
    timeline: [
      { date: "Jan 2024", event: "Experiment Design Phase", status: "completed" },
      { date: "Feb 2024", event: "ISS Deployment", status: "completed" },
      { date: "Mar 2024", event: "Data Collection", status: "completed" },
      { date: "Apr 2024", event: "Analysis & Publication", status: "current" },
      { date: "May 2024", event: "Follow-up Studies", status: "upcoming" },
    ],
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost" size="icon" className="hover:bg-primary/20">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-gradient">Research Details</h1>
        </div>

        {/* Research Header */}
        <div className="glass-panel p-8 rounded-xl space-y-4">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <Badge className="bg-gradient-to-r from-primary to-secondary text-background">
                {research.category}
              </Badge>
              <h2 className="text-4xl font-bold text-foreground">{research.title}</h2>
            </div>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{research.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                <span>{research.views}</span>
              </div>
            </div>
          </div>
          <p className="text-lg text-muted-foreground">{research.description}</p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="details" className="space-y-6">
          <TabsList className="glass-panel border-2">
            <TabsTrigger value="details" className="data-[state=active]:bg-primary/20">
              <FileText className="h-4 w-4 mr-2" />
              Details
            </TabsTrigger>
            <TabsTrigger value="timeline" className="data-[state=active]:bg-primary/20">
              <Clock className="h-4 w-4 mr-2" />
              Timeline
            </TabsTrigger>
            <TabsTrigger value="knowledge" className="data-[state=active]:bg-primary/20">
              <Network className="h-4 w-4 mr-2" />
              Knowledge Graph
            </TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="space-y-6">
            <div className="glass-panel p-8 rounded-xl space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Abstract</h3>
                <p className="text-muted-foreground leading-relaxed">{research.details.abstract}</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Methodology</h3>
                <p className="text-muted-foreground leading-relaxed">{research.details.methodology}</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Key Findings</h3>
                <p className="text-muted-foreground leading-relaxed">{research.details.findings}</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="timeline" className="space-y-4">
            <div className="glass-panel p-8 rounded-xl">
              <div className="relative">
                {research.timeline.map((item, index) => (
                  <div key={index} className="relative pb-8 last:pb-0">
                    {index !== research.timeline.length - 1 && (
                      <span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gradient-to-b from-primary to-secondary" aria-hidden="true" />
                    )}
                    <div className="relative flex items-start group">
                      <span className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center ring-4 ring-background glow-primary">
                        <div className={`h-2 w-2 rounded-full ${item.status === 'completed' ? 'bg-background' : item.status === 'current' ? 'bg-accent animate-pulse' : 'bg-muted'}`} />
                      </span>
                      <div className="ml-4 min-w-0 flex-1">
                        <div className="text-sm font-semibold text-primary">{item.date}</div>
                        <div className="mt-1 text-lg font-medium text-foreground">{item.event}</div>
                        <Badge className="mt-2" variant={item.status === 'completed' ? 'default' : item.status === 'current' ? 'secondary' : 'outline'}>
                          {item.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="knowledge" className="space-y-4">
            <div className="glass-panel p-8 rounded-xl">
              <div className="flex items-center justify-center h-96">
                <div className="text-center space-y-4">
                  <Network className="h-24 w-24 mx-auto text-primary animate-pulse" />
                  <h3 className="text-2xl font-bold text-gradient">Knowledge Graph Visualization</h3>
                  <p className="text-muted-foreground max-w-md">
                    Interactive knowledge graph showing relationships between research entities, publications, and datasets.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Advanced visualization coming soon...
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <AIChatButton />
    </div>
  );
}
