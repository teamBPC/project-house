import { useRef, useEffect } from "react";
import { cls } from "../../../libs/utils";
import { IModalProps } from "../../../interface/modal";
import { modalHandle } from "../../../libs/modalHandle";
import { useDispatch } from "react-redux";
import { useCommonForm } from "../../../libs/useCommonForm";
import { FieldErrors } from "react-hook-form";
import { modalOutsideClick } from "../../../libs/modalOutsideClick";

function EditBCModal({ modalState, modalBtnRef }: IModalProps) {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset, submitFormData } = useCommonForm();
  const onValid = async () => {};
  const onInvalid = (error: FieldErrors) => {};

  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const modalClose = modalOutsideClick(
      modalState.editBoardsModalOpen,
      modalRef,
      modalBtnRef.editBoardsBtnRef,
      dispatch,
      "createBoardsModalOpen",
      false,
      reset
    );
    return modalClose;
  }, [
    dispatch,
    modalBtnRef.editBoardsBtnRef,
    modalState.createBoardsModalOpen,
    modalState.editBoardsModalOpen,
    reset,
  ]);
  return (
    <div
      className={cls(
        "fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen bg-black bg-opacity-50 flex justify-center items-center",
        modalState.editBoardsModalOpen ? "" : "hidden"
      )}
    >
      <div ref={modalRef} className="relative w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow">
          <button
            onClick={() =>
              modalHandle(dispatch, "editBoardsModalOpen", false, reset)
            }
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
            data-modal-hide="authentication-modal"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-gray-900">
              보드 편집하기
            </h3>
            <form
              onSubmit={handleSubmit(onValid, onInvalid)}
              className="space-y-6"
              action="#"
            >
              <div>
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  제목
                </label>
                <input
                  type="text"
                  id="title"
                  {...register("title", { required: true })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  간단한 설명
                </label>
                <input
                  type="text"
                  id="description"
                  {...register("description", { required: true })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4  focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                생성하기
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EditBCModal;
