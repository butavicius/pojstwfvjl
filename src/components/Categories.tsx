import fakeTree from "../category-tree/fakeTree";
import { useReducer } from "react";
import traverseIteratively from "../category-tree/traverseIteratively";
import CategoryTree from "./CategoryTree";
import styles from "./Categories.module.css";
import categoryStateReducer from "../category-tree/categoryStateReducer";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import generateId from "../category-tree/generateId";

export default function Categories() {
  const [categoriesById, dispatch] = useReducer(
    categoryStateReducer,
    traverseIteratively(fakeTree),
  );

  if (!categoriesById.root) return <div>No root found</div>;

  const categories = categoriesById.root.childIds;
  const handleAdd = () => {
    // Make api call, generate random id for now:
    const fakeId = generateId();
    dispatch({
      type: "added",
      payload: { name: "New category", id: fakeId, parentId: "root" },
    });
  };

  return (
    <div className={styles.container}>
      <AddCircleIcon onClick={handleAdd} />
      <ul className={styles.categories}>
        {categories.map((id) => (
          <CategoryTree
            dispatch={dispatch}
            key={id}
            categoriesById={categoriesById}
            id={id}
            parentId="root"
          />
        ))}
      </ul>
    </div>
  );
}
