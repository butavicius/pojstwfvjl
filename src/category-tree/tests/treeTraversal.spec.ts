import { CategoryNode, CategoryTreeState } from "../types";
import traverseIteratively from "../traverseIteratively";
import traverseRecursively from "../traverseRecursively";

const tree: CategoryNode = {
  id: "1",
  name: "root",
  children: [
    {
      id: "2",
      name: "category-1",
      children: [{ id: "3", name: "subcategory-1.1" }],
    },
    {
      id: "4",
      name: "category-2",
      children: [
        {
          id: "5",
          name: "subcategory-2.1",
          children: [{ id: "6", name: "sub-subcategory-2.1.1" }],
        },
      ],
    },
  ],
};

describe("treeTraversal", () => {
  it("traverses tree", () => {
    const iterativeResult = traverseIteratively(tree);
    const recursiveResult = traverseRecursively(tree);

    const expected: CategoryTreeState = {
      "1": { id: "1", name: "root", childIds: ["2", "4"] },
      "2": { id: "2", name: "category-1", childIds: ["3"] },
      "3": { id: "3", name: "subcategory-1.1", childIds: [] },
      "4": { id: "4", name: "category-2", childIds: ["5"] },
      "5": { id: "5", name: "subcategory-2.1", childIds: ["6"] },
      "6": { id: "6", name: "sub-subcategory-2.1.1", childIds: [] },
    };

    expect(iterativeResult).toEqual(expected);
    expect(iterativeResult).toEqual(recursiveResult);
  });
});
