import { Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "./sheet";

interface HomeSheetProps {
  side: "top" | "bottom" | "left" | "right";
  isSheetOpen: boolean;
  setIsSheetOpen: (open: boolean) => void;
  children: React.ReactNode;
}

export const HomeSheet: React.FC<HomeSheetProps> = ({
  side,
  isSheetOpen,
  setIsSheetOpen,
  children,
}: HomeSheetProps) => {
  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger>
        <Menu className="w-6 h-6" />
      </SheetTrigger>
      <SheetContent side={side}>
        <SheetTitle></SheetTitle>
        {children}
      </SheetContent>
    </Sheet>
  );
};
