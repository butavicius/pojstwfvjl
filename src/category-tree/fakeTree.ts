import {CategoryNode} from "./types";
import generateId from "./generateId";

const fakeTree: CategoryNode = {
  id: generateId(),
  name: "Root",
  children: [
    {
      id: generateId(),
      name: "Category 1",
      children: [
        { id: generateId(), name: "Subcategory 1.1" },
        {
          id: generateId(),
          name: "Subcategory 1.2",
          children: [
            { id: generateId(), name: "Subcategory 1.2.1" },
            { id: generateId(), name: "Subcategory 1.2.2" },
          ],
        },
        { id: generateId(), name: "Subcategory 1.3" },
      ],
    },
    {
      id: generateId(),
      name: "Category 2",
      children: [{ id: generateId(), name: "Subcategory 2.1" }, { id: generateId(), name: "Subcategory 2.2" }],
    },
  ],
};

export default fakeTree;
