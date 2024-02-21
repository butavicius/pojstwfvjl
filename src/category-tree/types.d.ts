export type CategoryNode = {
  id: string;
  name: string;
  children?: CategoryNode[];
};

export type CategoryLabelProps = {
  node: CategoryNode;
  depth: number;
};
