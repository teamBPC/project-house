import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { cls } from "../../../../libs/utils";
import Structure from "./Structure";

function KanbanSideBar() {
  const [activeTab, setActiveTab] = useState(false);
  const handleTabClick = (tab: boolean) => {
    setActiveTab(() => tab);
  };

  const { pathname } = useLocation();
  if (!pathname.includes("management")) return null;

  return (
    <div
      id="logo-sidebar"
      className="bg-white border-r border-gray-200 min-w-[20rem] max-w-[20rem]   max-h-screen"
    >
      <div className="sticky top-0 text-sm font-medium text-center text-gray-500 bg-white border-b border-gray-200">
        <ul className="grid grid-cols-2 -mb-px">
          <li className="mr-2">
            <button
              className={cls(
                "inline-block p-4 border-b-2 rounded-t-lg",
                activeTab
                  ? "border-transparent hover:text-gray-600 hover:border-gray-300"
                  : "text-blue-600 border-blue-600 active"
              )}
              onClick={() => handleTabClick(false)}
            >
              구조
            </button>
          </li>
          <li className="mr-2">
            <button
              className={cls(
                "inline-block p-4 border-b-2 rounded-t-lg z",
                activeTab
                  ? "text-blue-600 border-blue-600 active"
                  : "border-transparent hover:text-gray-600 hover:border-gray-300"
              )}
              onClick={() => handleTabClick(true)}
            >
              활동
            </button>
          </li>
        </ul>
      </div>
      <div className="overflow-y-scroll max-h-[calc(100vh-54px)]">
        <div className={cls("truncate bg-white", activeTab ? "" : "hidden")}>
          프로젝트 별로 누가 언제 어던 프로젝트 수정했는지 (ex. 구글 공유
          드라이브)
        </div>
        <div className={cls("truncate bg-white", activeTab ? "hidden" : "")}>
          <Structure />
        </div>
      </div>
    </div>
  );
}

export default React.memo(KanbanSideBar);
