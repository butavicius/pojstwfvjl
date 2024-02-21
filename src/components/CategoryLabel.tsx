import { CategoryLabelProps } from "../category-tree/types";

export default function CategoryLabel({ node, depth }: CategoryLabelProps) {
  const labelText = `${"- ".repeat(depth)}${node.name}`;

  return <h4>{labelText}</h4>;
}
