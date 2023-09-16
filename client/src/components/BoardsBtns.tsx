import { useRef,useEffect } from "react";
import { IBoardsBtnsProps } from "../interface/kanban";
import { IBoardsModalState } from "../interface/modal";

function BoardsBtns({
  setBoardsModal,
  setBoardsModalBtnRef,
}: IBoardsBtnsProps) {
  const editBoardsBtnRef = useRef<HTMLButtonElement | null>(null);
  const deleteBoardsBtnRef = useRef<HTMLButtonElement | null>(null);

  const openModalHandle = (modalType: keyof IBoardsModalState) => {
    setBoardsModal((prevState) => ({
      ...prevState,
      [modalType]: true,
    }));
  };

  useEffect(() => {
    setBoardsModalBtnRef({
      editBoardsBtnRef: editBoardsBtnRef,
      deleteBoardsBtnRef: deleteBoardsBtnRef,
    });
  }, []);
  
  return (
    <div className="flex items-center gap-1">
      <div>
        <button
          ref={editBoardsBtnRef}
          onClick={() => openModalHandle("editBoardsModalOpen")}
          className="flex"
        >
          <span className="p-1 transition duration-100 ease-in-out rounded-md material-symbols-outlined hover:bg-gray-300">
            edit
          </span>
        </button>
      </div>
      <div>
        <button
          ref={deleteBoardsBtnRef}
          onClick={() => openModalHandle("deleteBoardsModalOpen")}
          className="flex"
        >
          <span className="p-1 transition duration-100 ease-in-out rounded-md material-symbols-outlined hover:bg-gray-300">
            delete
          </span>
        </button>
      </div>
    </div>
  );
}

export default BoardsBtns;
