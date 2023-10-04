import { shallowEqual, useSelector } from "react-redux";
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
    }),
    shallowEqual
  );

  useEffect(() => {
    const mergeData = async () => {
      const mergedProjects = await Promise.all(
        projects.map(async (projectData) => {
          const mergedBoards = await Promise.all(
            boards.map(async (boardData) => {
              const boardItems = await Promise.all(
                boardItem.map(async (boardItemData) => {
                  const todos = boardItemData.todos.map((todo) => {
                    return {
                      id: todo.id,
                      title: todo.title,
                      parentId: [projectData.id, boardData.id],
                    };
                  });
                  return {
                    id: boardItemData.id,
                    title: boardItemData.title,
                    parentId: [projectData.id, boardData.id],
                    children: todos,
                  };
                })
              );
              return {
                id: boardData.id,
                title: boardData.title,
                parentId: [projectData.id],
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
      setMergeData(mergedProjects);
    };
    mergeData();
  }, [boardItem, boards, projects]);
  return (
    <div>
      {mergeData &&
        mergeData.map((item) => (
          <StructureItem
            key={item.id}
            mapItem={item}
          />
        ))}
    </div>
  );
}
export default Structure;
