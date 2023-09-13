import { Dispatch, SetStateAction } from "react";
import { DraggableProvided } from "react-beautiful-dnd";

export interface IToDo {
  id: number;
  text: string;
}

export interface IBoards {
  boards: IBoard[];
}

export interface IBoard {
  id: number;
  title: string;
  todos: IToDo[];
}

export interface ICardProps {
  todo: IToDo;
  index: number;
}

export interface IBoardProps {
  board: IBoard;
  index: number;
}

export interface ModalState {
  createModalOpen: boolean;
  deleteModalOpen: boolean;
}

export interface BoardBtnsProps {
  setModalState: Dispatch<SetStateAction<ModalState>>;
  provided: DraggableProvided;
}
