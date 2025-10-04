import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode, useEffect, useRef, useState } from "react";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import xml from "highlight.js/lib/languages/xml";
import styles from "./CodeExample.module.css";
import { Copy, Check } from "lucide-react";

// Register languages
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("xml", xml);

interface CodeExampleProps {
  title: string;
  description?: string;
  preview: ReactNode;
  code: string;
  language?: "javascript" | "typescript" | "xml";
}

export const CodeExample = ({
  title,
  description,
  preview,
  code,
  language = "typescript",
}: CodeExampleProps) => {
  const codeRef = useRef<HTMLElement>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  useEffect(() => {
    // Load initial theme and watch for changes
    const updateTheme = () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      setTheme(currentTheme === "dark" ? "dark" : "light");
    };

    updateTheme();

    // Watch for theme changes
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Dynamically import the correct theme
    const loadTheme = async () => {
      if (theme === "dark") {
        await import("highlight.js/styles/a11y-dark.css");
      } else {
        await import("highlight.js/styles/a11y-light.css");
      }
    };

    loadTheme();
  }, [theme]);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [code]);

  return (
    <Card className={styles.card}>
      <CardHeader>
        <CardTitle className={styles.title}>{title}</CardTitle>
        {description && <p className={styles.description}>{description}</p>}
      </CardHeader>
      <CardContent className={styles.content}>
        {/* Preview */}
        <div className={styles.preview}>{preview}</div>

        {/* Code */}
        <div className={styles.codeContainer}>
          <div className={styles.codeHeader}>
            <div className={styles.codeLabel}>Code</div>
            <button
              onClick={handleCopy}
              className={styles.copyButton}
              aria-label={copied ? "Copied!" : "Copy code to clipboard"}
              title={copied ? "Copied!" : "Copy code"}
            >
              {copied ? (
                <>
                  <Check size={12} />
                  <span className={styles.copyButtonText}>Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={12} />
                  <span className={styles.copyButtonText}>Copy</span>
                </>
              )}
            </button>
          </div>
          <pre className={styles.pre}>
            <code
              ref={codeRef}
              className={`${styles.code} language-${language}`}
            >
              {code}
            </code>
          </pre>
        </div>
      </CardContent>
    </Card>
  );
};
