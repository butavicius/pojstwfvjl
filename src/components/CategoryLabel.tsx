import { CategoryTreeState } from "../category-tree/types";

export default function CategoryLabel({ node, depth }: CategoryTreeState) {
  const labelText = `${"- ".repeat(depth)}${node.name}`;

  return <h4>{labelText}</h4>;
}
