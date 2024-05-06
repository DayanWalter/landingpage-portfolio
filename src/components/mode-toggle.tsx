import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <div className="absolute right-6 top-5">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <div className="h-[1.2rem] w-[1.2rem] rounded-full bg-primary"></div>
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("orange")}>
            Orange
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("green")}>
            Green
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("red")}>
            Red
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("violet")}>
            Violet
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("yellow")}>
            Yellow
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
