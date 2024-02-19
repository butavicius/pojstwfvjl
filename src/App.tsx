import React  from "react";
import fakeTree from "./category-tree/fakeTree";
import traverseRecursively from "./category-tree/traverseRecursively";
import CategoryLabel from "./components/CategoryLabel";
import traverseIteratively from "./category-tree/traverseIteratively";

export type CategoryTreeNode = {
  name: string;
  children?: CategoryTreeNode[];
};

export type DisplayComponentProps = {
  node: CategoryTreeNode;
  addNode: (node: CategoryTreeNode) => (name: string) => void;
};

const App = () => {
  // const [treeData, setTreeData] = useState<CategoryTreeNode>(fakeTree);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>Category Tree</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div>
          <h2>Recursive Traversal</h2>
          {traverseRecursively(fakeTree).map((category) => (
            <CategoryLabel
              id={category.id}
              name={category.name}
              depth={category.depth}
            />
          ))}
        </div>
        <div>
          <h2>Iterative Traversal</h2>
          {traverseIteratively(fakeTree).map((category) => (
            <CategoryLabel
              id={category.id}
              name={category.name}
              depth={category.depth}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
