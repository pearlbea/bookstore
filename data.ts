import { v4 as uuidv4 } from "uuid";

export interface Book {
  id: string;
  author: string;
  title: string;
}

export const inventory: Book[] = [
  {
    id: "2f2474b8-ee6f-4886-a34b-4f48f5dcfbc0",
    author: "Cate Huston",
    title: "The Engineering Leader: Strategies for Scaling Teams and Yourself",
  },
  {
    id: "17e7d82b-a55c-4956-9b90-c42b98ba1de7",
    author: "Lara Hogan",
    title: "Resilient Managment",
  },
  {
    id: "695714f-0468-4f7f-8c62-746fa7feea8e",
    author: "Jeremy Wagner",
    title: "Responsible JavaScript",
  },
];
