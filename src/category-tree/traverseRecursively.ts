import { CategoryLabelProps, Node } from "./types";

export default function traverseRecursively(node: Node): CategoryLabelProps[] {
  const results: CategoryLabelProps[] = [];

  function preorder(node: Node, depth: number = 0) {
    results.push({ id: node.id, name: node.name, depth });
    if (node.children)
      for (const childNode of node.children) {
        preorder(childNode, depth + 1);
      }
  }

  preorder(node);

  return results;
}
