// algorithm.model.ts
export interface Algorithm {
  category: string;
  name: string;
  description?: string;
  content?: string; // Add this line to include content property
}
