import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Rocket, Microscope, Sparkles } from "lucide-react";

export type UserType = "scientist" | "explorer" | "adventurer" | null;

interface SurveyModalProps {
  open: boolean;
  onSelect: (type: UserType) => void;
}

export const SurveyModal = ({ open, onSelect }: SurveyModalProps) => {
  const [selected, setSelected] = useState<UserType>(null);

  const userTypes = [
    {
      type: "scientist" as UserType,
      title: "Scientist",
      description: "I'm here for detailed research data and technical publications",
      icon: Microscope,
      color: "from-primary to-cyan-400",
    },
    {
      type: "explorer" as UserType,
      title: "Explorer",
      description: "I want to discover and understand space research",
      icon: Rocket,
      color: "from-secondary to-purple-400",
    },
    {
      type: "adventurer" as UserType,
      title: "Young Adventurer",
      description: "I'm excited to learn about space in a fun way!",
      icon: Sparkles,
      color: "from-accent to-pink-400",
    },
  ];

  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-2xl glass-panel border-2">
        <DialogHeader>
          <DialogTitle className="text-3xl text-gradient font-bold">Welcome to NASA Research Portal</DialogTitle>
          <DialogDescription className="text-lg text-muted-foreground">
            Let us personalize your journey through space research
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-6">
          {userTypes.map((userType) => {
            const Icon = userType.icon;
            const isSelected = selected === userType.type;
            
            return (
              <button
                key={userType.type}
                onClick={() => setSelected(userType.type)}
                className={`group relative p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                  isSelected
                    ? "border-primary glow-primary scale-105"
                    : "border-border hover:border-primary/50 hover:scale-102"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${userType.color} transition-transform group-hover:scale-110`}>
                    <Icon className="h-6 w-6 text-background" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{userType.title}</h3>
                    <p className="text-muted-foreground">{userType.description}</p>
                  </div>
                  {isSelected && (
                    <div className="absolute top-4 right-4 h-4 w-4 rounded-full bg-primary animate-pulse" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        <Button
          onClick={() => selected && onSelect(selected)}
          disabled={!selected}
          className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg py-6"
        >
          Begin Your Journey
        </Button>
      </DialogContent>
    </Dialog>
  );
};
