import { Draggable, Droppable } from "react-beautiful-dnd";
import Cards from "./Cards";
import { IBoardProps } from "../../interface/kanban";

function Boards({ board, index }: IBoardProps) {
  return (
    <Draggable draggableId={board.id + "-board"} index={index} key={board.id}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          className="border hover:border-gray-200 bg-gray-100 w-80 max-h-[calc(100vh-6.1rem)] overflow-x-hidden rounded-lg shadow-md p-1"
        >
          <div
            {...provided.dragHandleProps}
            className="z-10 flex flex-col justify-between px-2 py-5 text-lg font-semibold h-18"
          >
            {board.title}
          </div>
          <Droppable droppableId={"card-" + board.id} type="card">
            {(provided, snapshot) => (
              <ul
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="flex flex-col w-full h-full p-1 overflow-y-scroll"
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

export default Boards;
