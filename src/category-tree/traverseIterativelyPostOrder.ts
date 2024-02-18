import { CategoryLabelProps, Node } from "./types";

export default function traverseIterativelyPostOrder(node: Node) {
  const result: CategoryLabelProps[] = [];
  const stack = [{ node, depth: 0 }];

  const visited = new Set();

  while (stack.length > 0) {
    const { node, depth } = stack[stack.length - 1];

    if (node.children && !visited.has(node.id)) {
      for (let i = node.children.length - 1; i >= 0; i--) {
        stack.push({ node: node.children[i], depth: depth + 1 });
      }
      visited.add(node.id);
    } else {
      stack.pop();
      result.push({ id: node.id, name: node.name, depth: depth });
    }
  }

  return result;
}
