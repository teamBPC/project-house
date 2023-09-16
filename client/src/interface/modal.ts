import { Dispatch, SetStateAction, MutableRefObject } from "react";

export interface CreateBoardItemForm {
  title: string;
}

export interface CreateBoardsForm {
  title: string;
  description: string;
}

export interface CreateTaskForm {
  title: string;
  manager: string;
  priority: string;
  start: string;
  end: string;
  description: string;
}
export interface DeleteBoardItemForm {
  boardName: string;
}

//BoardItem
export interface IBoardItemModalState {
  createTaskModalOpen: boolean;
  createBoardItemModalOpen: boolean;
  deleteBoardItemModalOpen: boolean;
}
export interface IBoardItemBtnRefState {
  deleteBoardItemBtnRef: MutableRefObject<HTMLButtonElement | null> | null;
}
export interface IBoardItemModalProps {
  boardItemModal: IBoardItemModalState;
  setBoardItemModal: Dispatch<SetStateAction<IBoardItemModalState>>;
  boardItemModalBtnRef?: any;
}

//Boards
export interface IBoardsBtnRefState {
  editBoardsBtnRef: MutableRefObject<HTMLButtonElement | null>;
  deleteBoardsBtnRef: MutableRefObject<HTMLButtonElement | null>;
}

export interface IBoardsModalState {
  editBoardsModalOpen?: boolean;
  deleteBoardsModalOpen?: boolean;
}

export interface IBoardsModalProps {
  boardsModal: IBoardsModalState;
  setBoardsModal: Dispatch<SetStateAction<IBoardsModalState>>;
  boardsModalBtnRef: any;
}
