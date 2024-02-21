import { CategoryLabelProps, CategoryNode } from "./types";

export default function traverseRecursivelyPostOrder(
  node: CategoryNode,
): CategoryLabelProps[] {
  const results: CategoryLabelProps[] = [];

  function postOrder(node: CategoryNode, depth: number = 0) {
    if (node.children)
      for (const childNode of node.children) {
        postOrder(childNode, depth + 1);
      }

    results.push({ node, depth });
  }

  postOrder(node);

  return results;
}
