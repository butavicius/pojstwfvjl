import { DisplayComponentProps } from "./App";
import NodeComponent from "./NodeComponent";
import React from "react";

export default function RecursiveTree({
  node,
  addNode,
}: DisplayComponentProps) {
  return (
    <ul>
      <li>
        <NodeComponent name={node.name} addNode={addNode(node)} />
        {node.children &&
          node.children.map((child, index) => (
            <RecursiveTree key={index} node={child} addNode={addNode} />
          ))}
      </li>
    </ul>
  );
}
