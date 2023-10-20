import { Draggable, Droppable } from "react-beautiful-dnd";
import { IBoardProps, IToDo } from "../../interface/kanban";
import { cls } from "../../libs/utils";
import { modalHandle } from "../../components/modal/common";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { IBtnRefState, IModalState } from "../../interface/modal";
import TaskDetailModal from "../../components/modal/kanbanTask/taskDetailModal/TaskDetailModal";

function KanbanTask({ boardItem, index }: IBoardProps) {
  const dispatch = useDispatch();
  const taskDetailBtnRef = useRef<HTMLButtonElement>(null);
  const modalState = useSelector(
    ({ modalStateSlice }: { modalStateSlice: IModalState }) => {
      return modalStateSlice.modalState;
    }
  );
  const [modalBtnRef, setModalBtnRef] = useState<IBtnRefState>({
    taskDetailBtnRef: null,
  });
  const [selectedTaskData, setSelectedTaskData] = useState<IToDo | null>(null);
  const sendTaskData = (task: IToDo) => {
    modalHandle(dispatch, "taskDetailModalOpen", true);
    setSelectedTaskData(task);
  };
  useEffect(() => {
    if (!modalState.taskDetailModalOpen) {
      setSelectedTaskData(() => null);
    }
  }, [modalState.taskDetailModalOpen]);

  useEffect(() => {
    setModalBtnRef({
      taskDetailBtnRef: taskDetailBtnRef,
    });
  }, [taskDetailBtnRef]);

  return (
    <>
      <Droppable droppableId={"card-" + boardItem.id} type="card">
        {(provided, snapshot) => (
          <ul
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="flex flex-col gap-2 p-1"
          >
            {boardItem.todos.length === 0 ? (
              <span className="p-1">Board가 비어있습니다.</span>
            ) : (
              boardItem.todos.map((task, index) => (
                <Draggable
                  draggableId={task.id + "-card"}
                  index={index}
                  key={task.id}
                >
                  {(provided, snapshot) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={cls(
                        "relative block p-2 overflow-hidden text-base bg-white border-l-4  rounded-md shadow-md cursor-pointer",
                        task.priority === "high"
                          ? "border-red-600"
                          : task.priority === "mid"
                          ? "border-yellow-400"
                          : task.priority === "low"
                          ? "border-green-500"
                          : "border-slate-500"
                      )}
                    >
                      <div className="flex flex-col">
                        <div className="flex flex-col gap-4">
                          <div className="grid items-start justify-between max-w-full grid-cols-4">
                            <span className="w-full col-span-3 text-lg font-bold break-all whitespace-pre-wrap text-clip">
                              {task.title}
                            </span>
                            <span className="col-span-1 text-sm font-light text-end">
                              {task.end}
                            </span>
                          </div>
                          <button
                            onClick={() => sendTaskData(task)}
                            ref={taskDetailBtnRef}
                            className="text-left truncate hover:whitespace-pre-wrap hover:break-words"
                          >
                            <span>{task.description}</span>
                          </button>
                          <div className="flex items-end justify-between font-bold">
                            <span>{task.maker}</span>
                            <div className="flex gap-2 text-gray-500">
                              <div className="flex items-center gap-1">
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="20"
                                    viewBox="0 -960 960 960"
                                    width="20"
                                    className="fill-gray-500"
                                  >
                                    <path d="M234.001-396.001h491.998v-51.998H234.001v51.998Zm0-146h491.998v-51.998H234.001v51.998Zm0-146h491.998v-51.998H234.001v51.998ZM875.999-92.464 724.461-244.001H174.309q-37.733 0-64.02-26.288-26.288-26.287-26.288-64.02v-463.382q0-37.733 26.288-64.02 26.287-26.288 64.02-26.288h611.382q37.733 0 64.02 26.288 26.288 26.287 26.288 64.02v705.227ZM162-322v-488V-322Zm593.999 0L798-278.615v-519.076q0-4.616-3.846-8.463-3.847-3.846-8.463-3.846H174.309q-4.616 0-8.463 3.846-3.846 3.847-3.846 8.463v463.382q0 4.616 3.846 8.463 3.847 3.846 8.463 3.846h581.69Z" />
                                  </svg>
                                </span>
                                <span className="text-xs font-bold">7</span>
                              </div>

                              <div className="flex items-center ">
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="20"
                                    viewBox="0 -960 960 960"
                                    width="20"
                                    className="fill-gray-500"
                                  >
                                    <path d="M456.244-92.616q-91.013 0-153.013-65.327t-62-155.441v-405.309q0-65.144 44.967-110.61 44.966-45.466 110.11-45.466 67.144 0 111.11 47.966 43.966 47.966 43.966 114.11v378.001q0 39.061-28.664 66.723-28.665 27.661-66.731 27.661-41.066 0-68.22-30.161-27.153-30.162-27.153-69.223v-392.001h65.691v397.001q0 12.419 8.607 21.056 8.606 8.637 20.981 8.637 12.374 0 21.086-8.637 8.712-8.637 8.712-21.056v-384.001q0-37.262-26.071-63.823-26.071-26.562-63.347-26.562-37.275 0-63.314 27.062-26.038 27.061-26.038 65.323v410.654q0 62.221 43.893 104.976 43.893 42.756 105.308 42.756 64.415 0 106.684-45.256 42.269-45.255 42.269-107.476v-420.654h65.692v425.309q0 89.114-62.257 151.441-62.256 62.327-152.268 62.327Z" />
                                  </svg>
                                </span>
                                <span className="text-xs font-bold">7</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  )}
                </Draggable>
              ))
            )}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
      {selectedTaskData && (
        <TaskDetailModal
          modalState={modalState}
          modalBtnRef={modalBtnRef}
          selectedTaskData={selectedTaskData}
        />
      )}
    </>
  );
}

export default KanbanTask;
