import { FieldErrors, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { cls } from "../../libs/utils";
import DatePicker from "../../components/Datepicker";
import { CreateTaskForm, ModalProps } from "../../interface/modal";

function CreateTaskModal({ modalState, setModalState, btnRef }: ModalProps) {
  const { register, handleSubmit, reset } = useForm<CreateTaskForm>();
  const navigate = useNavigate();
  const onValid = (data: CreateTaskForm) => {
    console.log(data);
    // reset();
    navigate("/boards");
  };
  const [createBoardError, setCreateBoardError] = useState<string | null>(null);
  const onInvalid = (error: FieldErrors) => {};
  const modalRef = useRef<HTMLDivElement | null>(null);

  const cloesModalHandle = () => {
    setModalState((prevState) => ({
      ...prevState,
      createModalOpen: false,
    }));
  };

  useEffect(() => {
    const outsideClickHandle = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        btnRef.current &&
        !btnRef.current.contains(event.target as Node)
      ) {
        cloesModalHandle();
      }
    };
    if (modalState.createModalOpen) {
      document.addEventListener("mousedown", outsideClickHandle);
    }
    return () => {
      document.removeEventListener("mousedown", outsideClickHandle);
    };
  }, [modalState]);

  return (
    <>
      <div
        className={cls(
          "fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen bg-black bg-opacity-50 flex justify-center items-center",
          modalState.createModalOpen ? "" : "hidden"
        )}
      >
        <div ref={modalRef} className="relative w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              onClick={() => cloesModalHandle()}
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="authentication-modal"
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
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                새 테스크 생성하기
              </h3>
              <form
                onSubmit={handleSubmit(onValid, onInvalid)}
                className="space-y-6"
                action="#"
              >
                <div>
                  <label
                    htmlFor="title"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    제목
                  </label>
                  <input
                    type="text"
                    id="title"
                    {...register("title", { required: true })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-blue-500"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="manager"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      담당자
                    </label>
                    <input
                      type="text"
                      id="manager"
                      {...register("manager", { required: true })}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="priority"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      우선순위
                    </label>
                    <select
                      id="priority"
                      {...register("priority", { required: true })}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-blue-500"
                      required
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

                <DatePicker register={register} />
                <div>
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    설명
                  </label>
                  <textarea
                    id="description"
                    {...register("description", { required: true })}
                    className="bg-gray-50 border max-h-72 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-blue-500"
                    required
                    rows={4}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4  focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                >
                  생성하기
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CreateTaskModal;
