import { CategoryNode } from "../types";
import findNode from "../findNode";
import findNodeByName from "./findNodeByName";

const tree: CategoryNode = {
  id: "1",
  name: "root",
  children: [
    {
      id: "2",
      name: "Category 1",
      children: [
        {
          id: "3",
          name: "Subcategory 1.1",
        },
      ],
    },
    { id: "4", name: "Category 2" },
  ],
};

describe("findNode", () => {
  it("finds node according to provided testing function", () => {
    const foundNode = findNodeByName(tree, "Category 2");
    expect(foundNode).toBe(tree.children![1]);
  });
});
