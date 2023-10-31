import { shallowEqual, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import StructureItem from "./StructureItem";
import { IStructureTreeData } from "../../../interface/sidebar";
import { IBoard, IBoardCollection, IProjectCollection } from "../../../interface/kanbanBoard";


function Structure() {
  const [mergeData, setMergeData] = useState<IStructureTreeData[]>();
  const { boardCollection, board, projectCollection } = useSelector(
    (state: {
      boardCollectionSlice: IBoardCollection;
      boardSlice: IBoard;
      projectCollectionSlice: IProjectCollection;
    }) => ({
      boardCollection: state.boardCollectionSlice.boardCollection,
      board: state.boardSlice.board,
      projectCollection: state.projectCollectionSlice.projectCollection,
    }),
    shallowEqual
  );

  useEffect(() => {
    const mergeData = async () => {
      const mergedProjects = await Promise.all(
        projectCollection.map(async (projectData) => {
          const mergedBoards = await Promise.all(
            boardCollection.map(async (boardData) => {
              const boardItems = await Promise.all(
                board.map(async (boardItemData) => {
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
  }, [board, boardCollection, projectCollection]);
  return (
    <div>
      {mergeData &&
        mergeData.map((item) => <StructureItem key={item.id} mapItem={item} />)}
    </div>
  );
}
export default Structure;
