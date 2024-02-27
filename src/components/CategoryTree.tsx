import { CategoryTreeState } from "../category-tree/types";
import {
  Dispatch,
  FormEventHandler,
  KeyboardEventHandler,
  useState,
} from "react";
import styles from "./CategoryTree.module.css";
import { CategoryAction } from "../category-tree/categoryStateReducer";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import generateId from "../category-tree/generateId";

type Props = {
  categoriesById: CategoryTreeState;
  id: string;
  parentId: string;
  dispatch: Dispatch<CategoryAction>;
};

export default function CategoryTree({
  categoriesById,
  id,
  parentId,
  dispatch,
}: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentAction, setCurrentAction] = useState<
    "adding" | "editing" | null
  >(null);
  const [value, setValue] = useState("");

  const category = categoriesById[id];

  const resetState = () => {
    setCurrentAction(null);
    setValue("");
    setIsHovered(false);
  };

  const handleInitialize = (action: "adding" | "editing") => {
    if (action === "editing") setValue(categoriesById[id].name);
    setCurrentAction(action);
  };

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    if (currentAction === "editing") handleEdit();
    else if (currentAction === "adding") handleAdd();

    resetState();
  };

  const handleAdd = () => {
    // Make API call and retrieve id. Generate random for now:
    // TODO: Set loading state
    const fakeId = generateId();

    dispatch({
      type: "added",
      payload: { name: value, id: fakeId, parentId: id },
    });
  };

  const handleEdit = () => {
    // Make API call and for success response
    // TODO: Set loading state
    dispatch({
      type: "edited",
      payload: { name: value, id },
    });
  };

  const handleDelete = () => {
    // Make API call and wait for success response
    // TODO: Set loading state
    dispatch({ type: "deleted", payload: { id, parentId } });
  };

  const handleKeyDown: KeyboardEventHandler = (e) => {
    if (e.key === "Escape") {
      resetState();
    }
  };

  return (
    <>
      {currentAction === "editing" ? (
        <li>
          {/*Prevents other category labels from being interactive*/}
          <div className={styles.backdrop}></div>
          <form
            onSubmit={handleSubmit}
            className={styles.input}
            onKeyDown={handleKeyDown}
          >
            <input
              autoFocus
              type={"text"}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onBlur={resetState}
            />
          </form>
        </li>
      ) : (
        <li
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={styles.container}>
            {category.name}
            {isHovered && (
              <div className={styles.buttonsContainer}>
                <AddCircleIcon onClick={() => handleInitialize("adding")} />
                <EditIcon onClick={() => handleInitialize("editing")} />
                <DeleteIcon onClick={handleDelete} />
              </div>
            )}
          </div>
        </li>
      )}

      {/*Recursively render children*/}
      {(category.childIds.length > 0 || currentAction) && (
        <ul>
          {category.childIds.map((id) => (
            <CategoryTree
              key={id}
              id={id}
              categoriesById={categoriesById}
              parentId={category.id}
              dispatch={dispatch}
            />
          ))}

          {/*If new category is being added, render it input field after the children*/}
          {currentAction === "adding" && (
            <li>
              {/*Prevents other category labels from being interactive*/}
              <div className={styles.backdrop}></div>
              <form
                onSubmit={handleSubmit}
                className={styles.input}
                onKeyDown={handleKeyDown}
              >
                <input
                  autoFocus
                  type={"text"}
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  onBlur={resetState}
                />
              </form>
            </li>
          )}
        </ul>
      )}
    </>
  );
}
