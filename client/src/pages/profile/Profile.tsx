import { Outlet } from "react-router-dom";
import ProfileSidebar from "../../components/sidebar/profile-sidebar/ProfileSidebar";

function Profile() {
  return (
    <div className="flex justify-center w-full pt-12">
      <ProfileSidebar />
      <div className="w-[45rem] ">
        <Outlet />
      </div>
    </div>
  );
}

export default Profile;
