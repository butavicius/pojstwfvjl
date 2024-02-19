import {CategoryLabelProps} from "../category-tree/types";

export default function CategoryLabel({name, depth}: CategoryLabelProps) {
   const labelText = `${"- ".repeat(depth)}${name}`;

   return <h4>{labelText}</h4>
}