// TypeScript module declarations for non-TypeScript file imports

// Declaration for importing .jsx files
declare module "*.jsx" {
  const content: any;
  export default content;
}

// Declaration for importing .pdf files
declare module "*.pdf" {
  const value: string;
  export default value;
}
