import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Package } from "lucide-react";
import { ReactNode } from "react";
import ComponentHeader from "@/components/ComponentHeader";

interface ComponentLayoutProps {
  children: ReactNode;
  componentName: string;
  framework: string;
  frameworkIcon: string;
}

export const ComponentLayout = ({
  children,
  componentName,
  framework,
  frameworkIcon,
}: ComponentLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background">
      <ComponentHeader />

      {/* Page Header */}
      <section className="border-b bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{frameworkIcon}</span>
            <div>
              <h1 className="text-4xl font-bold gradient-text">
                {componentName}
              </h1>
              <p className="text-lg text-muted-foreground mt-2">
                {framework} Implementation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="container mx-auto px-4 py-12">{children}</main>

      {/* Footer */}
      <footer className="border-t mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          <p>© 2025 AgnosticUI. Built with ❤️ for the web platform.</p>
        </div>
      </footer>
    </div>
  );
};
