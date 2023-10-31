import { useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { IBoardCollection } from "../../../interface/kanbanBoard";
import { Link } from "react-router-dom";
import { IBtnRefState, IModalState } from "../../../interface/modal";
import { hoverModalHandle } from "../../../libs/hoverModalHandle";
import { cls } from "../../../libs/utils";
import BoardCollectionBtns from "../../../components/btns/BoardCollectionBtns";
import EditBCModal from "../../../components/modal/board-collection/EditBCModal";
import DeleteBCModal from "../../../components/modal/board-collection/DeleteBCModal";
import CreateBCModal from "../../../components/modal/board-collection/CreateBCModal";

function BoardCollection() {
  const boardCollection = useSelector(({ boardCollectionSlice }: { boardCollectionSlice: IBoardCollection }) => {
    return boardCollectionSlice.boardCollection;
  });
  const modalState = useSelector(
    ({ modalStateSlice }: { modalStateSlice: IModalState }) => {
      return modalStateSlice.modalState;
    },
    shallowEqual
  );
  const [modalBtnRef, setModalBtnRef] = useState<IBtnRefState>({
    editBoardsBtnRef: null,
    deleteBoardsBtnRef: null,
  });

  const [isModalOpen, setIsModalOpen] = useState(
    Array(boardCollection.length).fill(false)
  );

  return (
    <>
      <div className="w-full p-4 pt-16">
        <ul className="grid grid-cols-4 gap-4">
          {boardCollection.map((item, index) => (
            <li
              key={item.id}
              className="relative block p-2 bg-gray-100 border border-gray-200 rounded-lg shadow hover:bg-gray-100"
            >
              <div className="flex flex-col gap-4">
                <div className="z-20 flex items-center justify-between p-1 transition duration-100 ease-in-out rounded-md hover:bg-gray-300">
                  <span className="flex w-full truncate">
                    <Link
                      to={`board-collection/${item.id}`}
                      className="flex-1 pl-1 text-2xl font-bold tracking-tight text-gray-900 truncate"
                    >
                      {item.title}
                    </Link>
                  </span>
                  <BoardCollectionBtns setModalBtnRef={setModalBtnRef} />
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
      <CreateBCModal modalState={modalState} />
      <EditBCModal modalState={modalState} modalBtnRef={modalBtnRef} />
      <DeleteBCModal modalState={modalState} modalBtnRef={modalBtnRef} />
    </>
  );
}

export default BoardCollection;
