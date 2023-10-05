import { useState } from "react";
import { useSelector } from "react-redux";
import { IBoards } from "../../interface/kanban";
import { Link } from "react-router-dom";
import { IBtnRefState, IModalState } from "../../interface/modal";
import BoardsBtns from "../../components/BoardsBtns";
import DeleteBoardsModal from "../../components/modal/boards/DeleteBoardsModal";
import CreateBoardsModal from "../../components/modal/boards/CraeteBoardsModal";
import EditBoardsModal from "../../components/modal/boards/EditBoardsModal";
import { hoverModalHandle } from "./common/common";
import { cls } from "../../libs/utils";

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

  const [isModalOpen, setIsModalOpen] = useState(
    Array(boards.length).fill(false)
  );

  return (
    <>
      <div className="w-full p-4 pt-16">
        <ul className="grid grid-cols-4 gap-4">
          {boards.map((item, index) => (
            <li
              key={item.id}
              className="relative block p-2 bg-gray-100 border border-gray-200 rounded-lg shadow hover:bg-gray-100"
            >
              <div className="flex flex-col gap-4">
                <div className="z-20 flex items-center justify-between p-1 transition duration-100 ease-in-out rounded-md hover:bg-gray-300">
                  <span className="flex w-full truncate">
                    <Link
                      to={`board/${item.id}`}
                      className="flex-1 pl-1 text-2xl font-bold tracking-tight text-gray-900 truncate"
                    >
                      {item.title}
                    </Link>
                  </span>

                  <BoardsBtns setModalBtnRef={setModalBtnRef} />
                </div>
                <div className="flex">
                  <span
                    className="flex-1 p-2 font-normal text-gray-700 truncate"
                    onMouseEnter={() =>
                      hoverModalHandle(isModalOpen, setIsModalOpen, index, true)
                    }
                    onMouseLeave={() =>
                      hoverModalHandle(
                        isModalOpen,
                        setIsModalOpen,
                        index,
                        false
                      )
                    }
                  >
                    {item.description}
                  </span>
                </div>
                <div className="absolute z-50 left-2 top-[100px]">
                  <div
                    className={cls(
                      " text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow",
                      isModalOpen[index] ? "" : "hidden"
                    )}
                    id="user-dropdown"
                  >
                    <div className="px-4 py-3">
                      <span className="block max-w-sm text-sm text-gray-900 break-words whitespace-pre-wrap">
                        {item.description}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
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
