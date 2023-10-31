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
    <div className="w-screen h-screen bg-no-repeat bg-cover bg-login-bg ">
      <div className="flex items-center justify-center w-full h-full backdrop-blur-sm">
        <div className="flex flex-col items-center gap-4 p-12 bg-white rounded-xl">
          <div className="flex flex-col items-center justify-center gap-4 mb-4">
            <span className="p-2 text-4xl font-bold">PROJECT HOUSE</span>
            <span className="text-xl text-gray-600">반갑습니다!</span>
            <span className="text-sm text-gray-600">
              PROJECT HOUSE를 이용하시기 위해 로그인 해주세요.
            </span>
          </div>
          <form onSubmit={handleSubmit(onValid)} className="w-full">
            <div className="relative">
              <input
                id="userPw"
                type="password"
                {...register("userPw")}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer focus:border-2 "
                placeholder=" "
              />
              <label
                htmlFor="userPw"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                비밀번호
              </label>
            </div>
            <div className="flex justify-between pt-2">
              <Link
                to={`#`}
                className="text-sm font-semibold leading-6 text-blue-700 "
              >
                비밀번호를 잊어버렸습니다.
              </Link>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                로그인
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPW;
