import { Draggable } from "react-beautiful-dnd";
import { ICardProps } from "../../interface/kanban";

function Cards({ todo, index }: ICardProps) {
  return (
    <Draggable draggableId={todo.id + "-card"} index={index} key={todo.id}>
      {(provided, snapshot) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="relative block p-2 mb-3 text-base bg-white border rounded-md shadow-md"
        >
          {todo.text}
        </li>
      )}
    </Draggable>
  );
}

export default Cards;
