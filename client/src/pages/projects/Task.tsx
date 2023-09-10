import { Draggable, Droppable } from "react-beautiful-dnd";
import { IBoardProps } from "../../interface/kanban";

function Tasks({ board, index }: IBoardProps) {
  return (
    <Droppable droppableId={"card-" + board.id} type="card">
      {(provided, snapshot) => (
        <ul
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="flex flex-col gap-2 p-1"
        >
          {board.todos.length === 0 ? (
            <span className="p-1">Board가 비어있습니다.</span>
          ) : (
            board.todos.map((todo, index) => (
              <Draggable
                draggableId={todo.id + "-card"}
                index={index}
                key={todo.id}
              >
                {(provided, snapshot) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="relative block p-2 overflow-hidden text-base bg-white border rounded-md shadow-md"
                  >
                    <span>{todo.text}</span>
                  </li>
                )}
              </Draggable>
            ))
          )}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
}

export default Tasks;
