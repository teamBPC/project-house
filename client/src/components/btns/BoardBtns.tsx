import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { IBtnsProps } from "../../interface/kanbanBoard";
import { modalHandle } from "../../libs/modalHandle";

function BoardBtns({ setModalBtnRef, provided }: IBtnsProps) {
  const dispatch = useDispatch();
  const deleteBoardItemBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setModalBtnRef({
      deleteBoardItemBtnRef: deleteBoardItemBtnRef,
    });
  }, [setModalBtnRef]);

  return (
    <div className="flex items-center gap-1">
      <div>
        <button
          onClick={() => modalHandle(dispatch, "createTaskModalOpen", true)}
          className="flex"
        >
          <span className="p-1 transition duration-100 ease-in-out rounded-md material-symbols-outlined hover:bg-gray-300">
            add
          </span>
        </button>
      </div>
      <span
        className="p-1 transition duration-100 ease-in-out rounded-md material-symbols-outlined hover:bg-gray-300"
        {...provided?.dragHandleProps}
      >
        drag_pan
      </span>
      <div>
        <button
          ref={deleteBoardItemBtnRef}
          onClick={() =>
            modalHandle(dispatch, "deleteBoardItemModalOpen", true)
          }
          className="flex"
        >
          <span className="p-1 transition duration-100 ease-in-out rounded-md material-symbols-outlined hover:bg-gray-300">
            delete_forever
          </span>
        </button>
      </div>
    </div>
  );
}

export default BoardBtns;
