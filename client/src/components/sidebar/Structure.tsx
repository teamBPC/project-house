import { useSelector } from "react-redux";
import { IStructureTreeData } from "../../interface/sidebar";
import StructureItem from "./StructureItem";
import { IBoard, IBoards, IProjects } from "../../interface/kanban";
import { useEffect, useState } from "react";

function Structure() {
  const [mergeData, setMergeData] = useState<IStructureTreeData[]>();
  const { boardItem, boards, projects } = useSelector(
    (state: {
      boardsSlice: IBoards;
      boardItemSlice: IBoard;
      projectsSlice: IProjects;
    }) => ({
      boardItem: state.boardItemSlice.boardItem,
      boards: state.boardsSlice.boards,
      projects: state.projectsSlice.projects,
    })
  );

  useEffect(() => {
    const mergeData = async () => {
      const mergedProjects = await Promise.all(
        projects.map(async (projectData) => {
          const mergedBoards = await Promise.all(
            boards.map(async (boardData) => {
              const boardItems = boardItem.map((boardItemData) => ({
                id: boardItemData.id,
                title: boardItemData.title,
              }));
              return {
                id: boardData.id,
                title: boardData.title,
                children: boardItems,
              };
            })
          );
          return {
            id: projectData.id,
            title: projectData.title,
            children: mergedBoards,
          };
        })
      );
      console.log(mergedProjects);
      setMergeData(mergedProjects);
    };
    mergeData();
  }, [boardItem, boards, projects]);
  return (
    <div>
      {mergeData &&
        mergeData.map((item, index) => (
          <StructureItem key={index} data={item} />
        ))}
    </div>
  );
}
export default Structure;
