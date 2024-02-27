import fakeTree from "../category-tree/fakeTree";
import { useState } from "react";
import { CategoryTreeState } from "../category-tree/types";
import traverseIteratively from "../category-tree/traverseIteratively";
import CategoryTree from "./CategoryTree";

export default function Categories() {
  const [categoriesById, setCategoriesById] = useState<CategoryTreeState>(
    traverseIteratively(fakeTree),
  );

  if (!categoriesById.root) return <div>No root found</div>;

  const categories = categoriesById.root.childIds;

  return (
    <ul>
      {categories.map((id) => (
        <CategoryTree
          key={id}
          categoriesById={categoriesById}
          id={id}
          parentId="root"
        />
      ))}
    </ul>
  );
}
