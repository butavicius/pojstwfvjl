import { CategoryTreeState } from "../category-tree/types";
import { useState } from "react";
import styles from "./CategoryTree.module.css";
import { ReactComponent as PlusIcon } from "../svg/plus.svg";

type Props = {
  categoriesById: CategoryTreeState;
  id: string;
  parentId: string;
};

export default function CategoryTree({ categoriesById, id, parentId }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const category = categoriesById[id];

  const handleAddCategory = () => {
    setIsAdding(true);
  };

  const handleSubmit = () => {
    alert("submitting");
    setIsAdding(false);
  };

  const handleKeyDown: React.KeyboardEventHandler = (e) => {
    if (e.key === "Escape") {
      setIsAdding(false);
      setIsHovered(false);
    }
  };

  return (
    <>
      <li
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={styles.container}>
          {category.name}
          {isHovered && !isAdding && (
            <PlusIcon className={styles.plusIcon} onClick={handleAddCategory} />
          )}
        </div>
      </li>

      {/*Recursively render children*/}
      {(category.childIds.length > 0 || isAdding) && (
        <ul>
          {category.childIds.map((id) => (
            <CategoryTree
              key={id}
              id={id}
              categoriesById={categoriesById}
              parentId={category.id}
            />
          ))}
          <li>
            {isAdding && (
              <>
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
                    onBlur={() => setIsAdding(false)}
                  />
                </form>
              </>
            )}
          </li>
        </ul>
      )}
    </>
  );
}
