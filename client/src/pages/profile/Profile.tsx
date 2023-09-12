import EditProfileModal from "../../components/modal/EditProfileModal";
import { useState } from "react";

function Profile() {

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
        <EditProfileModal />
      </div>
    </div>
  );
}

export default Profile;
