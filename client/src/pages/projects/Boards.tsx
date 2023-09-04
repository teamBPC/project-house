import React, { useRef, useState, useEffect } from "react";
import {
  DragDropContext,
  Draggable,
  DraggingStyle,
  DropResult,
  Droppable,
  NotDraggingStyle,
} from "react-beautiful-dnd";
import { IBoards } from "../../interface/kanban";
import { cls } from "../../libs/utils";
import { boardsRedux } from "../../redux/boardsSlice";
import { useDispatch, useSelector } from "react-redux";
import Tasks from "./Task";
import CreateBoardModal from "./CreateBoardModal";

function getStyle(style: DraggingStyle | NotDraggingStyle) {
  if (style?.transform) {
    const axisLockX = `${style.transform.split(",").shift()}, 0px)`;
    return {
      ...style,
      transform: axisLockX,
    };
  }
  return style;
}
function Boards() {
  const boardRef = useRef<HTMLElement | null>(null);
  const [scrollPosition, setScrollPosition] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (boardRef.current) {
        const newScrollPosition = boardRef.current.scrollTop;
        const setScrollTop = newScrollPosition !== 0;
        setScrollPosition(setScrollTop);
      }
    };
    if (boardRef.current) {
      boardRef.current.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (boardRef.current) {
        boardRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

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
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="board" direction="horizontal" type="board">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="flex items-start justify-start gap-2 min-w-max"
            >
              {boards.map((board, index) => (
                <Draggable
                  draggableId={board.id + "-board"}
                  index={index}
                  key={board.id}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={(element) => {
                        provided.innerRef(element);
                        boardRef.current = element;
                      }}
                      {...provided.draggableProps}
                      style={getStyle(provided.draggableProps.style!)}
                      className="border hover:border-gray-200 bg-gray-100 w-96 max-h-[calc(100vh-6.1rem)] overflow-x-hidden rounded-lg shadow-md"
                    >
                      <div
                        className={cls(
                          "sticky top-0 left-0 z-10 p-1 px-2 py-5 bg-gray-100 rounded-t-lg h-18 flex flex-col",
                          scrollPosition
                            ? "bg-opacity-50 backdrop-blur-sm"
                            : "bg-opacity-100"
                        )}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xl font-semibold ">
                            {board.title}
                          </span>
                          <div className="flex items-center gap-1">
                            <button className="flex">
                              <span className="p-1 transition duration-100 ease-in-out rounded-md material-symbols-outlined hover:bg-gray-300">
                                add
                              </span>
                            </button>
                            <span
                              className="p-1 transition duration-100 ease-in-out rounded-md material-symbols-outlined hover:bg-gray-300"
                              {...provided.dragHandleProps}
                            >
                              drag_pan
                            </span>
                            <button className="flex">
                              <span className="p-1 transition duration-100 ease-in-out rounded-md material-symbols-outlined hover:bg-gray-300">
                                delete
                              </span>
                            </button>
                          </div>
                        </div>
                        <div className="flex flex-col text-sm">
                          <span>생성: 2023년 9월 10일</span>
                          <span>수정: 2023년 12월 31일</span>
                        </div>
                      </div>
                      <Tasks board={board} index={index} key={board.id} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <CreateBoardModal />
    </>
  );
}

export default React.memo(Boards);
