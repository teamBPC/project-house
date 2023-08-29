import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { cls } from "../../libs/utils";
import { useDispatch } from "react-redux";
import { boardsRedux } from "../../redux/boardsSlice";
import Cards from "./Cards";
export interface IToDo {
  id: number;
  text: string;
}
export interface IboardsSlice {
  boards: IBoard[];
}
export interface IBoard {
  boards: { id: number; title: string; toDos: IToDo[] }[];
}
function Projects() {
  const boards = useSelector(({ boardsSlice }: { boardsSlice: IBoard }) => {
    return boardsSlice.boards;
  });
  const dispatch = useDispatch();
  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
    if (!destination) return;
    if (source.index === destination.index) return;
    console.log(source)
    console.log(destination)
    if (source.index !== destination.index) {
      const copyList = [...boards];
      const taskObj = copyList[source.index];
      copyList.splice(source.index, 1);
      copyList.splice(destination?.index, 0, taskObj);
      dispatch(boardsRedux(copyList));
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="p-4 sm:ml-64">
        <Droppable droppableId="board" type="BOARDS">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="flex gap-2"
            >
              {boards.map((board, index) => (
                <Draggable
                  draggableId={board.id + ""}
                  index={index}
                  key={board.id}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                    >
                      <span>{board.title}</span>
                      {/* <Droppable droppableId="card" type="BOARD">
                        {(provided, snapshot) => (
                          <ul
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className="flex flex-col gap-2"
                          >
                            {board.toDos.map((todo, index) => (
                              <Cards todo={todo} key={todo.id} index={index} />
                            ))}
                          </ul>
                        )}
                      </Droppable> */}
                    </div>
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default Projects;
