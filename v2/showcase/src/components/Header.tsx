import { Button } from "@/components/ui/button";
import { Code2, Package } from "lucide-react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Package className={styles.logoIcon} />
          <h1 className={`${styles.title} gradient-text`}>AgnosticUI</h1>
        </div>
        <nav className={styles.nav}>
          <Button variant="ghost" asChild>
            <a
              href="https://github.com/AgnosticUI/agnosticui"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Code2 className={styles.githubIcon} />
              GitHub
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
