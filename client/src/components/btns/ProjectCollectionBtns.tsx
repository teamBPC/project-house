import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { IBtnsProps } from "../../interface/kanbanBoard";
import { modalHandle } from "../../libs/modalHandle";

function ProjectCollectionBtns({ setModalBtnRef }: IBtnsProps) {
  const dispatch = useDispatch();
  const editProjectsBtnRef = useRef<HTMLButtonElement>(null);
  const deleteProjectsBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setModalBtnRef({
      editProjectsBtnRef: editProjectsBtnRef,
      deleteProjectsBtnRef: deleteProjectsBtnRef,
    });
  }, [setModalBtnRef]);

  return (
    <div className="flex items-center ">
      <div>
        <button
          ref={editProjectsBtnRef}
          onClick={() => modalHandle(dispatch, "editProjectsModalOpen", true)}
          className="flex"
        >
          <span className="p-1 transition duration-100 ease-in-out rounded-md material-symbols-outlined hover:bg-gray-100">
            edit
          </span>
        </button>
      </div>
      <div>
        <button
          ref={deleteProjectsBtnRef}
          onClick={() => modalHandle(dispatch, "deleteProjectsModalOpen", true)}
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

export default ProjectCollectionBtns;
