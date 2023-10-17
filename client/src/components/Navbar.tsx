import { Link, useLocation } from "react-router-dom";
import { cls } from "../libs/utils";

function Navbar() {
  const { pathname } = useLocation();
  if (pathname.includes("join") || pathname.includes("login")) return null;
  return (
    <div className="relative flex">
      <ul className="z-40 grid items-center grid-cols-2 p-0 mt-0 font-medium text-center bg-transparent bg-blue-400 rounded-lg bg-opacity-70">
        <li>
          <Link
            to="/"
            className={cls(
              "block px-4 py-1 rounded-l-lg hover:bg-gray-100",
              !pathname.includes("/projects")
                ? "text-blue-600"
                : "text-white hover:text-black"
            )}
          >
            Post
          </Link>
        </li>
        <li>
          <Link
            to="management/projects"
            className={cls(
              "block px-4 py-1 rounded-r-lg hover:bg-gray-100",
              pathname.includes("/projects")
                ? "text-blue-600"
                : "text-white hover:text-black"
            )}
          >
            Projects
          </Link>
        </li>
      </ul>
      <span
        className={cls(
          " w-1/2 h-full bg-gray-100 absolute top-0 left-0 transition-all  duration-500",
          pathname.includes("/projects")
            ? "rounded-r-lg translate-x-full"
            : "rounded-l-lg translate-x-0"
        )}
      ></span>
    </div>
  );
}

export default Navbar;
