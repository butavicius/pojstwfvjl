import { CategoryTreeState } from "../types";
import generateId from "../generateId";
import categoryStateReducer from "../categoryStateReducer";

jest.mock("../generateId.ts");

const fakeState: CategoryTreeState = {
  "1": { id: "1", name: "root", childIds: ["2", "4"] },
  "2": { id: "2", name: "category-1", childIds: ["3"] },
  "3": { id: "3", name: "subcategory-1.1", childIds: [] },
  "4": { id: "4", name: "category-2", childIds: ["5"] },
  "5": { id: "5", name: "subcategory-2.1", childIds: ["6"] },
  "6": { id: "6", name: "sub-subcategory-2.1.1", childIds: [] },
};

describe("categoryStateReducer", () => {
  it("adds new category to state", () => {
    const parentId = "4";
    const id = generateId();
    // We use generateId for any random string
    const name = generateId();

    const result = categoryStateReducer(fakeState, {
      type: "added",
      payload: {
        name,
        id,
        parentId,
      },
    });

    expect(result[id].name).toBe(name);
    expect(result[parentId].childIds.includes(id)).toBeTruthy();
  });

  it("deletes category from state", () => {
    const parentId = "2";
    const id = "3";

    const result = categoryStateReducer(fakeState, {
      type: "deleted",
      payload: {
        id,
        parentId,
      },
    });

    expect(result[id]).toBe(undefined);
    expect(result[parentId].childIds.includes(id)).toBeFalsy();
  });

  it("edits category name in state", () => {
    const id = "3";
    const newName = "fakeName";

    const result = categoryStateReducer(fakeState, {
      type: "edited",
      payload: {
        id,
        name: newName,
      },
    });

    expect(result[id].name).toBe(newName);
  });
});
