import React, { useRef, useState, useEffect } from "react";
import {
  Draggable,
  DraggingStyle,
  Droppable,
  NotDraggingStyle,
} from "react-beautiful-dnd";
import Cards from "./Cards";
import { IBoardProps } from "../../interface/kanban";
import { cls } from "../../libs/utils";

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
function Boards({ board, index }: IBoardProps) {
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

  return (
    <Draggable draggableId={board.id + "-board"} index={index} key={board.id}>
      {(provided, snapshot) => (
        <div
          ref={(element) => {
            provided.innerRef(element);
            boardRef.current = element;
          }}
          {...provided.draggableProps}
          style={getStyle(provided.draggableProps.style!)}
          className="border hover:border-gray-200 bg-gray-100 w-80 max-h-[calc(100vh-6.1rem)] overflow-x-hidden rounded-lg shadow-md "
        >
          <div
            {...provided.dragHandleProps}
            className={cls(
              "sticky top-0 left-0 z-10 flex flex-col justify-between p-1 px-2 py-5 text-lg font-semibold bg-gray-100 rounded-t-lg h-18",
              scrollPosition
                ? "bg-opacity-50 backdrop-blur-sm"
                : "bg-opacity-100"
            )}
          >
            {board.title}
          </div>
          <Droppable droppableId={"card-" + board.id} type="card">
            {(provided, snapshot) => (
              <ul
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="flex flex-col w-full h-full p-1"
              >
                {board.todos.length === 0 ? (
                  <span>Board가 비어있습니다.</span>
                ) : (
                  board.todos.map((todo, index) => (
                    <Cards todo={todo} key={todo.id} index={index} />
                  ))
                )}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
}

export default React.memo(Boards);
