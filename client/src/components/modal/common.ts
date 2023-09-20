import { Dispatch } from "react";
import { IModalStateItem } from "../../interface/modal";
import { AnyAction } from "redux";
import { modalRedux } from "../../redux/modalStateSlice";

export const modalHandle = (
  dispatch: Dispatch<AnyAction>,
  modalType: keyof IModalStateItem,
  isOpen: boolean,
  reset?: () => void
) => {
  dispatch(modalRedux({ [modalType]: isOpen }));
  if (reset && !isOpen) reset();
};

