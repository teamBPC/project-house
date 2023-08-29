export interface IToDo {
  id: number;
  text: string;
}

export interface IBoards {
  boards: IBoard[];
}

export interface IBoard {
  id: number;
  title: string;
  todos: IToDo[];
}

export interface ICardProps {
  todo: IToDo;
  index: number;
}
export interface IBoardProps {
  board: IBoard;
  index: number;
}
