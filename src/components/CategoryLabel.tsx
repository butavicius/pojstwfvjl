import {CategoryLabelProps} from "../category-tree/types";

export default function CategoryLabel({id, name, depth}: CategoryLabelProps) {
   const labelText = `${"- ".repeat(depth)}${name}`;

   return <div>{labelText}</div>
}