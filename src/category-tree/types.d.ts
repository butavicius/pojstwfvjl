export type Node = {
    id: string;
    name: string;
    children?: Node[];
}

export type CategoryLabelProps = {
    id: string;
    name: Node["name"];
    depth: number;
}