import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginID from "./pages/member/LoginID";
import LoginPW from "./pages/member/LoginPW";
import Join from "./pages/member/Join";
import Header from "./components/Header";
import Home from "./pages/Home";
import Profile from "./pages/profile/Profile";
import Post from "./pages/post/Post";
import ProfileContentBookmark from "./pages/profile/ProfileContentBookmark";
import ProfileContentPost from "./pages/profile/ProfileContentPost";
import ProfileSetting from "./pages/profile/ProfileSetting";
import ProfileTeams from "./pages/profile/ProfileTeams";
import ProfileAlarm from "./pages/profile/ProfileAlarm";
import ProfileContent from "./pages/profile/ProfileContent";
import Kanban from "./pages/kanban/Kanban";
import KanbanProjects from "./pages/kanban/KanbanProjects";
import KanbanBoards from "./pages/kanban/KanbanBoards";
import KanbanBoardItem from "./pages/kanban/KanbanBoardItem";

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="post/:postId" element={<Post />}></Route>
        <Route path="management" element={<Kanban />}>
          <Route path="projects" element={<KanbanProjects />}></Route>
          <Route path="projects/:projectId" element={<KanbanBoards />}></Route>
          <Route
            path="projects/:projectId/board/:boardId"
            element={<KanbanBoardItem />}
          ></Route>
        </Route>
        <Route path="profile/:userId" element={<Profile />}>
          <Route path="content" element={<ProfileContent />}>
            <Route path="post" element={<ProfileContentPost />}></Route>
            <Route path="bookmark" element={<ProfileContentBookmark />}></Route>
          </Route>
          <Route path="alarm" element={<ProfileAlarm />}></Route>
          <Route path="teams" element={<ProfileTeams />}></Route>
          <Route path="setting" element={<ProfileSetting />}></Route>
        </Route>
        <Route path="login-id" element={<LoginID />}></Route>
        <Route path="login-pw" element={<LoginPW />}></Route>
        <Route path="join" element={<Join />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
