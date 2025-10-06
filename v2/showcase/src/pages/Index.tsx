import { Link } from "react-router-dom";
import { ReactButton } from "agnosticui-core/react";
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
  ChevronRight,
  Code2,
  Package,
  Sparkles,
} from "lucide-react";
import reactIcon from "@/assets/icons/react.svg";
import vueIcon from "@/assets/icons/vue.svg";
import svelteIcon from "@/assets/icons/svelte.svg";
import javascriptIcon from "@/assets/icons/javascript.svg";
import styles from "./Index.module.css";

const Index = () => {
  const frameworks = [
    { name: "React", path: "react", icon: reactIcon },
    { name: "Vue", path: "vue", icon: vueIcon },
    { name: "Svelte", path: "svelte", icon: svelteIcon },
    { name: "Vanilla", path: "vanilla", icon: javascriptIcon },
  ];

  const components = [
    {
      name: "Accordion",
      path: "accordion",
      description: "Collapsible content sections with customizable headers",
    },
    {
      name: "Breadcrumb",
      path: "breadcrumb",
      description: "Navigation component showing hierarchical page location",
    },
    {
      name: "Button",
      path: "button",
      description: "Interactive button component with multiple variants",
    },
    {
      name: "Dialog",
      path: "dialog",
      description: "Modal dialog for important messages and user interactions",
    },
    {
      name: "Drawer",
      path: "drawer",
      description: "Sliding panel for contextual information or actions",
    },
    {
      name: "Toggle",
      path: "toggle",
      description: "Binary on/off switch with WAI-ARIA Switch pattern support",
    },
    {
      name: "Tooltip",
      path: "tooltip",
      description: "Tooltips provide contextual guidance to clarify a user interface",
    },
  ];

  return (
    <div className={styles.layout}>
      <Header />
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
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
            <ReactButton variant="primary" size="lg" shape="rounded">
              Get Started
              <ArrowRight className={styles.ctaIcon} />
            </ReactButton>
            <ReactButton bordered size="lg" shape="rounded">
              View Components
            </ReactButton>
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
                      <img
                        src={framework.icon}
                        alt={`${framework.name} logo`}
                        className={styles.frameworkIcon}
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
                        <ReactButton
                          link
                          variant="primary"
                          size="sm"
                          className={styles.viewButton}
                        >
                          View
                          <ChevronRight className={styles.ctaIcon} />
                        </ReactButton>
                      </Link>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
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
