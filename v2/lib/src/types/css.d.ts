// Support for Isomorphic CSS Modules (.module.css)
declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

// Support for Lit string bundling injections (*.css?inline)
declare module '*.css?inline' {
  const content: string;
  export default content;
}
