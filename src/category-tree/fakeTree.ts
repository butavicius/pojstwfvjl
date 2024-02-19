import {Node} from "./types";

const fakeTree: Node = {
  id: "1",
  name: "Root",
  children: [
    {
      id: "2",
      name: "Category 1",
      children: [
        { id: "3", name: "Subcategory 1.1" },
        {
          id: "4",
          name: "Subcategory 1.2",
          children: [
            { id: "5", name: "Subcategory 1.2.1" },
            { id: "6", name: "Subcategory 1.2.2" },
          ],
        },
        { id: "7", name: "Subcategory 1.3" },
      ],
    },
    {
      id: "8",
      name: "Category 2",
      children: [{ id: "8", name: "Subcategory 2.1" }, { id: "9", name: "Subcategory 2.2" }],
    },
  ],
};

export default fakeTree;
