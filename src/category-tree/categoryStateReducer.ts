import { CategoryTreeState } from "./types";
import { produce } from "immer";

export type CategoryAction =
  | {
      type: "added";
      payload: {
        name: string;
        id: string;
        parentId: string;
      };
    }
  | {
      type: "deleted";
      payload: {
        id: string;
        parentId: string;
      };
    }
  | {
      type: "edited";
      payload: {
        name: string;
        id: string;
      };
    };

export default function categoryStateReducer(
  state: CategoryTreeState,
  action: CategoryAction,
) {
  switch (action.type) {
    case "added": {
      const { name, id, parentId } = action.payload;
      return produce<CategoryTreeState>(state, (draft) => {
        draft[parentId].childIds.push(id);
        draft[id] = { id, name, childIds: [] };
      });
    }
    case "deleted": {
      const { id, parentId } = action.payload;
      return produce<CategoryTreeState>(state, (draft) => {
        draft[parentId].childIds = draft[parentId].childIds.filter(
          (childId) => childId !== id,
        );
        delete draft[id];
      });
    }
    case "edited": {
      const { name, id } = action.payload;
      return produce<CategoryTreeState>(state, (draft) => {
        draft[id].name = name;
      });
    }
    default:
      throw new Error("Unknown category reducer action");
  }
}
