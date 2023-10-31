import { Outlet } from "react-router-dom";
import KanbanSideBar from "../../components/sidebar/kanban-board-sideBar/KanbanSideBar";

function Kanban() {
  return (
    <div className="flex w-full h-screen">
      <KanbanSideBar />
      <div className="w-full overflow-hidden overflow-x-scroll">
        <Outlet />
      </div>
    </div>
  );
}
export default Kanban;
