import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Package } from "lucide-react";
import { ReactNode } from "react";

interface ComponentLayoutProps {
  children: ReactNode;
  componentName: string;
  framework: string;
  frameworkIcon: string;
}

export const ComponentLayout = ({ children, componentName, framework, frameworkIcon }: ComponentLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background">
      {/* Header */}
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

      {/* Page Header */}
      <section className="border-b bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{frameworkIcon}</span>
            <div>
              <h1 className="text-4xl font-bold gradient-text">{componentName}</h1>
              <p className="text-lg text-muted-foreground mt-2">
                {framework} Implementation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="container mx-auto px-4 py-12">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          <p>© 2025 AgnosticUI. Built with ❤️ for the web platform.</p>
        </div>
      </footer>
    </div>
  );
};
