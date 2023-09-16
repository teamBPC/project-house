import { Dispatch, SetStateAction } from "react";
import { IBoardItemModalState } from "../../../interface/modal";
import { FieldErrors, useForm } from "react-hook-form";

export const boardsItemModalHandle = (
  setBoardItemModal: Dispatch<SetStateAction<IBoardItemModalState>>,
  modalType: keyof IBoardItemModalState,
  isOpen: boolean,
  reset?: () => void | undefined
) => {
  setBoardItemModal((prevState) => ({
    ...prevState,
    [modalType]: isOpen,
  }));
  if (reset && !isOpen) reset();
};

export const useBoardsItemForm = () => {
  const { register, handleSubmit, reset } = useForm<any>();

  const onValid = (data: any) => {
    console.log(data);
  };

  const onInvalid = (error: FieldErrors) => {
    console.log(error);
  };

  return { register, handleSubmit, reset, onValid, onInvalid };
};
