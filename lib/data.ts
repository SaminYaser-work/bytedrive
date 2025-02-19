export interface File {
  id: string
  name: string
  type: string
  size: string
  modified: string
  favorite: boolean
  parentId: string | null
}

export interface Folder {
  id: string
  name: string
  modified: string
  favorite: boolean
  parentId: string | null
}

export const folders: Folder[] = [
  {
    id: "root",
    name: "My Drive",
    modified: "2024-02-19",
    favorite: false,
    parentId: null,
  },
  {
    id: "2",
    name: "Meeting Notes",
    modified: "2024-02-18",
    favorite: false,
    parentId: "root",
  },
  {
    id: "7",
    name: "Team Updates",
    modified: "2024-02-18",
    favorite: false,
    parentId: "2",
  },
  {
    id: "4",
    name: "Team Photos",
    modified: "2024-02-16",
    favorite: false,
    parentId: "root",
  },
]

export const files: File[] = [
  {
    id: "1",
    name: "Project Proposal.pdf",
    type: "pdf",
    size: "2.5 MB",
    modified: "2024-02-19",
    favorite: true,
    parentId: "root",
  },
  {
    id: "6",
    name: "Q1 Planning.docx",
    type: "docx",
    size: "1.2 MB",
    modified: "2024-02-18",
    favorite: false,
    parentId: "2",
  },
  {
    id: "8",
    name: "Weekly Report.pdf",
    type: "pdf",
    size: "0.8 MB",
    modified: "2024-02-18",
    favorite: false,
    parentId: "7",
  },
  {
    id: "3",
    name: "Budget 2024.xlsx",
    type: "xlsx",
    size: "1.8 MB",
    modified: "2024-02-17",
    favorite: true,
    parentId: "root",
  },
  {
    id: "9",
    name: "Holiday Party.jpg",
    type: "jpg",
    size: "3.2 MB",
    modified: "2024-02-16",
    favorite: false,
    parentId: "4",
  },
  {
    id: "5",
    name: "Client Presentation.pptx",
    type: "pptx",
    size: "5.2 MB",
    modified: "2024-02-15",
    favorite: false,
    parentId: "root",
  },
]

