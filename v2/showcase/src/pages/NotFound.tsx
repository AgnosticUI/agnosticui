import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import styles from "./NotFound.module.css";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.message}>Oops! Page not found</p>
        <a href="/" className={styles.link}>
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
