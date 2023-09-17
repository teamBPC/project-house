import { Dispatch } from "react";
import { IModalStateItem } from "../../interface/modal";
import { FieldErrors, useForm } from "react-hook-form";
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

export const useModalForm = () => {
  const { register, handleSubmit, reset } = useForm<any>();

  const onValid = (data: any) => {
    console.log(data);
  };

  const onInvalid = (error: FieldErrors) => {
    console.log(error);
  };

  return { register, handleSubmit, reset, onValid, onInvalid };
};
