import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Package } from "lucide-react";
import { ReactNode } from "react";
import ComponentHeader from "@/components/ComponentHeader";
import styles from "./ComponentLayout.module.css";

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
    <div className={styles.layout}>
      <ComponentHeader />

      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className={styles.pageHeaderContainer}>
          <div className={styles.headerContent}>
            <span className={styles.frameworkIcon}>{frameworkIcon}</span>
            <div>
              <h1 className={`${styles.headerTitle} gradient-text`}>
                {componentName}
              </h1>
              <p className={styles.headerSubtitle}>
                {framework} Implementation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className={styles.main}>{children}</main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <p>© 2025 AgnosticUI. Built with ❤️ for the web platform.</p>
        </div>
      </footer>
    </div>
  );
};
