import { CategoryNode } from "./types";

// Find node in a tree by providing testing function
export default function findNode(
  node: CategoryNode,
  testingFn: (node: CategoryNode) => boolean,
) {
  const stack = [node];

  while (stack.length > 0) {
    const node = stack.pop()!;

    // Pass current node to testing function to see if it is the one we're looking for
    if (testingFn(node)) return node;

    // Push node children to stack to process on next iteration
    if (!node.children) continue;

    for (const nodeChild of node.children) {
      stack.push(nodeChild);
    }
  }

  return undefined;
}
