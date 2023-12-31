import { useEffect, useRef } from "react";
import { modalHandle } from "../../../../libs/modalHandle";
import { cls } from "../../../../libs/utils";
import { useDispatch } from "react-redux";
import { IModalProps } from "../../../../interface/modal";
import { IToDo } from "../../../../interface/kanbanBoard";
import TaskDetailModalContent from "./TaskDetailModalContent";
import TaskDetailModalComment from "./TaskDetailModalComment";
import { modalOutsideClick } from "../../../../libs/modalOutsideClick";

function TaskDetailModal({
  modalState,
  selectedTaskData,
}: IModalProps & { selectedTaskData: IToDo | null }) {
  const dispatch = useDispatch();
  const modalRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      className={cls(
        "fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen bg-black bg-opacity-50 flex justify-center items-center",
        modalState.taskDetailModalOpen ? "" : "hidden"
      )}
    >
      <div
        ref={modalRef}
        className="relative grid grid-cols-10 bg-white rounded-lg shadow "
      >
        <button
          type="button"
          onClick={() => modalHandle(dispatch, "taskDetailModalOpen", false)}
          className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
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
        <TaskDetailModalContent taskData={selectedTaskData} />
        <TaskDetailModalComment />
      </div>
    </div>
  );
}

export default TaskDetailModal;
