import { CategoryLabelProps, Node } from "./types";

export default function traverseRecursively(
  node: Node,
  depth: number = 0,
): CategoryLabelProps[] {
  if (!node.children?.length) {
    return [{ id: node.id, name: node.name, depth }];
  }

  let childrenResult: CategoryLabelProps[] = [];

  for (const childNode of node.children) {
    childrenResult = childrenResult.concat(
      traverseRecursively(childNode, depth + 1),
    );
  }

  return [{ id: node.id, name: node.name, depth }, ...childrenResult];
}
