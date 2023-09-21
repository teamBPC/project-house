import { useRef, useEffect } from "react";
import { cls } from "../../../libs/utils";
import { IModalProps } from "../../../interface/modal";
import { modalHandle } from "../common";
import { useDispatch } from "react-redux";
import { useCommonForm } from "../../../libs/useCommonForm";
import { FieldErrors } from "react-hook-form";

function DeleteBoardModal({ modalState, modalBtnRef }: IModalProps) {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset, submitFormData } = useCommonForm();
  const onValid = async () => {};
  const onInvalid = (error: FieldErrors) => {};

  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const outsideClickHandle = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        modalBtnRef.deleteBoardItemBtnRef.current &&
        !modalBtnRef.deleteBoardItemBtnRef.current.contains(
          event.target as Node
        )
      ) {
        modalHandle(dispatch, "deleteBoardItemModalOpen", false, reset);
      }
    };
    if (modalState.deleteBoardItemModalOpen) {
      document.addEventListener("mousedown", outsideClickHandle);
    }
    return () => {
      document.removeEventListener("mousedown", outsideClickHandle);
    };
  }, [
    modalState.deleteBoardItemModalOpen,
    reset,
    dispatch,
    modalBtnRef.deleteBoardItemBtnRef,
  ]);
  return (
    <div
      className={cls(
        "fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen bg-black bg-opacity-50 flex justify-center items-center",
        modalState.deleteBoardItemModalOpen ? "" : "hidden"
      )}
    >
      <div ref={modalRef} className="relative w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            onClick={() =>
              modalHandle(dispatch, "deleteBoardItemModalOpen", false, reset)
            }
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
              보드 아이템 삭제하기
            </h3>
            <form
              onSubmit={handleSubmit(onValid, onInvalid)}
              className="space-y-6"
              action="#"
            >
              <div>
                <label
                  htmlFor="boardName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  삭제하시려면 아래에 ""을/를 입력하세요.
                </label>
                <input
                  type="text"
                  id="boardName"
                  {...register("boardName", { required: true })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white "
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4  focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                삭제하기
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DeleteBoardModal;
