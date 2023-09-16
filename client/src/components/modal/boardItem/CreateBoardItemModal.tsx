import { useRef, useEffect } from "react";
import { cls } from "../../../libs/utils";
import { IBoardItemModalProps } from "../../../interface/modal";
import { boardsItemModalHandle, useBoardsItemForm } from "./common";

function CreateBoardModal({
  boardItemModal,
  setBoardItemModal,
}: IBoardItemModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    onValid,
    onInvalid,
  } = useBoardsItemForm();

  const modalRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const outsideClickHandle = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        btnRef.current &&
        !btnRef.current.contains(event.target as Node)
      ) {
        boardsItemModalHandle(
          setBoardItemModal,
          "createBoardItemModalOpen",
          false,
          reset
        );
      }
    };
    if (boardItemModal.createBoardItemModalOpen) {
      document.addEventListener("mousedown", outsideClickHandle);
    }
    return () => {
      document.removeEventListener("mousedown", outsideClickHandle);
    };
  }, [boardItemModal.createBoardItemModalOpen, reset, setBoardItemModal]);

  return (
    <>
      <div className="fixed z-40 bottom-4 right-4">
        <button
          type="button"
          ref={btnRef}
          onClick={() =>
            boardsItemModalHandle(
              setBoardItemModal,
              "createBoardItemModalOpen",
              true
            )
          }
        >
          <span className="p-4 text-white bg-blue-600 rounded-full material-symbols-outlined">
            add
          </span>
        </button>
      </div>
      <div
        className={cls(
          "fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen bg-black bg-opacity-50 flex justify-center items-center",
          boardItemModal.createBoardItemModalOpen ? "" : "hidden"
        )}
      >
        <div ref={modalRef} className="relative w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              onClick={() =>
                boardsItemModalHandle(
                  setBoardItemModal,
                  "createBoardItemModalOpen",
                  false,
                  reset
                )
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
                새 보드 아이템 생성하기
              </h3>
              <form
                onSubmit={handleSubmit(onValid, onInvalid)}
                className="space-y-6"
                action="#"
              >
                <div>
                  <input
                    type="text"
                    id="title"
                    {...register("title", { required: true })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white "
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4  focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                >
                  생성하기
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CreateBoardModal;