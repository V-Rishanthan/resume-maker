import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LayoutGrid, Paintbrush } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useContext, useEffect, useState } from "react";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";

export default function ThemeSelector() {
  const { resumeInfo, setResumeInfo, themeColor } =
    useContext(ResumeInfoContext);

  const colors = [
    "#3b82f6", // blue
    "#ef4444", // red
    "#10b981", // green
    "#f59e0b", // amber
    "#8b5cf6", // violet
    "#ec4899", // pink
    "#27272A", // Black
  ];

  const [selectedColor, setSelectedColor] = useState(
    localStorage.getItem("resume-color") || "#3b82f6"
  );

  useEffect(() => {
    setResumeInfo({
      ...resumeInfo,
      themeColor: selectedColor,
    });
  }, [selectedColor]);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    localStorage.setItem("resume-color", color);
    // Apply to  resume template here
    document.documentElement.style.setProperty("--primary", color);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2 cursor-pointer">
          <LayoutGrid className="h-4 w-4" />
          Theme
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">
            Select your Resume Color
          </DialogTitle>
        </DialogHeader>
        <div className="flex justify-center gap-4 py-6">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => handleColorSelect(color)}
              className={`h-10 w-10 rounded-full transition-all hover:scale-110`}
              style={{ backgroundColor: color }}
              aria-label={`Select ${color} color`}
            >
              {selectedColor === color && (
                <div className="flex items-center justify-center h-full w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
              )}
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
