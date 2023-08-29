import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import LoginID from "./pages/member/LoginID";
import LoginPW from "./pages/member/LoginPW";
import JoinID from "./pages/member/JoinID";
import JoinName from "./pages/member/JoinName";
import JoinPW from "./pages/member/JoinPW";
import Header from "./components/Header";
import Home from "./pages/Home";
import Profile from "./pages/profile/Profile";
import SideBar from "./components/SideBar";
import Projects from "./pages/projects/Projects";

// const Header = lazy(() => import("./components/header/Header"));

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <SideBar />
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/login-id" element={<LoginID />}></Route>
          <Route path="/login-pw" element={<LoginPW />}></Route>
          <Route path="/join-id" element={<JoinID />}></Route>
          <Route path="/join-name" element={<JoinName />}></Route>
          <Route path="/join-pw" element={<JoinPW />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default Router;
