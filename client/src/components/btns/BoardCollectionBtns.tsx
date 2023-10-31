import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { IBtnsProps } from "../../interface/kanbanBoard";
import { modalHandle } from "../../libs/modalHandle";

function BoardCollectionBtns({ setModalBtnRef }: IBtnsProps) {
  const dispatch = useDispatch();
  const editBoardsBtnRef = useRef<HTMLButtonElement>(null);
  const deleteBoardsBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setModalBtnRef({
      editBoardsBtnRef: editBoardsBtnRef,
      deleteBoardsBtnRef: deleteBoardsBtnRef,
    });
  }, [setModalBtnRef]);

  return (
    <div className="flex items-center">
      <div>
        <button
          ref={editBoardsBtnRef}
          onClick={() => modalHandle(dispatch, "editBoardsModalOpen", true)}
          className="flex"
        >
          <span className="p-1 transition duration-100 ease-in-out rounded-md material-symbols-outlined hover:bg-gray-100">
            edit
          </span>
        </button>
      </div>
      <div>
        <button
          ref={deleteBoardsBtnRef}
          onClick={() => modalHandle(dispatch, "deleteBoardsModalOpen", true)}
          className="flex"
        >
          <span className="p-1 transition duration-100 ease-in-out rounded-md material-symbols-outlined hover:bg-gray-100">
            delete_forever
          </span>
        </button>
      </div>
    </div>
  );
}

export default BoardCollectionBtns;
