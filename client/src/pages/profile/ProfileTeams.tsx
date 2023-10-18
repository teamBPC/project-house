import { useState } from "react";
import { Link } from "react-router-dom";
import { cls } from "../../libs/utils";

function ProfileTeams() {
  const teamList = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  const [memberList, setMemberList] = useState(
    new Array(teamList.length).fill(false)
  );

  const createMemberList = () => {
    const toggleMemberList = (index: number) => {
      setMemberList((prev) =>
        prev.map((item, i) => (index === i ? !item : item))
      );
    };

    const memberListToggleCss = (index: number) => {
      return memberList[index] ? "h-fit p-4 pt-6" : "h-0";
    };

    let newMemberList: JSX.Element[] = [];
    teamList.forEach((item, index) => {
      newMemberList.push(
        <li
          key={index}
          className="transition-colors border rounded-lg hover:text-white hover:bg-blue-600"
        >
          <Link to="#" className="block p-4">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col">
                <span className="text-lg font-bold">팀 이름</span>
                <span>진행중인 프로젝트 이름</span>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((list) => (
                    <img
                      className="border-2 border-white rounded-full w-9 h-9 "
                      src={`https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/f7fa91bd-bd76-4274-5220-e796e1565100/avatar`}
                      alt="avartar"
                      key={list}
                    />
                  ))}
                </div>
                <button onClick={() => toggleMemberList(index)}>
                  <span className="px-4 py-2 bg-transparent rounded-lg hover:bg-white hover:text-black">
                    팀원 자세히 보기
                  </span>
                </button>
              </div>
            </div>
            <div
              className={cls(
                "overflow-hidden flex flex-wrap gap-4",
                memberListToggleCss(index)
              )}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((list) => (
                <div key={list} className="flex items-center gap-2">
                  <img
                    className="rounded-full w-7 h-7"
                    src={`https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/f7fa91bd-bd76-4274-5220-e796e1565100/avatar`}
                    alt="avatar"
                  />
                  <span className="text-sm font-bold truncate">
                    baek-si-hyun
                  </span>
                </div>
              ))}
            </div>
          </Link>
        </li>
      );
    });
    return newMemberList;
  };

  return (
    <div>
      <div className="py-4 space-y-4 bg-white">
        <div className="flex items-center justify-between">
          <h2 className="text-4xl font-semibold">소속 팀</h2>
          <a
            href="/new"
            className="flex items-center py-2 pl-2 pr-3 text-sm font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-400"
          >
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="mr-2"
              aria-hidden="true"
            >
              <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
            </svg>
            New
          </a>
        </div>
        <form className="relative">
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            />
          </svg>
          <input
            className="w-full py-2 pl-10 text-sm leading-6 rounded-md shadow-sm appearance-none focus:ring-2 focus:ring-blue-600 focus:outline-none text-slate-900 placeholder-slate-400 ring-1 ring-slate-200"
            type="text"
            aria-label="Filter projects"
            placeholder="팀 이름을 검색하세요"
          />
        </form>
        <ul className="space-y-6">{createMemberList()}</ul>
      </div>
    </div>
  );
}

export default ProfileTeams;
