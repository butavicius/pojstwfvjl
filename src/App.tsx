import React, { useState } from "react";
import IterativeTree from "./IterativeTree";
import RecursiveTree from "./RecursiveTree";
import fakeTree from "./category-tree/tests/fakeTree";

export type CategoryTreeNode = {
  name: string;
  children?: CategoryTreeNode[];
};

export type DisplayComponentProps = {
  node: CategoryTreeNode;
  addNode: (node: CategoryTreeNode) => (name: string) => void;
};

const App = () => {
  const [treeData, setTreeData] = useState<CategoryTreeNode>(fakeTree);

  /**
   * Add note to the tree given parent node
   */
  const addNode = (parentNode: CategoryTreeNode) => (name: string) => {
    const newNode = { name };
    if (!parentNode.children) {
      parentNode.children = [];
    }
    parentNode.children.push(newNode);

    setTreeData({ ...treeData });
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>Category Tree</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <div>
          <h2>Recursive Traversal</h2>
          <RecursiveTree node={treeData} addNode={addNode} />
        </div>
        <div>
          <h2>Iterative Traversal</h2>
          <IterativeTree node={treeData} addNode={addNode} />
        </div>
      </div>
    </>
  );
};

export default App;
