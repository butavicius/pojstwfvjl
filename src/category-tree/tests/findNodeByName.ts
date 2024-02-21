import { CategoryNode } from "../types";
import findNode from "../findNode";

export default function findNodeByName(node: CategoryNode, name: string) {
  return findNode(node, (n) => n.name === name);
}
