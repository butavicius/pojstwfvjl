import React from "react";
import {CategoryTreeNode, DisplayComponentProps} from "./App";
import NodeComponent from "./NodeComponent";

export default function IterativeTree ({ node, addNode }: DisplayComponentProps) {
    const stack: { node: CategoryTreeNode; depth: number }[] = [{ node, depth: 0 }];
    const renderedCategories: React.ReactNode[] = [];

    while (stack.length > 0) {
        const { node, depth } = stack.pop()!; // Non-null assertion due to manual check

        // Adjust the style based on depth for better visualization
        const style = { marginLeft: `${depth * 20}px`};

        renderedCategories.push(
            <div key={node.name} style={style}>
                <NodeComponent name={node.name} addNode={addNode(node)} />
            </div>

        );

        // Push children onto the stack with increased depth
        if (node.children) {
            // Not very good perfmance-wise to reverse array every time, but I was out of time
            // when I realised this mistake. So that's a hack, sorry.
            const reversedChildren = node.children.slice().reverse();
            for(let child of reversedChildren) {
                stack.push({ node: child, depth: depth + 1 });
            }
        }
    }

    return <div>{renderedCategories}</div>;
};