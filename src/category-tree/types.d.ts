export type CategoryNode = {
    id: string;
    name: string;
    children?: CategoryNode[];
}

export type CategoryLabelProps = {
    id: string;
    name: CategoryNode["name"];
    depth: number;
}