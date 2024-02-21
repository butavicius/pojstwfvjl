import { CategoryNode } from "../types";
import traverseIteratively from "../traverseIteratively";
import traverseRecursively from "../traverseRecursively";
import findNodeByName from "./findNodeByName";

const tree: CategoryNode = {
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
      { node: tree, depth: 0 },
      { node: findNodeByName(tree, "category-1"), depth: 1 },
      { node: findNodeByName(tree, "subcategory-1.1"), depth: 2 },
      { node: findNodeByName(tree, "subcategory-1.2"), depth: 2 },
      { node: findNodeByName(tree, "category-2"), depth: 1 },
      { node: findNodeByName(tree, "subcategory-2.1"), depth: 2 },
      { node: findNodeByName(tree, "sub-subcategory-2.1.1"), depth: 3 },
    ];

    expect(iterativeResult).toEqual(recursiveResult);
    expect(recursiveResult).toEqual(expected);
    expect(true).toBe(true);
  });

  // it("traverses tree post-order depth first and returns array with node names and depths", () => {
  //   const iterativeResultPostOrder = traverseIterativelyPostOrder(tree);
  //   const recursiveResultPostOrder = traverseRecursivelyPostOrder(tree);
  //
  //   const expected = [
  //     { node: findNodeByName(tree, "subcategory-1.1"), depth: 2 },
  //     { node: findNodeByName(tree, "subcategory-1.2"), depth: 2 },
  //     { node: findNodeByName(tree, "category-1"), depth: 1 },
  //     { node: findNodeByName(tree, "sub-subcategory-2.1.1"), depth: 3 },
  //     { node: findNodeByName(tree, "subcategory-2.1"), depth: 2 },
  //     { node: findNodeByName(tree, "category-2"), depth: 1 },
  //     { node: findNodeByName(tree, "root"), depth: 0 },
  //   ];
  //
  //   expect(iterativeResultPostOrder).toEqual(recursiveResultPostOrder);
  //   expect(recursiveResultPostOrder).toEqual(expected);
  // });
});
