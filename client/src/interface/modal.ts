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
//Modal
export interface IModalStateItem {
  createTaskModalOpen?: boolean;
  createBoardItemModalOpen?: boolean;
  deleteBoardItemModalOpen?: boolean;
  createBoardsModalOpen?: boolean;
  editBoardsModalOpen?: boolean;
  deleteBoardsModalOpen?: boolean;
  editProfileModalOpen?: boolean;
  createProjectModalOpen?: boolean;
}
export interface IModalState {
  modalOpen: IModalStateItem;
}
export interface IModalProps {
  modalState: IModalStateItem;
  modalBtnRef?: any;
}
export interface IBtnRefState {
  deleteBoardItemBtnRef?: MutableRefObject<HTMLButtonElement | null> | null;
  editBoardsBtnRef?: MutableRefObject<HTMLButtonElement | null> | null;
  deleteBoardsBtnRef?: MutableRefObject<HTMLButtonElement | null> | null;
}
