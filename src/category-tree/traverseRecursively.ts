import { CategoryLabel, Node } from "./types";

export default function traverseRecursively(
  node: Node,
  depth: number = 0,
): CategoryLabel[] {
  if (!node.children?.length) {
    return [{ id: node.id, name: node.name, depth }];
  }

  let childrenResult: CategoryLabel[] = [];

  for (const childNode of node.children) {
    childrenResult = childrenResult.concat(
      traverseRecursively(childNode, depth + 1),
    );
  }

  return [{ id: node.id, name: node.name, depth }, ...childrenResult];
}
