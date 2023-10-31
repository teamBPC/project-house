import { Routes, Route, BrowserRouter } from "react-router-dom";
import Join from "./pages/join/Join";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Profile from "./pages/profile/Profile";
import Post from "./pages/post/Post";
import ProfileContentBookmark from "./pages/profile/ProfileContentBookmark";
import ProfileContentPost from "./pages/profile/ProfileContentPost";
import ProfileSetting from "./pages/profile/ProfileSetting";
import ProfileTeams from "./pages/profile/ProfileTeams";
import ProfileAlarm from "./pages/profile/ProfileAlarm";
import ProfileContent from "./pages/profile/ProfileContent";
import KanbanBoard from "./pages/kanban-board/KanbanBoard";
import ProjectCollection from "./pages/kanban-board/project-collection/ProjectCollection";
import BoardCollection from "./pages/kanban-board/board-collection/BoardCollection";
import Board from "./pages/kanban-board/board/Board";
import Footer from "./components/footer/Footer";
import PostUpload from "./pages/post-upload/PostUpload";
import LoginID from "./pages/login/LoginID";
import LoginPW from "./pages/login/LoginPW";

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="post-upload" element={<PostUpload />}></Route>
        <Route path="post/:postId" element={<Post />}></Route>
        <Route path="kanban-board" element={<KanbanBoard />}>
          <Route path="project-collection" element={<ProjectCollection />}></Route>
          <Route
            path="project-collection/:projectId"
            element={<BoardCollection />}
          ></Route>
          <Route
            path="project-collection/:projectId/board-collection/:boardId"
            element={<Board />}
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
      <Footer />
    </BrowserRouter>
  );
}
export default Router;
