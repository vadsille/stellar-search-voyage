import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Eye } from "lucide-react";
import { Link } from "react-router-dom";

interface ResearchCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  views: number;
}

export const ResearchCard = ({ id, title, description, category, date, views }: ResearchCardProps) => {
  return (
    <Link to={`/research/${id}`}>
      <Card className="group glass-panel p-6 hover:glow-primary transition-all duration-300 cursor-pointer h-full hover:scale-105 border-2">
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <Badge className="bg-gradient-to-r from-primary to-secondary text-background">
              {category}
            </Badge>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Eye className="h-4 w-4" />
              <span>{views}</span>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-gradient transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground line-clamp-3">
              {description}
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground pt-4 border-t border-border">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
};
