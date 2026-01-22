"use client";

import { Button } from "@/components/ui/button";
import { Moon, SunDim } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      // size="sm"
      variant="secondary"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="size-8 flex items-center justify-center transition-all duration-300"
    >
      {theme === "light" ? <Moon size={16} /> : <SunDim size={20} />}
    </Button>
  );
}
