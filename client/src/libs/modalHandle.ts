import { IModalStateItem } from "../interface/modal";
import { AnyAction } from "redux";
import { modalRedux } from "../redux/modalStateSlice";
import { Dispatch } from "react";

export const modalHandle = (
  dispatch: Dispatch<AnyAction>,
  modalType: keyof IModalStateItem,
  isOpen: boolean,
  reset?: () => void
) => {
  dispatch(modalRedux({ [modalType]: isOpen }));
  if (reset && !isOpen) reset();
};
