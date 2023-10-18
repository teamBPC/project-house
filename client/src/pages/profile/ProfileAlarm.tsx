import { Link } from "react-router-dom";

function ProfileAlarm() {
  return (
    <div className="w-full">
      <div className="block pb-4">
        <span className="text-4xl font-bold">알림</span>
      </div>
      <ul className="py-4 -ml-3">
        <li>
          <Link to="#" className="flex gap-4 p-4 hover:bg-gray-200">
            <img
              className="w-10 h-10 rounded-full"
              src={`https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/f7fa91bd-bd76-4274-5220-e796e1565100/avatar`}
              alt="avartar"
            />
            <div className="flex flex-col">
              <span className="break-words">
                백시현님이 "awwwards-my-mapp"게시물을 저장했습니다.
              </span>
              <span className="text-sm font-bold text-gray-500">4시간전</span>
            </div>
            <img
              src="https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/f5ab0fb1-5c42-400c-c8a2-50ab4bd61800/public"
              alt="default"
              className="object-contain w-[96px] aspect-video"
            />
          </Link>
        </li>
        <li>
          <Link
            to="/management/projects/0/board/0"
            className="flex gap-4 p-4 hover:bg-gray-200"
          >
            <img
              className="w-10 h-10 rounded-full"
              src={`https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/f7fa91bd-bd76-4274-5220-e796e1565100/avatar`}
              alt="avartar"
            />
            <div className="flex flex-col">
              <span className="break-words">
                백시현님이 "프론트엔드"보드에서 태그했습니다.
              </span>
              <span className="text-sm font-bold text-gray-500">4시간전</span>
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="/management/projects/0/board/0"
            className="flex gap-4 p-4 hover:bg-gray-200"
          >
            <div className="flex -space-x-6">
              <img
                className="w-10 h-10 border-2 border-white rounded-full "
                src={`https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/f7fa91bd-bd76-4274-5220-e796e1565100/avatar`}
                alt="avartar"
              />
              <img
                className="w-10 h-10 border-2 border-white rounded-full "
                src={`https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/f7fa91bd-bd76-4274-5220-e796e1565100/avatar`}
                alt="avartar"
              />
              <img
                className="w-10 h-10 border-2 border-white rounded-full "
                src={`https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/f7fa91bd-bd76-4274-5220-e796e1565100/avatar`}
                alt="avartar"
              />
              <span className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 ">
                +99
              </span>
            </div>
            <div className="flex flex-col">
              <span className="break-words">
                백시현님이 "teamBPC"에 초대했습니다.
              </span>
              <span className="text-sm font-bold text-gray-500">4시간전</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default ProfileAlarm;
