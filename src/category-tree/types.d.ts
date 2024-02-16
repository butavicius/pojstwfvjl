export type Node = {
    id: string;
    name: string;
    children?: Node[];
}

export type CategoryLabel = {
    id: string;
    name: Node["name"];
    depth: number;
}