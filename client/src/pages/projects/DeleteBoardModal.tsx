import { FieldErrors, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  useState,
  useRef,
  useEffect,
  Dispatch,
  SetStateAction,
  MutableRefObject,
} from "react";
import { cls } from "../../libs/utils";
import { ModalState } from "./Boards";

interface DeleteBoardForm {
  boardName: string;
}

interface DeleteBoardModalProps {
  modalState: ModalState;
  setModalState: Dispatch<SetStateAction<ModalState>>;
  deleteBoardBtnRef: MutableRefObject<HTMLButtonElement | null>;
}
function DeleteBoardModal({
  modalState,
  setModalState,
  deleteBoardBtnRef,
}: DeleteBoardModalProps) {
  const { register, handleSubmit, reset } = useForm<DeleteBoardForm>();
  const navigate = useNavigate();
  const onValid = (data: DeleteBoardForm) => {
    console.log(data);
    // reset();
    navigate("/boards");
  };
  const [createBoardError, setCreateBoardError] = useState<string | null>(null);
  const onInvalid = (error: FieldErrors) => {};
  const modalRef = useRef<HTMLDivElement | null>(null);

  const cloesModalHandle = () => {
    setModalState((prevState) => ({
      ...prevState,
      deleteModalOpen: false,
    }));
  };

  useEffect(() => {
    const outsideClickHandle = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        deleteBoardBtnRef.current &&
        !deleteBoardBtnRef.current.contains(event.target as Node)
      ) {
        cloesModalHandle();
      }
    };
    if (modalState.createModalOpen) {
      document.addEventListener("mousedown", outsideClickHandle);
    }
    return () => {
      document.removeEventListener("mousedown", outsideClickHandle);
    };
  }, [modalState]);

  return (
    <div
      className={cls(
        "fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black bg-opacity-50 flex justify-center items-center",
        modalState.deleteModalOpen ? "" : "hidden"
      )}
    >
      <div ref={modalRef} className="relative w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            onClick={() => cloesModalHandle()}
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
              보드 삭세하기
            </h3>
            <form
              onSubmit={handleSubmit(onValid, onInvalid)}
              className="space-y-6"
              action="#"
            >
              <div>
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