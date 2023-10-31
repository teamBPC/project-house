import { Dispatch, SetStateAction } from "react";
import { DraggableProvided } from "react-beautiful-dnd";
import { IBtnRefState } from "./modal";
export interface ITaskModalData {
  taskData: IToDo;
}
export interface IToDo {
  id: number;
  title: string;
  maker: string;
  manager: string[];
  priority: string;
  start: string;
  end: string;
  description: string;
  createAt: string;
}
export interface IBoardCollectionItem {
  id: number;
  title: string;
  description: string;
}
export interface IBoardCollection {
  boardCollection: IBoardCollectionItem[];
}
export interface IBoardItem {
  id: number;
  title: string;
  todos: IToDo[];
}
export interface IBoard {
  board: IBoardItem[];
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

export interface IProjectCollectionItem {
  id: number;
  title: string;
  description: string;
  participants: string[];
  updateAt: string;
}
export interface IProjectCollection {
  projectCollection: IProjectCollectionItem[];
}
