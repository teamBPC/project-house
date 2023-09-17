import { useSelector } from "react-redux";
import EditProfileModal from "../../components/modal/profile/EditProfileModal";
import { IModalState } from "../../interface/modal";

function Profile() {
  const modalState = useSelector(
    ({ modalStateSlice }: { modalStateSlice: IModalState }) => {
      return modalStateSlice.modalState;
    }
  );
  return (
    <div className="w-screen">
      <div className="flex flex-col items-center ">
        <div>
          <img
            className="w-20 h-20 bg-gray-200 rounded-full"
            src={`https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/f7fa91bd-bd76-4274-5220-e796e1565100/avatar`}
            alt="avartar"
          />
        </div>
        <div>이메일</div>
        <div>이름</div>
        <div>웹사이트</div>
        <div>참여한 프로젝트</div>
        <EditProfileModal modalState={modalState} />
      </div>
    </div>
  );
}

export default Profile;
