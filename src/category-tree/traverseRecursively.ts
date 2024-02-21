import { CategoryLabelProps, CategoryNode } from "./types";

export default function traverseRecursively(
  node: CategoryNode,
): CategoryLabelProps[] {
  const results: CategoryLabelProps[] = [];

  function preorder(node: CategoryNode, depth: number = 0) {
    results.push({ node, depth });
    if (node.children)
      for (const childNode of node.children) {
        preorder(childNode, depth + 1);
      }
  }

  preorder(node);

  return results;
}
