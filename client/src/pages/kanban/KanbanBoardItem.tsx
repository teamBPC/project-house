import React, { useRef, useState, useEffect } from "react";
import {
  DragDropContext,
  Draggable,
  DraggingStyle,
  DropResult,
  Droppable,
  NotDraggingStyle,
} from "react-beautiful-dnd";
import { IBoard } from "../../interface/kanban";
import { cls } from "../../libs/utils";
import { boardItemRedux } from "../../redux/boardItemSlice";
import { useDispatch, useSelector } from "react-redux";
import KanbanTask from "./KanbanTask";
import BoardItemBtns from "../../components/BoardItemBtns";
import CreateTaskModal from "../../components/modal/boardItem/CreateTaskModal";
import CreateBoardItemModal from "../../components/modal/boardItem/CreateBoardItemModal";
import DeleteBoardItemModal from "../../components/modal/boardItem/DeleteBoardItemModal";
import { IBtnRefState, IModalState } from "../../interface/modal";

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

function KanbanBoardItem() {
  const boardRefs = useRef<(HTMLElement | null)[]>([]);
  const [scrollPosition, setScrollPosition] = useState([
    { index: 0, toTop: false },
  ]);
  const modalState = useSelector(
    ({ modalStateSlice }: { modalStateSlice: IModalState }) => {
      return modalStateSlice.modalState;
    }
  );
  const [modalBtnRef, setModalBtnRef] = useState<IBtnRefState>({
    deleteBoardItemBtnRef: null,
  });

  useEffect(() => {
    const handleScroll = (index: number) => (event: Event) => {
      if (boardRefs.current[index]) {
        const newScrollPosition = boardRefs.current[index]?.scrollTop;
        const setScrollTop = newScrollPosition !== 0;
        const toTop = { index: index, toTop: setScrollTop };
        setScrollPosition((scrollPosition) => {
          return { ...scrollPosition, toTop };
        });
      }
    };

    boardRefs.current.forEach((element, index) => {
      if (element) {
        element.addEventListener("scroll", handleScroll(index));
      }
    });

    return () => {
      boardRefs.current.forEach((element, index) => {
        if (element) {
          element.removeEventListener("scroll", handleScroll(index));
        }
      });
    };
  }, [boardRefs]);
  const board = useSelector(
    ({ boardItemSlice }: { boardItemSlice: IBoard }) => {
      return boardItemSlice.boardItem;
    }
  );
  const dispatch = useDispatch();
  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
    if (destination) {
      if (source.droppableId.includes("board")) {
        if (source.index === destination.index) return;
        if (source.index !== destination.index) {
          const boardCopy = [...board];
          const taskObj = boardCopy[source.index];
          boardCopy.splice(source.index, 1);
          boardCopy.splice(destination?.index, 0, taskObj);
          dispatch(boardItemRedux(boardCopy));
        }
      } else if (source.droppableId.includes("card")) {
        if (source.droppableId === destination.droppableId) {
          const boardsCopy = [...board];
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
          dispatch(boardItemRedux(boardsCopy));
        }
        if (source.droppableId !== destination.droppableId) {
          const boardsCopy = [...board];
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
          dispatch(boardItemRedux(boardsCopy));
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
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="flex items-start justify-start gap-2 p-4 pt-16"
            >
              {board.map((item, index) => (
                <Draggable
                  draggableId={item.id + "-board"}
                  index={index}
                  key={item.id}
                >
                  {(provided) => (
                    <div
                      ref={(element) => {
                        provided.innerRef(element);
                        boardRefs.current[index] = element;
                      }}
                      {...provided.draggableProps}
                      style={getStyle(provided.draggableProps.style!)}
                      className="border hover:border-gray-200 bg-gray-100 max-h-[calc(100vh-6.1rem)] rounded-lg shadow-md min-w-[24rem] max-w-[24rem] overflow-y-scroll"
                    >
                      <div
                        className={cls(
                          "sticky top-0 left-0 z-10 p-1 px-2 py-5 bg-gray-100 rounded-t-lg h-18 flex flex-col",
                          scrollPosition
                            ? "bg-opacity-50 backdrop-blur-sm"
                            : "bg-opacity-100"
                        )}
                      >
                        <div className="flex items-start justify-between">
                          <span className="text-xl font-semibold break-all whitespace-pre-wrap text-clip">
                            {item.title}
                          </span>
                          <BoardItemBtns
                            setModalBtnRef={setModalBtnRef}
                            provided={provided}
                          />
                        </div>
                        <div className="flex flex-col text-sm">
                          <span>생성: 2023년 9월 10일</span>
                          <span>수정: 2023년 12월 31일</span>
                        </div>
                      </div>
                      <KanbanTask
                        boardItem={item}
                        index={index}
                        key={item.id}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <CreateTaskModal modalState={modalState} />
      <CreateBoardItemModal modalState={modalState} />
      <DeleteBoardItemModal modalState={modalState} modalBtnRef={modalBtnRef} />
    </>
  );
}

export default React.memo(KanbanBoardItem);
