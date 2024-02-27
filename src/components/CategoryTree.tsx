import { CategoryTreeState } from "../category-tree/types";

type Props = {
  categoriesById: CategoryTreeState;
  id: string;
  parentId: string;
};

export default function CategoryTree({ categoriesById, id, parentId }: Props) {
  const category = categoriesById[id];
  return (
    <>
      <li>{category.name}</li>
      {category.childIds.length > 0 && (
        <ul>
          {category.childIds.map((id) => (
            <CategoryTree
              key={id}
              id={id}
              categoriesById={categoriesById}
              parentId={category.id}
            />
          ))}
        </ul>
      )}
    </>
  );
}
