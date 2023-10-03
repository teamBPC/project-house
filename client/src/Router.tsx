import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginID from "./pages/member/LoginID";
import LoginPW from "./pages/member/LoginPW";
import Join from "./pages/member/Join";
import Header from "./components/Header";
import Home from "./pages/Home";
import Profile from "./pages/profile/Profile";
import SideBar from "./components/sidebar/SideBar";
import Projects from "./pages/projects/Projects";
import Board from "./pages/projects/BoardItem";
import Boards from "./pages/projects/Boards";
import Post from "./pages/post/Post";

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <div className="flex">
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="post/:postId" element={<Post />}></Route>
          <Route path="projects" element={<Projects />}></Route>
          <Route path="projects/:projectId" element={<Boards />}></Route>
          <Route
            path="projects/:projectId/board/:boardId"
            element={<Board />}
          ></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="login-id" element={<LoginID />}></Route>
          <Route path="login-pw" element={<LoginPW />}></Route>
          <Route path="join" element={<Join />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default Router;
