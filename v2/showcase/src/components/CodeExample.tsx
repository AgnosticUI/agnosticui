import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode, useEffect, useRef } from "react";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/a11y-light.css";
import styles from "./CodeExample.module.css";

// Register the language
hljs.registerLanguage("javascript", javascript);

interface CodeExampleProps {
  title: string;
  description?: string;
  preview: ReactNode;
  code: string;
}

export const CodeExample = ({ title, description, preview, code }: CodeExampleProps) => {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [code]);

  return (
    <Card className={`card-hover ${styles.card}`}>
      <CardHeader>
        <CardTitle className={styles.title}>{title}</CardTitle>
        {description && <p className={styles.description}>{description}</p>}
      </CardHeader>
      <CardContent className={styles.content}>
        {/* Preview */}
        <div className={styles.preview}>
          {preview}
        </div>

        {/* Code */}
        <div className={styles.codeContainer}>
          <div className={styles.codeLabel}>
            Code
          </div>
          <pre className={styles.pre}>
            <code ref={codeRef} className={`${styles.code} language-javascript`}>{code}</code>
          </pre>
        </div>
      </CardContent>
    </Card>
  );
};
