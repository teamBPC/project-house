import { useNavigate } from "react-router-dom";
import { FieldErrors, useForm } from "react-hook-form";
import { useState } from "react";
import { cls } from "../../libs/utils";
import { JoinForm } from "../../interface/porfile";

function Join() {
  const { register, handleSubmit } = useForm<JoinForm>();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const onValid = (data: JoinForm) => {
    console.log(data);
    navigate("/");
  };
  const [emailError, setEmailError] = useState<string | null>(null);
  const [nameError, setNameError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const onInvalid = (error: FieldErrors) => {
    if (error.email) {
      if (error.email.type === "minLength") {
        setEmailError("이메일은 10글자 이상이어야 합니다.");
      } else if (error.email.type === "maxLength") {
        setEmailError("이메일은 50글자 이하이어야 합니다.");
      } else {
        setEmailError(null);
      }
    } else {
      setEmailError(null);
    }
    if (error.name) {
      if (error.name.type === "maxLength") {
        setPasswordError("이름은 10글자 이하이어야 합니다.");
      } else {
        setPasswordError(null);
      }
    } else {
      setPasswordError(null);
    }
    if (error.password) {
      if (error.password.type === "minLength") {
        setPasswordError("비밀번호는 3글자 이상이어야 합니다.");
      } else if (error.password.type === "maxLength") {
        setPasswordError("비밀번호는 30글자 이하이어야 합니다.");
      } else {
        setPasswordError(null);
      }
    } else {
      setNameError(null);
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
        <form onSubmit={handleSubmit(onValid, onInvalid)} className="w-full">
          <div className="mb-6">
            <label
              htmlFor="email"
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
              id="email"
              type="text"
              {...register("email", {
                required: true,
                minLength: 15,
                maxLength: 50,
              })}
              className={cls(
                "bg-gray-50   border text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white",
                emailError
                  ? "border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500 focus:outline-red-500 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-blue-500 focus:ring-blue-500 focus:border-blue-500"
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
                htmlFor="name"
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
                id="name"
                type="text"
                {...register("name", { required: true, maxLength: 10 })}
                className={cls(
                  "bg-gray-50   border text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white",
                  nameError
                    ? "border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500 focus:outline-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-blue-500 focus:ring-blue-500 focus:border-blue-500"
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
                htmlFor="password"
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
                  id="password"
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: true,
                    minLength: 3,
                    maxLength: 30,
                  })}
                  className={cls(
                    "bg-gray-50   border text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white",
                    passwordError
                      ? "border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500 focus:outline-red-500 focus:ring-red-500 focus:border-red-500"
                      : "border-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-blue-500 focus:ring-blue-500 focus:border-blue-500"
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
              className="bg-gray-50 border text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white border-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-blue-500 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Join;
