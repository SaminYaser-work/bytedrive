/** @format */

export interface File {
    id: string;
    name: string;
    type: string;
    size: string;
    modified: string;
    favorite: boolean;
    parentId: string | null;
    deleted: boolean;
}

export interface Folder {
    id: string;
    name: string;
    modified: string;
    favorite: boolean;
    parentId: string | null;
    deleted: boolean;
}

export interface Items {
    folders: Folder[];
    files: File[];
}

export const folders: Folder[] = [
    {
        id: "root",
        name: "My Drive",
        modified: "2024-02-19",
        favorite: false,
        parentId: null,
        deleted: false,
    },
    {
        id: "2",
        name: "Meeting Notes",
        modified: "2024-02-18",
        favorite: true,
        parentId: "root",
        deleted: false,
    },
    {
        id: "7",
        name: "Team Updates",
        modified: "2024-02-18",
        favorite: false,
        parentId: "2",
        deleted: false,
    },
    {
        id: "4",
        name: "Team Photos",
        modified: "2024-02-16",
        favorite: false,
        parentId: "root",
        deleted: false,
    },
    {
        id: "5",
        name: "This should be trashed",
        modified: "2024-02-16",
        favorite: false,
        parentId: "root",
        deleted: true,
    },
];

export const files: File[] = [
    {
        id: "1",
        name: "Project Proposal.pdf",
        type: "pdf",
        size: "2.5 MB",
        modified: "2024-02-19",
        favorite: true,
        parentId: "root",
        deleted: false,
    },
    {
        id: "6",
        name: "Q1 Planning.docx",
        type: "docx",
        size: "1.2 MB",
        modified: "2024-02-18",
        favorite: false,
        parentId: "2",
        deleted: false,
    },
    {
        id: "8",
        name: "Weekly Report.pdf",
        type: "pdf",
        size: "0.8 MB",
        modified: "2024-02-18",
        favorite: false,
        parentId: "7",
        deleted: false,
    },
    {
        id: "3",
        name: "Budget 2024.xlsx",
        type: "xlsx",
        size: "1.8 MB",
        modified: "2024-02-17",
        favorite: true,
        parentId: "root",
        deleted: false,
    },
    {
        id: "9",
        name: "Holiday Party.jpg",
        type: "jpg",
        size: "3.2 MB",
        modified: "2024-02-16",
        favorite: false,
        parentId: "4",
        deleted: false,
    },
    {
        id: "5",
        name: "Client Presentation.pptx",
        type: "pptx",
        size: "5.2 MB",
        modified: "2024-02-15",
        favorite: false,
        parentId: "root",
        deleted: false,
    },
    {
        id: "6",
        name: "delete.txt",
        type: "txt",
        size: "5.2 MB",
        modified: "2024-02-15",
        favorite: false,
        parentId: "root",
        deleted: true,
    },
    {
        id: "7",
        name: "delete2.txt",
        type: "txt",
        size: "5.2 MB",
        modified: "2024-02-15",
        favorite: false,
        parentId: "2",
        deleted: true,
    },
];
