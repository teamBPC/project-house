import { useState, useEffect, useRef } from "react";
import { modalHandle } from "../common";
import { cls } from "../../../libs/utils";
import { useDispatch } from "react-redux";
import { IModalProps } from "../../../interface/modal";
import { useCommonForm } from "../../../libs/useCommonForm";
import { FieldErrors } from "react-hook-form";

function EditProfileModal({ modalState }: IModalProps) {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset, submitFormData } = useCommonForm();
  const onValid = async () => {};
  const onInvalid = (error: FieldErrors) => {};

  const modalRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const outsideClickHandle = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        btnRef.current &&
        !btnRef.current.contains(event.target as Node)
      ) {
        modalHandle(dispatch, "editProfileModalOpen", false, reset);
      }
    };
    if (modalState.editProfileModalOpen) {
      document.addEventListener("mousedown", outsideClickHandle);
    }
    return () => {
      document.removeEventListener("mousedown", outsideClickHandle);
    };
  }, [dispatch, modalState.editProfileModalOpen, reset]);

  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const [passwordError, setPasswordError] = useState<string | null>(null);
  return (
    <>
      <button
        ref={btnRef}
        onClick={() => modalHandle(dispatch, "editProfileModalOpen", true)}
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        type="button"
      >
        Toggle modal
      </button>
      <div
        className={cls(
          "fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen bg-black bg-opacity-50 flex justify-center items-center",
          modalState.editProfileModalOpen ? "" : "hidden"
        )}
      >
        <div ref={modalRef} className="relative w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow">
            <button
              type="button"
              onClick={() =>
                modalHandle(dispatch, "editProfileModalOpen", false, reset)
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
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900">
                프로필 편집
              </h3>
              <div className="flex items-center gap-4">
                <img
                  className="w-16 h-16 rounded-full"
                  src={`https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/f7fa91bd-bd76-4274-5220-e796e1565100/avatar`}
                  alt="avartar"
                />
                <label
                  htmlFor="picture"
                  className="px-3 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md shadow-sm cursor-pointer hover:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  Change
                  <input
                    name="avatar"
                    id="picture"
                    type="file"
                    className="hidden"
                    accept="image/*"
                  />
                </label>
              </div>
              <div className="mt-4">
                <form onSubmit={handleSubmit(onValid, onInvalid)}>
                  <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        이름
                      </label>
                      <input
                        type="text"
                        id="name"
                        {...register("name", { required: true })}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-blue-500"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="website"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        개인 홈페이지 및 블로그
                      </label>
                      <input
                        type="url"
                        id="website"
                        {...register("website", { required: false })}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-blue-500"
                        placeholder="flowbite.com"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      이메일
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register("email", { required: true })}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-blue-500"
                      placeholder="qwer@qwer.com"
                      required
                    />
                  </div>
                  <div className="pb-6">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      비밀번호
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        id="password"
                        {...register("password", { required: true })}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-blue-500"
                        placeholder="•••••••••"
                        required
                      />
                      <button
                        type="button"
                        onClick={handleTogglePassword}
                        className="absolute top-1 right-3"
                      >
                        {showPassword ? (
                          <span className="mt-1.5 text-gray-400 material-symbols-outlined">
                            visibility
                          </span>
                        ) : (
                          <span className="mt-1.5 text-gray-400 material-symbols-outlined">
                            visibility_off
                          </span>
                        )}
                      </button>
                      {passwordError && (
                        <p className="mt-2 text-sm text-red-600">
                          <span className="font-medium">{passwordError}</span>
                        </p>
                      )}
                    </div>
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
      </div>
    </>
  );
}

export default EditProfileModal;
