import { Link, useLocation, useNavigate } from "react-router-dom";
import { LoginPwForm } from "../../interface/porfile";
import { useCommonForm } from "../../libs/useCommonForm";

function LoginPW() {
  const { register, handleSubmit, reset, submitFormData } = useCommonForm();
  const navigate = useNavigate();
  const { state } = useLocation();

  const onValid = async (data: LoginPwForm) => {
    const dataCustomer = {
      userEmail: state.userEmail,
      userPw: data.userPw,
    };
    const res = await submitFormData(
      "http://localhost:20492/login/pw",
      dataCustomer
    );
    if (res) navigate("/");
    else {
      alert("비밀번호가 일치하지 않습니다.");
      reset();
    }
  };
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center justify-center mb-4">
          <span className="text-3xl font-bold tracking-tightsm:text-4xl">
            PROJECT HOUSE
          </span>
        </div>
        <form onSubmit={handleSubmit(onValid)} className="w-full">
          <div className="relative">
            <input
              id="userPw"
              type="password"
              {...register("userPw")}
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer focus:border-2 "
              placeholder=" "
            />
            <label
              htmlFor="userPw"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              비밀번호
            </label>
          </div>

          <div className="flex justify-between pt-2">
            <Link
              to={`/join`}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              계정 만들기
            </Link>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              로그인
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPW;
