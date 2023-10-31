import { Link, useLocation } from "react-router-dom";
import { cls } from "../../../libs/utils";

function ProfileSidebar() {
  const { pathname } = useLocation();
  return (
    <aside className="fixed top-0 left-0 z-40 h-screen transition-transform translate-x-0 w-96">
      <div className="flex flex-col h-full gap-4 px-5 py-8 overflow-y-auto border-r">
        <div className="py-4 pl-2">
          <Link to="/">
            <span className="text-3xl font-bold">
              P<span className="text-xs">ROJECT</span>H
              <span className="text-xs">OUSE</span>
            </span>
          </Link>
        </div>
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              to="content/post"
              className={cls(
                "flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group",
                pathname.includes("content") ? "bg-gray-100" : ""
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill="currentColor"
                className={cls(
                  "flex-shrink-0 text-gray-500 transition duration-75 w-7 h-7 group-hover:text-gray-900 ",
                  pathname.includes("content") ? "fill-black" : ""
                )}
              >
                <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z" />
              </svg>
              <span className="ml-3">내 프로필</span>
            </Link>
          </li>
          <li>
            <Link
              to="alarm"
              className={cls(
                "flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group",
                pathname.includes("alarm") ? "bg-gray-100" : ""
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill="currentColor"
                className={cls(
                  "flex-shrink-0 text-gray-500 transition duration-75 w-7 h-7 group-hover:text-gray-900 ",
                  pathname.includes("alarm") ? "fill-black" : ""
                )}
              >
                <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160ZM480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80Z" />
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">알림</span>
              <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
                3
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="teams"
              className={cls(
                "flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group",
                pathname.includes("teams") ? "bg-gray-100" : ""
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill="currentColor"
                className={cls(
                  "flex-shrink-0 text-gray-500 transition duration-75 w-7 h-7 group-hover:text-gray-900 ",
                  pathname.includes("teams") ? "fill-black" : ""
                )}
              >
                <path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Z" />
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">소속 팀</span>
            </Link>
          </li>
          <li>
            <Link
              to="setting"
              className={cls(
                "flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group",
                pathname.includes("setting") ? "bg-gray-100" : ""
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill="currentColor"
                className={cls(
                  "flex-shrink-0 text-gray-500 transition duration-75 w-7 h-7 group-hover:text-gray-900 ",
                  pathname.includes("setting") ? "fill-black" : ""
                )}
              >
                <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm112-260q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Z" />
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">설정</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default ProfileSidebar;
