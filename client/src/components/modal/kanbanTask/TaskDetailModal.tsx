import { useEffect, useRef, useState } from "react";
import { modalHandle } from "../common";
import { cls } from "../../../libs/utils";
import { useDispatch } from "react-redux";
import { IModalProps } from "../../../interface/modal";
import { useCommonForm } from "../../../libs/useCommonForm";
import { FieldErrors } from "react-hook-form";
import { IToDo } from "../../../interface/kanban";
import DatePicker from "../../Datepicker";

function TaskDetailModal({
  modalState,
  modalBtnRef,
  selectedTaskData,
}: IModalProps & { selectedTaskData: IToDo | null }) {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset, submitFormData } = useCommonForm();
  const onValid = async () => {};
  const onInvalid = (error: FieldErrors) => {};
  const modalRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const outsideClickHandle = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        modalBtnRef.current &&
        !modalBtnRef.current.contains(event.target as Node)
      ) {
        modalHandle(dispatch, "taskDetailModalOpen", false);
      }
    };
    if (modalState.taskDetailModalOpen) {
      document.addEventListener("mousedown", outsideClickHandle);
    }
    return () => {
      document.removeEventListener("mousedown", outsideClickHandle);
    };
  }, [dispatch, modalBtnRef, modalState.taskDetailModalOpen]);

  return (
    <>
      {selectedTaskData && (
        <div
          className={cls(
            "fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen bg-black bg-opacity-50 flex justify-center items-center",
            modalState.taskDetailModalOpen ? "" : "hidden"
          )}
        >
          <div ref={modalRef} className="relative ">
            <div className="relative bg-white rounded-lg shadow">
              <button
                type="button"
                onClick={() =>
                  modalHandle(dispatch, "taskDetailModalOpen", false)
                }
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
              <div>
                <div className="px-8 py-6">
                  <div className="mb-4">
                    <label
                      htmlFor="title"
                      className="flex justify-between mb-2 text-sm font-medium text-gray-900"
                    >
                      <span>제목</span>
                      <span className="text-sm font-bold">
                        만든 날짜:{" "}
                        <span className="font-normal">
                          {selectedTaskData.createAt}
                        </span>
                      </span>
                    </label>
                    <input
                      type="text"
                      id="title"
                      {...register("title", { required: true })}
                      className="bg-gray-50 border w-full  border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 outline-blue-500 text-xl"
                      required
                      defaultValue={selectedTaskData.title}
                    />
                  </div>
                  <div>
                    <form onSubmit={handleSubmit(onValid, onInvalid)}>
                      <DatePicker register={register} />
                      <div className="grid grid-cols-2 gap-4 py-4">
                        <div>
                          <label
                            htmlFor="manager"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            담당자
                          </label>
                          <input
                            type="text"
                            id="manager"
                            {...register("manager", { required: true })}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-blue-500"
                            required
                            defaultValue={selectedTaskData.maker}
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="priority"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            우선순위
                          </label>
                          <select
                            id="priority"
                            {...register("priority", { required: true })}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-blue-500"
                            required
                            defaultValue={selectedTaskData.priority}
                          >
                            <option defaultValue="default">선택</option>
                            <option value="high" className="text-red-600">
                              높음
                            </option>
                            <option value="mid" className="text-yellow-500">
                              중간
                            </option>
                            <option value="low" className="text-green-500">
                              낮음
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="block mb-2 text-sm font-medium text-gray-900"></div>
                      <div>
                        <label
                          htmlFor="description"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          설명
                        </label>
                        <textarea
                          id="description"
                          {...register("description", { required: true })}
                          className="bg-gray-50 border max-h-72 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-blue-500"
                          required
                          rows={8}
                          defaultValue={selectedTaskData.description}
                        ></textarea>
                      </div>
                      <div className="flex justify-end">
                        <button
                          type="submit"
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                        >
                          저장
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      )}
    </>
  );
}

export default TaskDetailModal;
