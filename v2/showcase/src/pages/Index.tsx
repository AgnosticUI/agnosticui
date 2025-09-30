import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Code2,
  Package,
  Sparkles,
  Atom,
  Triangle,
  Flame,
  Code,
} from "lucide-react";
import styles from "./Index.module.css";

const Index = () => {
  const frameworks = [
    { name: "React", path: "react", Icon: Atom, color: "text-[#61DAFB]" },
    { name: "Vue", path: "vue", Icon: Triangle, color: "text-[#42B883]" },
    { name: "Svelte", path: "svelte", Icon: Flame, color: "text-[#FF3E00]" },
    { name: "Vanilla", path: "vanilla", Icon: Code, color: "text-[#F7DF1E]" },
  ];

  const components = [
    {
      name: "Button",
      path: "button",
      description: "Interactive button component with multiple variants",
    },
  ];

  return (
    <div className={styles.layout}>
      <Header />
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            <Sparkles className={styles.badgeIcon} />
            Framework Agnostic UI Components
          </div>
          <h1 className={`${styles.heroTitle} gradient-text`}>
            Build Once,
            <br />
            Use Everywhere
          </h1>
          <p className={styles.heroDescription}>
            Themeable UI components. Accessible and AI-ready for use in React,
            Vue, Svelte, Lit, and all platform-based JavaScript.
          </p>
          <div className={styles.heroCta}>
            <Button size="lg">
              Get Started
              <ArrowRight className={styles.ctaIcon} />
            </Button>
            <Button variant="outline" size="lg">
              View Components
            </Button>
          </div>
        </div>
      </section>

      {/* Component Matrix */}
      <section className={styles.componentMatrix}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Component Library</h2>
          <p className={styles.sectionDescription}>
            Select a component and framework to view implementation details
          </p>
        </div>

        <div className={styles.matrixContainer}>
          <Card className="overflow-hidden card-hover">
            <CardHeader className={styles.cardHeader}>
              <CardTitle className={styles.cardTitle}>
                Components × Frameworks
              </CardTitle>
              <CardDescription>
                Click any cell to view the component documentation
              </CardDescription>
            </CardHeader>
            <CardContent className={styles.cardContent}>
              <div className={styles.tableWrapper}>
                <table className={styles.table}>
                  <thead>
                    <tr className={styles.tableHeader}>
                      <th className={styles.tableHeaderCell}>Component</th>
                      {frameworks.map((framework) => (
                        <th
                          key={framework.name}
                          className={styles.tableHeaderCellCenter}
                        >
                          <div className={styles.frameworkHeader}>
                            <framework.Icon
                              className={`${styles.frameworkIcon} ${framework.color}`}
                            />
                            <span>{framework.name}</span>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {components.map((component) => (
                      <tr key={component.name} className={styles.tableRow}>
                        <td className={styles.tableCell}>
                          <div>
                            <div className={styles.componentName}>
                              {component.name}
                            </div>
                            <div className={styles.componentDescription}>
                              {component.description}
                            </div>
                          </div>
                        </td>
                        {frameworks.map((framework) => (
                          <td
                            key={`${component.path}-${framework.path}`}
                            className={styles.tableCellCenter}
                          >
                            <Link to={`/${component.path}/${framework.path}`}>
                              <Button
                                variant="outline"
                                className={styles.viewButton}
                              >
                                View
                                <ArrowRight className={styles.viewButtonIcon} />
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
      <section className={styles.features}>
        <div className={styles.featuresGrid}>
          <Card className="card-hover">
            <CardHeader>
              <div
                className={`${styles.featureIcon} ${styles.featureIconPrimary}`}
              >
                <Code2
                  className={`${styles.featureIconInner} ${styles.featureIconPrimaryInner}`}
                />
              </div>
              <CardTitle>Framework Agnostic</CardTitle>
            </CardHeader>
            <CardContent>
              <p className={styles.featureText}>
                Write your components once and use them across React, Vue,
                Svelte, and Vanilla JavaScript projects.
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader>
              <div
                className={`${styles.featureIcon} ${styles.featureIconAccent}`}
              >
                <Sparkles
                  className={`${styles.featureIconInner} ${styles.featureIconAccentInner}`}
                />
              </div>
              <CardTitle>Synchronized Theming</CardTitle>
            </CardHeader>
            <CardContent>
              <p className={styles.featureText}>
                Brand your UI components once, then watch them work consistently
                across all your projects.
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader>
              <div
                className={`${styles.featureIcon} ${styles.featureIconPrimary}`}
              >
                <Package
                  className={`${styles.featureIconInner} ${styles.featureIconPrimaryInner}`}
                />
              </div>
              <CardTitle>Embraces the Platform</CardTitle>
            </CardHeader>
            <CardContent>
              <p className={styles.featureText}>
                Semantic and accessible HTML. Unprocessed CSS. Built on web
                standards for maximum compatibility.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <p>© 2025 AgnosticUI. Built with ❤️ for the web platform.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
