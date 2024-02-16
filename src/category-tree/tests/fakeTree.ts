const fakeTree = {
  name: "Root",
  children: [
    {
      name: "Category 1",
      children: [
        { name: "Subcategory 1.1" },
        {
          name: "Subcategory 1.2",
          children: [
            { name: "Subcategory 1.2.1" },
            { name: "Subcategory 1.2.2" },
          ],
        },
      ],
    },
    {
      name: "Category 2",
      children: [{ name: "Subcategory 2.1" }, { name: "Subcategory 2.2" }],
    },
  ],
};

export default fakeTree;
