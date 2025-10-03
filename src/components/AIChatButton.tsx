import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const AIChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    toast.info("AI Chat will be connected soon!");
    setIsOpen(!isOpen);
  };

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-gradient-to-br from-primary to-secondary glow-primary hover:scale-110 transition-all duration-300 shadow-lg z-50"
      size="icon"
    >
      <MessageSquare className="h-6 w-6" />
    </Button>
  );
};
