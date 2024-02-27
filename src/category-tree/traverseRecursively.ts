import { CategoryTreeState, CategoryNode } from "./types";

export default function traverseRecursively(
  node: CategoryNode,
): CategoryTreeState {
  const results: CategoryTreeState = {};

  function process(node: CategoryNode) {
    results[node.id] = { id: node.id, name: node.name, childIds: [] };
    if (node.children)
      for (const childNode of node.children) {
        results[node.id].childIds.push(childNode.id);
        process(childNode);
      }
  }

  process(node);

  return results;
}
