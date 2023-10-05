import { useSelector } from "react-redux";
import EditProfileModal from "../../components/modal/profile/EditProfileModal";
import { IModalState } from "../../interface/modal";
import { Link, Outlet, useLocation } from "react-router-dom";
import { cls } from "../../libs/utils";

function Profile() {
  const { pathname } = useLocation();
  const modalState = useSelector(
    ({ modalStateSlice }: { modalStateSlice: IModalState }) => {
      return modalStateSlice.modalState;
    }
  );
  return (
    <div className="flex flex-col items-center w-screen pt-32">
      <div className="flex flex-col w-[45rem] py-4">
        <div className="flex items-center justify-between px-4">
          <div className="flex gap-4">
            <div>
              <img
                className="w-24 h-24 bg-gray-200 rounded-full ring-offset-2 ring-4"
                src={`https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/f7fa91bd-bd76-4274-5220-e796e1565100/avatar`}
                alt="avartar"
              />
            </div>
            <div className="flex flex-col justify-around">
              <div className="flex flex-col">
                <span className="text-xl font-bold">qortlgus100@naver.com</span>
                <span>백시현</span>
              </div>
              <div className="flex gap-6 text-sm">
                <span>
                  게시물 <span className="font-bold">12</span>
                </span>
                <span>
                  좋아요 <span className="font-bold">7</span>
                </span>
              </div>
            </div>
          </div>
          <div>
            <EditProfileModal modalState={modalState} />
          </div>
        </div>
        <div className="my-8"></div>
        <div className="flex flex-col">
          <div>
            <ul className="grid grid-cols-3 text-center border-b border-gray-200">
              <li className="flex justify-center">
                <Link
                  to="profile/0/post"
                  className={cls(
                    "px-8 py-4 ",
                    pathname.includes("post")
                      ? "border-b-2 border-blue-500"
                      : ""
                  )}
                >
                  게시물
                </Link>
              </li>
              <li className="flex justify-center">
                <Link
                  to="profile/0/like"
                  className={cls(
                    "px-8 py-4 ",
                    pathname.includes("like")
                      ? "border-b-2 border-blue-500"
                      : ""
                  )}
                >
                  좋아요
                </Link>
              </li>
              <li className="flex justify-center">
                <Link
                  to="profile/0/bookmark"
                  className={cls(
                    "px-8 py-4 ",
                    pathname.includes("bookmark")
                      ? "border-b-2 border-blue-500"
                      : ""
                  )}
                >
                  저장
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
