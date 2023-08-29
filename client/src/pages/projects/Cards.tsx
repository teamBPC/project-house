import { Draggable, DropResult } from "react-beautiful-dnd";
import { IToDo } from "./Projects";
import { useDispatch } from "react-redux";

interface Icards {
  todo: IToDo;
  index: number;
}
function Cards({ todo, index }: Icards) {
  return (
    <Draggable draggableId={todo.id + ""} index={index} key={todo.id}>
      {(provided, snapshot) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {todo.text}
        </li>
      )}
    </Draggable>
  );
}

export default Cards;
