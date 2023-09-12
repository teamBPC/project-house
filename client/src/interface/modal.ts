import { Dispatch, SetStateAction, MutableRefObject } from "react";
import { ModalState } from "./kanban";

export interface CreateBoardForm {
  boardName: string;
}
export interface CreateTaskForm {
  taskName: string;
  manager: string;
  priority: string;
  start: string;
  end: string;
  description: string;
}
export interface ModalProps {
  modalState: ModalState;
  setModalState: Dispatch<SetStateAction<ModalState>>;
  btnRef: MutableRefObject<HTMLButtonElement | null>;
}

export interface DeleteBoardForm {
  boardName: string;
}
