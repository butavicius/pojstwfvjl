import { CategoryLabelProps, CategoryNode } from "./types";

export default function traverseIteratively(node: CategoryNode) {
  const result: CategoryLabelProps[] = [];
  const stack = [{ node, depth: 0 }];

  while (stack.length > 0) {
    const { node, depth } = stack.pop()!;

    result.push({ id: node.id, name: node.name, depth });

    if (!node.children) continue;

    for (let i = node.children.length - 1; i >= 0; i--) {
      stack.push({ node: node.children[i], depth: depth + 1 });
    }
  }

  return result;
}
