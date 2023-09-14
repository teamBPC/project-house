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
  if (pathname.includes("join") || pathname.includes("login")) return null;

  return (
    <div className="w-full bg-white border-b border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between px-4 py-2">
        <Link to="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            ProjectHouse
          </span>
        </Link>
        <div className="relative flex items-center md:order-2">
          <div
            onMouseEnter={() => handleHover()}
            onMouseLeave={() => handleHoverOut()}
            className="flex mr-3 text-sm md:mr-0 "
          >
            <img
              className={cls(
                "w-8 h-8 bg-gray-200 rounded-full",
                isModalOpen
                  ? "ring-offset-2 ring-2 dark:ring-gray-600 ring-blue-500"
                  : ""
              )}
              src={`https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/f7fa91bd-bd76-4274-5220-e796e1565100/avatar`}
              alt="avatar"
            />
          </div>
          <div
            className="absolute right-0 z-50 pt-4 top-4"
            onMouseEnter={() => handleHover()}
            onMouseLeave={() => handleHoverOut()}
          >
            <div
              className={cls(
                "my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600  ",
                isModalOpen ? "" : "hidden"
              )}
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
                <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                  name@flowbite.com
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <Link
                    to="profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Navbar />
      </div>
    </div>
  );
}

export default Header;
