import { Node } from "../types";
import traverseIteratively from "../traverseIteratively";
import traverseRecursively from "../traverseRecursively";
import traverseIterativelyPostOrder from "../traverseIterativelyPostOrder";
import traverseRecursivelyPostOrder from "../traverseRecursivelyPostOrder";

const tree: Node = {
  id: "1",
  name: "root",
  children: [
    {
      id: "2",
      name: "category-1",
      children: [
        { id: "3", name: "subcategory-1.1" },
        { id: "4", name: "subcategory-1.2" },
      ],
    },
    {
      id: "5",
      name: "category-2",
      children: [
        {
          id: "6",
          name: "subcategory-2.1",
          children: [{ id: "7", name: "sub-subcategory-2.1.1" }],
        },
      ],
    },
  ],
};

describe("treeTraversal", () => {
  it("traverses tree pre-order depth first and returns array with node names and depths", () => {
    const iterativeResult = traverseIteratively(tree);
    const recursiveResult = traverseRecursively(tree);

    const expected = [
      { id: "1", name: "root", depth: 0 },
      { id: "2", name: "category-1", depth: 1 },
      { id: "3", name: "subcategory-1.1", depth: 2 },
      { id: "4", name: "subcategory-1.2", depth: 2 },
      { id: "5", name: "category-2", depth: 1 },
      { id: "6", name: "subcategory-2.1", depth: 2 },
      { id: "7", name: "sub-subcategory-2.1.1", depth: 3 },
    ];

    expect(iterativeResult).toEqual(recursiveResult);
    expect(recursiveResult).toEqual(expected);
  });

  it("traverses tree post-order depth first and returns array with node names and depths", () => {
    const iterativeResultPostOrder = traverseIterativelyPostOrder(tree);
    const recursiveResultPostOrder = traverseRecursivelyPostOrder(tree);

    const expected = [
      { id: "3", name: "subcategory-1.1", depth: 2 },
      { id: "4", name: "subcategory-1.2", depth: 2 },
      { id: "2", name: "category-1", depth: 1 },
      { id: "7", name: "sub-subcategory-2.1.1", depth: 3 },
      { id: "6", name: "subcategory-2.1", depth: 2 },
      { id: "5", name: "category-2", depth: 1 },
      { id: "1", name: "root", depth: 0 },
    ];

    expect(iterativeResultPostOrder).toEqual(recursiveResultPostOrder);
    expect(recursiveResultPostOrder).toEqual(expected);
  });
});
