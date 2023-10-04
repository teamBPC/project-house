import { Link, useLocation } from "react-router-dom";
import { cls } from "../libs/utils";

function Navbar() {
  const { pathname } = useLocation();
  if (pathname.includes("join") || pathname.includes("login")) return null;
  return (
    <div className="flex">
      <ul className="flex items-center p-0 mt-0 font-medium bg-transparent bg-blue-400 rounded-lg bg-opacity-70">
        <li>
          <Link
            to="/"
            className={cls(
              "block py-1 px-4 rounded-lg hover:bg-gray-100 hover:bg-opacity-50",
              pathname === "/" ? "text-blue-700 bg-gray-100" : "text-white"
            )}
            aria-current="page"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            className={cls(
              "block py-1 px-4 rounded-lg hover:bg-gray-100 hover:bg-opacity-50  ",
              pathname.includes("/projects")
                ? "text-blue-700 bg-gray-100"
                : "text-white"
            )}
          >
            Projects
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
