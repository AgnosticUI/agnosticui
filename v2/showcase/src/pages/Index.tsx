import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Code2, Package, Sparkles, Atom, Triangle, Flame, Code } from "lucide-react";

const Index = () => {
  const frameworks = [
    { name: "React", path: "react", Icon: Atom, color: "text-[#61DAFB]" },
    { name: "Vue", path: "vue", Icon: Triangle, color: "text-[#42B883]" },
    { name: "Svelte", path: "svelte", Icon: Flame, color: "text-[#FF3E00]" },
    { name: "Vanilla", path: "vanilla", Icon: Code, color: "text-[#F7DF1E]" },
  ];

  const components = [
    { name: "Button", path: "button", description: "Interactive button component with multiple variants" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Package className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold gradient-text">AgnosticUI</h1>
          </div>
          <nav className="flex gap-4">
            <Button variant="ghost" asChild>
              <a href="https://github.com/AgnosticUI/agnosticui" target="_blank" rel="noopener noreferrer">
                <Code2 className="w-4 h-4" />
                GitHub
              </a>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4 border border-accent/20">
            <Sparkles className="w-4 h-4" />
            Framework Agnostic UI Components
          </div>
          <h1 className="text-6xl lg:text-7xl font-bold gradient-text mb-6">
            Build Once,
            <br />
            Use Everywhere
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Beautiful, accessible UI components that work seamlessly across React, Vue, Svelte, and Vanilla JavaScript.
            Choose your framework, keep your design system.
          </p>
          <div className="flex gap-4 justify-center mt-8">
            <Button size="lg">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg">
              View Components
            </Button>
          </div>
        </div>
      </section>

      {/* Component Matrix */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Component Library</h2>
          <p className="text-lg text-muted-foreground">
            Select a component and framework to view implementation details
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden card-hover">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
              <CardTitle className="text-2xl">Components × Frameworks</CardTitle>
              <CardDescription>Click any cell to view the component documentation</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="text-left p-4 font-semibold text-foreground">Component</th>
                      {frameworks.map((framework) => (
                        <th key={framework.name} className="text-center p-4 font-semibold text-foreground">
                          <div className="flex flex-col items-center gap-2">
                            <framework.Icon className={`w-8 h-8 ${framework.color}`} />
                            <span>{framework.name}</span>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {components.map((component) => (
                      <tr key={component.name} className="border-b hover:bg-muted/30 transition-colors">
                        <td className="p-4">
                          <div>
                            <div className="font-semibold text-lg">{component.name}</div>
                            <div className="text-sm text-muted-foreground">{component.description}</div>
                          </div>
                        </td>
                        {frameworks.map((framework) => (
                          <td key={`${component.path}-${framework.path}`} className="p-4 text-center">
                            <Link to={`/${component.path}/${framework.path}`}>
                              <Button variant="outline" className="w-full hover:scale-105">
                                View
                                <ArrowRight className="w-4 h-4" />
                              </Button>
                            </Link>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="card-hover">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Framework Agnostic</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Write your components once and use them across React, Vue, Svelte, and Vanilla JavaScript projects.
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <CardTitle>Synchronized Theming</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Brand your UI components once, then watch them work consistently across all your projects.
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Embraces the Platform</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Semantic and accessible HTML. Unprocessed CSS. Built on web standards for maximum compatibility.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          <p>© 2025 AgnosticUI. Built with ❤️ for the web platform.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
