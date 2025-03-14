// src/curriculum/curriculum.ts
import { module1 } from "./module1";

export interface CurriculumNode {
  label: string;
  level: number;
  // External content file path stored in the curriculum/content folder.
  contentPath: string;
  status?: "U" | "I" | "C"; // Unstarted, In Progress, Complete
  children?: CurriculumNode[];
}

export const curriculum: CurriculumNode[] = [...module1];

// Helper function to get flattened curriculum for UI rendering
export function getFlattenedCurriculum(): {label: string, contentPath: string}[] {
  const flattenedItems: {label: string, contentPath: string}[] = [];
  
  function processNode(node: CurriculumNode) {
    // Only add nodes that have content
    if (node.contentPath) {
      flattenedItems.push({
        label: node.label,
        contentPath: node.contentPath
      });
    }
    
    // Process children recursively
    if (node.children && node.children.length > 0) {
      node.children.forEach(child => processNode(child));
    }
  }
  
  // Process all top-level nodes
  curriculum.forEach(node => processNode(node));
  
  return flattenedItems;
}