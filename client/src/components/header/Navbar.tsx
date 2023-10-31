import { Link, useLocation } from "react-router-dom";
import { cls } from "../../libs/utils";

function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="relative flex">
      <ul className="z-40 grid items-center grid-cols-2 p-0 mt-0 font-medium text-center bg-transparent bg-blue-400 rounded-lg bg-opacity-70">
        <li>
          <Link
            to="/"
            className={cls(
              "block px-4 py-1 rounded-l-lg hover:bg-gray-100",
              !pathname.includes("kanban-board")
                ? "text-blue-600"
                : "text-white hover:text-black"
            )}
          >
            Post
          </Link>
        </li>
        <li>
          <Link
            to="kanban-board/project-collection"
            className={cls(
              "block px-4 py-1 rounded-r-lg hover:bg-gray-100",
              pathname.includes("kanban-board")
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
          pathname.includes("kanban-board")
            ? "rounded-r-lg translate-x-full"
            : "rounded-l-lg translate-x-0"
        )}
      ></span>
    </nav>
  );
}

export default Navbar;
