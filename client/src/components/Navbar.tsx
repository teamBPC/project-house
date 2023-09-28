import { Link, useLocation } from "react-router-dom";
import { cls } from "../libs/utils";

function Navbar() {
  const { pathname } = useLocation();
  console.log(pathname);
  if (pathname.includes("join") || pathname.includes("login")) return null;
  return (
    <div className="flex w-auto " id="navbar-user">
      <ul className="flex items-center gap-2 p-0 mt-0 font-medium rounded-lg bg-gray-50 md:bg-white">
        <li>
          <Link
            to="/"
            className={cls(
              "block py-1 px-4  rounded hover:bg-gray-100 hover:bg-transparent hover:text-blue-700",
              pathname === "/" ? "md:text-blue-700" : "text-gray-900"
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
              "block py-1 px-4  rounded hover:bg-gray-100 hover:bg-transparent hover:text-blue-700 ",
              pathname === "/projects" ? "md:text-blue-700" : "text-gray-900"
            )}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="boards"
            className={cls(
              "block py-1 px-4 rounded hover:bg-gray-100 hover:bg-transparent hover:text-blue-700  ",
              pathname === "/boards" ? "md:text-blue-700" : "text-gray-900"
            )}
          >
            Boards
          </Link>
        </li>
        <li>
          <Link
            to="board"
            className="block px-4 py-1 rounded hover:bg-gray-100 hover:bg-transparent hover:text-blue-700 "
          >
            Board
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="block px-4 py-1 rounded hover:bg-gray-100 hover:bg-transparent hover:text-blue-700 "
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
