export type CategoryNode = {
  id: string;
  name: string;
  children?: CategoryNode[];
};

export type CategoryTreeState = {
  [key: string]: {
    name: string;
    id: string;
    childIds: string[];
  };
};
