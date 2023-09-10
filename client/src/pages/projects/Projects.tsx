<<<<<<< HEAD
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
=======
import React from "react";
import CreateProjectModal from "./CreateProjectModal";

function Projects() {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 ">
        <div>
          <a
            href="#"
            className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </a>
        </div>
        <div>
          <a
            href="#"
            className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </a>
        </div>
        <div>
          <a
            href="#"
            className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </a>
        </div>
        <div>
          <a
            href="#"
            className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </a>
        </div>
        <div>
          <a
            href="#"
            className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </a>
        </div>
        <div>
          <a
            href="#"
            className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </a>
        </div>
>>>>>>> 1350edb04dfe94cde0353e792bb3df2944aa32c3
      </div>
      <CreateProjectModal />
    </>
  );
}

export default React.memo(Projects);
