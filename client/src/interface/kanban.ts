import { Dispatch, SetStateAction } from "react";
import { DraggableProvided } from "react-beautiful-dnd";
import { IBtnRefState } from "./modal";

export interface IToDo {
  id: number;
  title: string;
  manager: string;
  priority: string;
  start: string;
  end: string;
  description: string;
}
export interface IBoardsItem {
  id: number;
  title: string;
  description: string;
}
export interface IBoards {
  boards: IBoardsItem[];
}
export interface IBoardItem {
  id: number;
  title: string;
  todos: IToDo[];
}
export interface IBoard {
  boardItem: IBoardItem[];
}

export interface ICardProps {
  todo: IToDo;
  index: number;
}

export interface IBoardProps {
  boardItem: IBoardItem;
  index: number;
}

export interface IBtnsProps {
  setModalBtnRef: Dispatch<SetStateAction<IBtnRefState>>;
  provided?: DraggableProvided;
}

export interface IProjectsItem {
  id: number;
  title: string;
  description: string;
  participants: string[];
  updateAt: string;
}
export interface IProjects {
  projects: IProjectsItem[];
}
