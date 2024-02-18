import { CategoryLabelProps, Node } from "./types";

export default function traverseRecursivelyPostOrder(
    node: Node,
): CategoryLabelProps[] {

    const results: CategoryLabelProps[] = []

    function postOrder(node: Node, depth: number = 0) {

        if(node.children)
            for (const childNode of node.children) {
                postOrder(childNode, depth + 1)
            }

        results.push({id: node.id, name: node.name, depth});

    }

    postOrder(node);

    return results;
}
