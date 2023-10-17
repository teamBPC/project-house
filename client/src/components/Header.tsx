import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { cls } from "../libs/utils";
import { useState } from "react";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleHover = () => {
    setIsModalOpen(true);
  };

  const handleHoverOut = () => {
    setIsModalOpen(false);
  };

  const { pathname } = useLocation();
  if (
    pathname.includes("join") ||
    pathname.includes("login") ||
    pathname.includes("profile")
  )
    return null;

  return (
    <div className="fixed z-30 text-white transform -translate-x-1/2 rounded-lg shadow-sm-light top-2 left-1/2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-blue-500/50">
      <div className="flex flex-wrap items-center justify-between gap-16 py-2 pl-4 pr-2">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold">
            P<span className="text-xs">ROJECT</span>H
            <span className="text-xs">OUSE</span>
          </span>
        </Link>
        <div>
          <div className="relative flex items-center gap-2">
            <Navbar />
            <div
              onMouseEnter={() => handleHover()}
              onMouseLeave={() => handleHoverOut()}
              className="flex mr-3 text-sm md:mr-0 "
            >
              <img
                className={cls(
                  "w-8 h-8 bg-gray-200 rounded-full",
                  isModalOpen ? "ring-offset-2 ring-2 ring-white" : ""
                )}
                src={`https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/f7fa91bd-bd76-4274-5220-e796e1565100/avatar`}
                alt="avatar"
              />
            </div>
            <div
              onMouseEnter={() => handleHover()}
              onMouseLeave={() => handleHoverOut()}
              className="absolute right-0 z-50 pt-4 top-4"
            >
              <div
                className={cls(
                  "my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow",
                  isModalOpen ? "" : "hidden"
                )}
                id="user-dropdown"
              >
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900">백시현</span>
                  <span className="block text-sm text-gray-500 truncate">
                    qwer@qwer.com
                  </span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <Link
                      to="profile/0/content/post"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      프로필
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="profile/0/alarm"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      알림
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="profile/0/teams"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      팀
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="profile/0/setting"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      설정
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/login-id"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      로그인
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      로그아웃
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
