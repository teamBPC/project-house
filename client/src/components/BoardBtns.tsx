import { useRef } from "react";
import { BoardBtnsProps, ModalState } from "../interface/kanban";

function BoardBtns({ setModalState, provided }: BoardBtnsProps) {
  const craeteTaskBtnRef = useRef<HTMLButtonElement | null>(null);
  const deleteBoardBtnRef = useRef<HTMLButtonElement | null>(null);

  const openModalHandle = (modalType: keyof ModalState) => {
    setModalState((prevState) => ({
      ...prevState,
      [modalType]: true,
    }));
  };

  return (
    <div className="flex items-center gap-1">
      <div>
        <button
          ref={craeteTaskBtnRef}
          onClick={() => openModalHandle("createModalOpen")}
          className="flex"
        >
          <span className="p-1 transition duration-100 ease-in-out rounded-md material-symbols-outlined hover:bg-gray-300">
            add
          </span>
        </button>
      </div>
      <span
        className="p-1 transition duration-100 ease-in-out rounded-md material-symbols-outlined hover:bg-gray-300"
        {...provided.dragHandleProps}
      >
        drag_pan
      </span>
      <button
        ref={deleteBoardBtnRef}
        onClick={() => openModalHandle("deleteModalOpen")}
        className="flex"
      >
        <span className="p-1 transition duration-100 ease-in-out rounded-md material-symbols-outlined hover:bg-gray-300">
          delete
        </span>
      </button>
    </div>
  );
}

export default BoardBtns;
