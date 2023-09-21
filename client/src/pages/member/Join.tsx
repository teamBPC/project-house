import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { cls } from "../../libs/utils";
import { JoinForm } from "../../interface/porfile";
import { useCommonForm } from "../../libs/useCommonForm";

function Join() {
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [nameError, setNameError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const { register, handleSubmit, reset, submitFormData } = useCommonForm();
  const navigate = useNavigate();
  const { state } = useLocation();
  const userEmail = state?.userEmail || "";

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const onValid = async (data: JoinForm) => {
    const emailRegex = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]{2,}$/;
    const koreanRegex = /[가-힣]/;
    if (koreanRegex.test(data.userEmail)) {
      setEmailError("이메일 주소에 한글이 포함되어 있습니다.");
    } else if (!emailRegex.test(data.userEmail)) {
      setEmailError("올바른 이메일 형식이 아닙니다.");
    } else {
      setEmailError(null);
    }
    const nameRegex = /^[A-Za-z가-힣]*$/;
    if (!nameRegex.test(data.userNm)) {
      setNameError("이름에는 특수 문자나 공백을 포함할 수 없습니다.");
      return;
    } else {
      setNameError(null);
    }
    const passwordRegex = /^(?=.*[A-Za-z].*[A-Za-z])(?=.*\d.*\d.*\d.*\d)/;
    if (!passwordRegex.test(data.userPw)) {
      setPasswordError(
        "비밀번호는 영문 2개 이상과 숫자 4개 이상을 포함해야 합니다."
      );
      return;
    } else {
      setPasswordError(null);
    }
    const dataCustomer = {
      userEmail: data.userEmail,
      userPw: data.userPw,
      userNm: data.userNm,
    };
    const res = await submitFormData(
      "http://localhost:20492/login/join",
      dataCustomer
    );

    if (res) {
      alert("가입이 완료되었습니다.");
      navigate("/login-id");
    } else {
      alert("형식이 잘못되었습니다.");
      reset();
    }
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center justify-center ">
          <span className="text-3xl font-bold tracking-tightsm:text-4xl">
            PROJECT HOUSE
          </span>
        </div>
        <form onSubmit={handleSubmit(onValid)} className="w-full">
          <div className="mb-6">
            <label
              htmlFor="userEmail"
              className={cls(
                "block mb-2 text-sm font-semibold",
                emailError
                  ? "text-red-500 dark:text-red-500"
                  : "text-gray-900 dark:text-white"
              )}
            >
              이메일
            </label>
            <input
              id="userEmail"
              type="text"
              {...register("userEmail", {
                required: true,
                maxLength: 50,
              })}
              defaultValue={userEmail}
              className={cls(
                "bg-gray-50   border text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white",
                emailError
                  ? "border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:ring-blue-500 focus:border-blue-500"
              )}
              required
            />
            {emailError && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium">{emailError}</span>
              </p>
            )}
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="userNm"
                className={cls(
                  "block mb-2 text-sm font-semibold",
                  nameError
                    ? "text-red-500 dark:text-red-500"
                    : "text-gray-900 dark:text-white"
                )}
              >
                이름
              </label>
              <input
                id="userNm"
                type="text"
                {...register("userNm", { required: true, maxLength: 10 })}
                className={cls(
                  "bg-gray-50   border text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white",
                  nameError
                    ? "border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500  focus:ring-blue-500 focus:border-blue-500"
                )}
                required
              />
              {nameError && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  <span className="font-medium">{nameError}</span>
                </p>
              )}
            </div>
            <div className="mb-6 ">
              <label
                htmlFor="userPw"
                className={cls(
                  "block mb-2 text-sm font-semibold",
                  passwordError
                    ? "text-red-500 dark:text-red-500"
                    : "text-gray-900 dark:text-white"
                )}
              >
                비밀번호
              </label>
              <div className="relative">
                <input
                  id="userPw"
                  type={showPassword ? "text" : "password"}
                  {...register("userPw", {
                    required: true,
                    maxLength: 30,
                  })}
                  className={cls(
                    "bg-gray-50   border text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white",
                    passwordError
                      ? "border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500 focus:ring-red-500 focus:border-red-500"
                      : "border-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:ring-blue-500 focus:border-blue-500"
                  )}
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
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    <span className="font-medium">{passwordError}</span>
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="website"
              className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
            >
              개인
            </label>
            <input
              type="url"
              id="website"
              {...register("website", { required: false })}
              className="bg-gray-50 border text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white border-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500  focus:ring-blue-500 "
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4  focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Join;
