import { useRef, useEffect } from "react";
import { IBoardItemBtnsProps } from "../interface/kanban";
import { boardsItemModalHandle } from "./modal/boardItem/common";

function BoardBtns({
  setBoardItemModal,
  setBoardItemModalBtnRef,
  provided,
}: IBoardItemBtnsProps) {
  const deleteBoardItemBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setBoardItemModalBtnRef({
      deleteBoardItemBtnRef: deleteBoardItemBtnRef,
    });
  }, [setBoardItemModalBtnRef]);

  return (
    <div className="flex items-center gap-1">
      <div>
        <button
          onClick={() =>
            boardsItemModalHandle(
              setBoardItemModal,
              "createTaskModalOpen",
              true
            )
          }
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
      <div>
        <button
          ref={deleteBoardItemBtnRef}
          onClick={() =>
            boardsItemModalHandle(
              setBoardItemModal,
              "deleteBoardItemModalOpen",
              true
            )
          }
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

export default BoardBtns;
