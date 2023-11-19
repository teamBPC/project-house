import { useForm } from "react-hook-form";
import sendData from "./sendData";

export const useCommonForm = () => {
  const { register, handleSubmit, reset, resetField } = useForm<any>();

  const submitFormData = async (url: string | null, data: any) => {
    if (url) {
      const res = await sendData(url, data);
      return res;
    }
  };

  return { register, handleSubmit, reset, resetField, submitFormData };
};
