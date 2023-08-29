import ProfileEdit from "./ProfileEdit";
import { useState } from "react";

function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalHandle = () => {
    setIsModalOpen(true);
  };
  return (
    <div className="w-screen">
      <div className="flex flex-col items-center ">
        <div>
          <svg
            className="w-20 h-20 bg-gray-200 rounded-full"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <div>이메일</div>
        <div>이름</div>
        <div>웹사이트</div>
        <div>참여한 프로젝트</div>
        <button
          onClick={() => modalHandle()}
          className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          Toggle modal
        </button>
        <ProfileEdit setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}/>
      </div>
    </div>
  );
}

export default Profile;
