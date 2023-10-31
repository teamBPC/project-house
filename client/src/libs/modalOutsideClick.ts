import { Dispatch, MutableRefObject } from "react";
import { modalHandle } from "./modalHandle";
import { AnyAction } from "redux";
import { IModalStateItem } from "../interface/modal";

export function modalOutsideClick(
  state: boolean | undefined,
  modalRef: MutableRefObject<HTMLDivElement | null>,
  btnRef: MutableRefObject<HTMLButtonElement | null>,
  dispatch: Dispatch<AnyAction>,
  modalType: keyof IModalStateItem,
  isOpen: boolean,
  reset?: () => void
) {
  const outsideClickHandle = (event: MouseEvent) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(event.target as Node) &&
      btnRef.current &&
      !btnRef.current.contains(event.target as Node)
    ) {
      modalHandle(dispatch, modalType, isOpen, reset);
    }
  };
  if (state) {
    document.addEventListener("mousedown", outsideClickHandle);
  }
  return () => {
    document.removeEventListener("mousedown", outsideClickHandle);
  };
}
