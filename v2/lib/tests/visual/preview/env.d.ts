interface Window {
  __visualReady?: boolean;
}

declare module '*.css' {
  const content: string;
  export default content;
}

// Declare the side-effect registration module using a clean, empty block with no explicit any keyword
declare module '*index.ts' {}
