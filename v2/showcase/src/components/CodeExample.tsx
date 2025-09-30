import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";
import styles from "./CodeExample.module.css";

interface CodeExampleProps {
  title: string;
  description?: string;
  preview: ReactNode;
  code: string;
}

export const CodeExample = ({ title, description, preview, code }: CodeExampleProps) => {
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
            <code className={styles.code}>{code}</code>
          </pre>
        </div>
      </CardContent>
    </Card>
  );
};
