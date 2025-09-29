import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface CodeExampleProps {
  title: string;
  description?: string;
  preview: ReactNode;
  code: string;
}

export const CodeExample = ({ title, description, preview, code }: CodeExampleProps) => {
  return (
    <Card className="card-hover mb-8">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        {description && <p className="text-muted-foreground mt-2">{description}</p>}
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Preview */}
        <div className="p-8 rounded-lg border-2 border-dashed border-border bg-muted/20 flex items-center justify-center gap-4 flex-wrap">
          {preview}
        </div>

        {/* Code */}
        <div className="relative">
          <div className="absolute top-3 right-3 text-xs text-muted-foreground bg-background px-2 py-1 rounded">
            Code
          </div>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
            <code className="text-sm">{code}</code>
          </pre>
        </div>
      </CardContent>
    </Card>
  );
};
