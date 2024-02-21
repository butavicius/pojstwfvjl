import React, { useState } from "react";
import fakeTree from "./category-tree/fakeTree";
import traverseRecursively from "./category-tree/traverseRecursively";
import CategoryLabel from "./components/CategoryLabel";
import traverseIteratively from "./category-tree/traverseIteratively";
import { CategoryNode } from "./category-tree/types";

const App = () => {
  const [treeData, setTreeData] = useState<CategoryNode>(fakeTree);

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
          {traverseRecursively(treeData).map((category) => (
            <CategoryLabel
              key={category.node.id}
              node={category.node}
              depth={category.depth}
            />
          ))}
        </div>
        <div>
          <h2>Iterative Traversal</h2>
          {traverseIteratively(treeData).map((category) => (
            <CategoryLabel
              key={category.node.id}
              node={category.node}
              depth={category.depth}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
