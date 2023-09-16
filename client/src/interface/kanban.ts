import { Dispatch, SetStateAction } from "react";
import { DraggableProvided } from "react-beautiful-dnd";
import {
  IBoardItemBtnRefState,
  IBoardItemModalState,
  IBoardsBtnRefState,
  IBoardsModalState,
} from "./modal";

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
export interface IBoard {
  board: IBoardItem[];
}

export interface IBoardItem {
  id: number;
  title: string;
  todos: IToDo[];
}

export interface ICardProps {
  todo: IToDo;
  index: number;
}

export interface IBoardProps {
  boardItem: IBoardItem;
  index: number;
}

//BoardItem
export interface IBoardItemBtnsProps {
  setBoardItemModal: Dispatch<SetStateAction<IBoardItemModalState>>;
  setBoardItemModalBtnRef: Dispatch<
    React.SetStateAction<IBoardItemBtnRefState>
  >;
  provided: DraggableProvided;
}

//Boards
export interface IBoardsBtnsProps {
  setBoardsModal: Dispatch<SetStateAction<IBoardsModalState>>;
  setBoardsModalBtnRef: Dispatch<
    React.SetStateAction<IBoardsBtnRefState | undefined>
  >;
}
