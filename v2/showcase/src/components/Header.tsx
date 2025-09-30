import { Button } from "@/components/ui/button";
import { Code2, Package } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Package className="w-8 h-8 text-primary" />
          <h1 className="text-2xl font-bold gradient-text">AgnosticUI</h1>
        </div>
        <nav className="flex gap-4">
          <Button variant="ghost" asChild>
            <a
              href="https://github.com/AgnosticUI/agnosticui"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Code2 className="w-4 h-4" />
              GitHub
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
