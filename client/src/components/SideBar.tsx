import { useState } from "react";
import { useLocation } from "react-router-dom";
import { cls } from "../libs/utils";

function SideBar() {
  const [activeTab, setActiveTab] = useState(false);

  const handleTabClick = (tab: boolean) => {
    setActiveTab(() => tab);
  };

  const { pathname } = useLocation();
<<<<<<< HEAD
  if (!pathname.includes("projects")) return null;
=======
  if (!(pathname.includes("projects") || pathname.includes("boards")))
    return null;
>>>>>>> 1350edb04dfe94cde0353e792bb3df2944aa32c3

  return (
    <div
      id="logo-sidebar"
<<<<<<< HEAD
      className="flex flex-col h-full min-h-[calc(100vh-3.1rem)] transition-transform -translate-x-full bg-white border-r border-gray-200 w-96 top-12 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
=======
      className=" min-h-[calc(100vh-3.1rem)]  bg-white  border-r border-gray-200  dark:bg-gray-800 dark:border-gray-700"
      style={{ width: "308px !important" }}
>>>>>>> 1350edb04dfe94cde0353e792bb3df2944aa32c3
      aria-label="Sidebar"
    >
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="grid grid-cols-2 -mb-px">
          <li className="mr-2">
            <button
              className={cls(
                "inline-block p-4 border-b-2 rounded-t-lg",
                activeTab
                  ? "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  : "text-blue-600 border-blue-600 active dark:text-blue-500 dark:border-blue-500"
              )}
              onClick={() => handleTabClick(false)}
            >
              구조
            </button>
          </li>
          <li className="mr-2">
            <button
              className={cls(
                "inline-block p-4 border-b-2 rounded-t-lg",
                activeTab
                  ? "text-blue-600 border-blue-600 active dark:text-blue-500 dark:border-blue-500"
                  : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              )}
              onClick={() => handleTabClick(true)}
            >
              활동
            </button>
          </li>
        </ul>
      </div>
      <div>
        {activeTab ? (
          <div>
            프로젝트 별로 누가 언제 어던 프로젝트 수정했는지 (ex. 구글 공유
            드라이브)
          </div>
        ) : (
          <div>프로젝트 구조 (ex. vscode 탐색기)</div>
        )}
      </div>
<<<<<<< HEAD
    </aside>
=======
    </div>
>>>>>>> 1350edb04dfe94cde0353e792bb3df2944aa32c3
  );
}

export default SideBar;
