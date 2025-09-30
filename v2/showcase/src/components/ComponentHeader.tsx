import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Package } from "lucide-react";

const ComponentHeader = () => {
  return (
    <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <Package className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold gradient-text">AgnosticUI</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ComponentHeader;
