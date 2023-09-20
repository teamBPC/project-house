import { FieldErrors, useForm } from "react-hook-form";

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
