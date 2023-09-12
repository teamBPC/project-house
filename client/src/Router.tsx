import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import LoginID from "./pages/member/LoginID";
import LoginPW from "./pages/member/LoginPW";
import Join from "./pages/member/Join";
import Header from "./components/Header";
import Home from "./pages/Home";
import Profile from "./pages/profile/Profile";
import SideBar from "./components/SideBar";
import Projects from "./pages/projects/Projects";
import Boards from "./pages/projects/Boards";

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <div className="flex">
        <SideBar />
        <Suspense fallback={<></>}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="projects" element={<Projects />}></Route>
            <Route path="boards" element={<Boards />}></Route>
            <Route path="profile" element={<Profile />}></Route>
            <Route path="login-id" element={<LoginID />}></Route>
            <Route path="login-pw" element={<LoginPW />}></Route>
            <Route path="join" element={<Join />}></Route>
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}
export default Router;
