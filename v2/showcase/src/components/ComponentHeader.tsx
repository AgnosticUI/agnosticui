import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Package } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./ComponentHeader.module.css";

const ComponentHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className={styles.backIcon} />
              Back
            </Button>
          </Link>
          <div className={styles.logo}>
            <Package className={styles.logoIcon} />
            <span className={`${styles.logoText} gradient-text`}>AgnosticUI</span>
          </div>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default ComponentHeader;
