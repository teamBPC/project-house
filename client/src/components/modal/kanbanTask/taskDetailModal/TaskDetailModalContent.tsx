import { FieldErrors } from "react-hook-form";
import { SetStateAction, useState } from "react";
import { useCommonForm } from "../../../../libs/useCommonForm";
import DatePicker from "../../../Datepicker";
import { IToDo } from "../../../../interface/kanban";
import { cls } from "../../../../libs/utils";

function TaskDetailModalContent({ taskData }: { taskData: IToDo | null }) {
  const { register, handleSubmit, submitFormData } = useCommonForm();
  const onValid = async () => {};
  const onInvalid = (error: FieldErrors) => {};

  const [selected, setSelected] = useState("");

  const handleSelect = (e: { target: { value: SetStateAction<string> } }) => {
    setSelected(e.target.value);
  };

  const [editToggle, setEditToggle] = useState(true);

  const editToggleHandle = () => {
    setEditToggle((toggle) => !toggle);
  };
  return (
    <>
      {taskData && (
        <div className="col-span-6">
          <div className="px-8 py-6">
            <div>
              <label
                htmlFor="title"
                className="flex justify-between mb-2 text-sm font-medium text-gray-900"
              >
                <span>제목</span>
                <span className="text-sm font-bold">
                  만든 날짜:{" "}
                  <span className="font-normal">{taskData.createAt}</span>
                </span>
              </label>
              <input
                type="text"
                id="title"
                {...register("title", { required: true, disabled: editToggle })}
                className="bg-gray-50 border w-full  border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 outline-blue-500 text-xl"
                required
                defaultValue={taskData.title}
              />
            </div>
            <div>
              <form onSubmit={handleSubmit(onValid, onInvalid)}>
                <div className="grid grid-cols-2 gap-4 py-4">
                  <div>
                    <label
                      htmlFor="maker"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      담당자
                    </label>
                    <input
                      type="text"
                      id="maker"
                      {...register("maker", {
                        required: true,
                        disabled: editToggle,
                      })}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-blue-500"
                      required
                      defaultValue={taskData.maker}
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
                      {...register("priority", {
                        required: true,
                        disabled: editToggle,
                      })}
                      className={cls(
                        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-blue-500 font-bold",
                        selected
                          ? selected === "high"
                            ? "text-red-600 border-red-600 outline-red-500 focus:border-red-500 focus:ring-red-500"
                            : selected === "mid"
                            ? "text-yellow-400 border-yellow-400 outline-yellow-500 focus:border-yellow-500 focus:ring-yellow-500"
                            : selected === "low"
                            ? "text-green-500 border-green-500 outline-green-500 focus:border-green-500 focus:ring-green-500"
                            : "text-slate-500"
                          : taskData.priority === "high"
                          ? "text-red-600 border-red-600 outline-red-500 focus:border-red-500 focus:ring-red-500"
                          : taskData.priority === "mid"
                          ? "text-yellow-400 border-yellow-400 outline-yellow-500 focus:border-yellow-500 focus:ring-yellow-500"
                          : taskData.priority === "low"
                          ? "text-green-500 border-green-500 outline-green-500 focus:border-green-500 focus:ring-green-500"
                          : "text-slate-500"
                      )}
                      required
                      defaultValue={taskData.priority}
                      onChange={handleSelect}
                    >
                      <option defaultValue="default" className="text-slate-500">
                        선택
                      </option>
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
                <DatePicker
                  register={register}
                  startDate={taskData.start}
                  endDate={taskData.end}
                  editToggle={editToggle}
                />
                <div className="gap-4 my-4 text-sm font-medium text-gray-900 ">
                  <span className="block mb-2 ">담당 팀원 추가</span>
                  <div className="grid justify-between grid-cols-5 gap-4">
                    <div className="col-span-2">
                      <div className="relative">
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          />
                        </svg>
                        <input
                          className="py-2 pl-10 text-sm leading-6 rounded-md shadow-sm appearance-none focus:ring-2 focus:ring-blue-600 focus:outline-none text-slate-900 placeholder-slate-400 ring-1 ring-slate-200"
                          type="text"
                          aria-label="Filter projects"
                          placeholder="팀원을 검색하세요"
                        />
                      </div>
                    </div>
                    <div className="max-w-sm col-span-3">
                      <div className="flex flex-wrap h-auto -space-x-4 ">
                        {[1, 2, 3, 4, 5, 6].map((list) => (
                          <img
                            className="w-10 h-10 border-2 border-white rounded-full"
                            src={`https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/f7fa91bd-bd76-4274-5220-e796e1565100/avatar`}
                            alt="avartar"
                            key={list}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    설명
                  </label>
                  <textarea
                    id="description"
                    {...register("description", {
                      required: true,
                      disabled: editToggle,
                    })}
                    className="bg-gray-50 border max-h-72 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-blue-500"
                    required
                    rows={8}
                    defaultValue={taskData.description}
                  ></textarea>
                </div>
                <div className="flex justify-between mt-2 font-medium text-center text-white">
                  <button
                    type="submit"
                    className=" bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5"
                  >
                    삭제
                  </button>
                  <div className="flex gap-2">
                    <button
                      type="submit"
                      className=" bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm  px-5 py-2.5 "
                      onClick={() => editToggleHandle()}
                    >
                      수정
                    </button>
                    <button
                      type="submit"
                      className={cls(
                        " bg-blue-700  rounded-lg text-sm  px-5 py-2.5 ",
                        editToggle
                          ? "opacity-50"
                          : "hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                      )}
                      disabled={editToggle}
                    >
                      저장
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default TaskDetailModalContent;
