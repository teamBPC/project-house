import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function JoinPW() {
  const { register, watch, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleJoin = () => {
    navigate("");
  };
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center justify-center mb-4">
          <span className="text-3xl font-bold tracking-tightsm:text-4xl">
            PROJECT HOUSE
          </span>
        </div>
        <form onSubmit={handleSubmit(handleJoin)} className="w-full">
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              {...register("password")}
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer focus:border-2 "
              placeholder=" "
            />
            <label
              htmlFor="password"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              비밀번호
            </label>
            <button
              type="button"
              onClick={handleTogglePassword}
              className="absolute right-3 top-3.5"
            >
              {showPassword ? (
                <span className="text-gray-400 material-symbols-outlined">visibility</span>
              ) : (
                <span className="text-gray-400 material-symbols-outlined">
                  visibility_off
                </span>
              )}
            </button>
          </div>

          <div className="flex items-center justify-end pt-2">
            <button
              type="submit"
              disabled={!watch("password")}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              가입 완료
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default JoinPW;