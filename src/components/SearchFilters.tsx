import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import { UserType } from "./SurveyModal";

interface SearchFiltersProps {
  userType: UserType;
  searchTerm: string;
  onSearchChange: (value: string) => void;
  category: string;
  onCategoryChange: (value: string) => void;
}

export const SearchFilters = ({ userType, searchTerm, onSearchChange, category, onCategoryChange }: SearchFiltersProps) => {
  const getPlaceholder = () => {
    switch (userType) {
      case "scientist":
        return "Search publications, experiments, datasets...";
      case "explorer":
        return "Discover space missions and research...";
      case "adventurer":
        return "Find cool space stuff!";
      default:
        return "Search research...";
    }
  };

  return (
    <div className="glass-panel p-6 rounded-xl space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={getPlaceholder()}
          className="pl-10 bg-background/50 border-border focus:border-primary transition-colors"
        />
      </div>

      <div className="flex gap-4">
        <Select value={category} onValueChange={onCategoryChange}>
          <SelectTrigger className="bg-background/50 border-border">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent className="glass-panel border-border">
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="biology">Space Biology</SelectItem>
            <SelectItem value="physics">Physics</SelectItem>
            <SelectItem value="technology">Technology</SelectItem>
            <SelectItem value="exploration">Exploration</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="bg-background/50 border-border">
            <SelectValue placeholder="Year" />
          </SelectTrigger>
          <SelectContent className="glass-panel border-border">
            <SelectItem value="2024">2024</SelectItem>
            <SelectItem value="2023">2023</SelectItem>
            <SelectItem value="2022">2022</SelectItem>
            <SelectItem value="older">Older</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
