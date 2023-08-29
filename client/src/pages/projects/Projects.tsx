import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { boardsRedux } from "../../redux/boardsSlice";
import Boards from "./Boards";
import { IBoards } from "../../interface/kanban";

function Projects() {
  const boards = useSelector(({ boardsSlice }: { boardsSlice: IBoards }) => {
    return boardsSlice.boards;
  });
  const dispatch = useDispatch();
  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
    console.log(draggableId, destination, source);
    if (destination) {
      if (source.droppableId.includes("board")) {
        if (source.index === destination.index) return;
        if (source.index !== destination.index) {
          const boardCopy = [...boards];
          const taskObj = boardCopy[source.index];
          boardCopy.splice(source.index, 1);
          boardCopy.splice(destination?.index, 0, taskObj);
          dispatch(boardsRedux(boardCopy));
        }
      } else if (source.droppableId.includes("card")) {
        if (source.droppableId === destination.droppableId) {
          const boardsCopy = [...boards];
          const boardIndex = boardsCopy.findIndex(
            (board) => board.id + "" === source.droppableId.split("-")[1]
          );
          const boardCopy = { ...boardsCopy[boardIndex] };
          const listCopy = [...boardCopy.todos];
          const prevToDo = boardCopy.todos[source.index];
          listCopy.splice(source.index, 1);
          listCopy.splice(destination?.index, 0, prevToDo);
          boardCopy.todos = listCopy;
          boardsCopy.splice(boardIndex, 1, boardCopy);
          dispatch(boardsRedux(boardsCopy));
        }
        if (source.droppableId !== destination.droppableId) {
          const boardsCopy = [...boards];
          const sourceBoardIndex = boardsCopy.findIndex(
            (board) => board.id + "" === source.droppableId.split("-")[1]
          );
          const destinationBoardIndex = boardsCopy.findIndex(
            (board) => board.id + "" === destination.droppableId.split("-")[1]
          );
          const sourceBoardCopy = { ...boardsCopy[sourceBoardIndex] };
          const destinationBoardCopy = { ...boardsCopy[destinationBoardIndex] };
          const sourceListCopy = [...sourceBoardCopy.todos];
          const destinationListCopy = [...destinationBoardCopy.todos];
          const sourceToDo = sourceBoardCopy.todos[source.index];
          sourceListCopy.splice(source.index, 1);
          destinationListCopy.splice(destination?.index, 0, sourceToDo);
          sourceBoardCopy.todos = sourceListCopy;
          destinationBoardCopy.todos = destinationListCopy;
          boardsCopy.splice(sourceBoardIndex, 1, sourceBoardCopy);
          boardsCopy.splice(destinationBoardIndex, 1, destinationBoardCopy);
          dispatch(boardsRedux(boardsCopy));
        }
      }
    } else {
      return;
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="w-full h-full p-4 overflow-x-scroll">
        <Droppable droppableId="board" direction="horizontal" type="board">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="flex items-start justify-start gap-2 min-w-max"
            >
              {boards.map((board, index) => (
                <Boards board={board} index={index} key={board.id} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default Projects;
