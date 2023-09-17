import { useState } from "react";
import { useSelector } from "react-redux";
import { IBoards } from "../../interface/kanban";
import { Link } from "react-router-dom";
import { IBtnRefState, IModalState } from "../../interface/modal";
import BoardsBtns from "../../components/BoardsBtns";
import DeleteBoardsModal from "../../components/modal/boards/DeleteBoardsModal";
import CreateBoardsModal from "../../components/modal/boards/CraeteBoardsModal";
import EditBoardsModal from "../../components/modal/boards/EditBoardsModal";

function Boards() {
  const boards = useSelector(({ boardsSlice }: { boardsSlice: IBoards }) => {
    return boardsSlice.boards;
  });
  const modalState = useSelector(
    ({ modalStateSlice }: { modalStateSlice: IModalState }) => {
      return modalStateSlice.modalState;
    }
  );
  const [modalBtnRef, setModalBtnRef] = useState<IBtnRefState>({
    editBoardsBtnRef: null,
    deleteBoardsBtnRef: null,
  });

  return (
    <>
      <div className="w-full p-4">
        <ul className="grid grid-cols-4 gap-4">
          {boards.map((item, index) => (
            <li
              key={item.id}
              className="block p-4 bg-gray-100 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              {/* <Link to="boards/:boardId" className="flex flex-col gap-4"> */}
              <div className="flex flex-col gap-4">
                <div className="z-20 flex items-start justify-between">
                  <span className="w-full mb-2 text-2xl font-bold tracking-tight text-gray-900 truncate dark:text-white">
                    {item.title}
                  </span>
                  <BoardsBtns setModalBtnRef={setModalBtnRef} />
                </div>
                <div className="flex">
                  <span className="flex-1 font-normal text-gray-700 truncate dark:text-gray-400">
                    {item.description}
                  </span>
                </div>
              </div>
              {/* </Link> */}
            </li>
          ))}
        </ul>
      </div>
      <CreateBoardsModal modalState={modalState} />
      <EditBoardsModal modalState={modalState} modalBtnRef={modalBtnRef} />
      <DeleteBoardsModal modalState={modalState} modalBtnRef={modalBtnRef} />
    </>
  );
}

export default Boards;
