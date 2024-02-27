import { CategoryTreeState, CategoryNode } from "./types";

export default function traverseIteratively(node: CategoryNode) {
  const result: CategoryTreeState = {};

  const stack: { node: CategoryNode; parentId: CategoryNode["id"] | null }[] = [
    { node, parentId: null },
  ];

  while (stack.length > 0) {
    const { node } = stack.pop()!;

    result[node.id] = {
      name: node.name,
      id: node.id,
      childIds: [],
    };

    if (!node.children) continue;

    for (const childNode of node.children) {
      // Add child id to childIds property of category in the state
      result[node.id].childIds.push(childNode.id);

      // Add child node to stack for next iteration
      stack.push({ node: childNode, parentId: node.id });
    }
  }

  return result;
}
