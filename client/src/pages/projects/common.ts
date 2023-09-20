import { Dispatch, SetStateAction } from "react";

export const hoverModalHandle = (
  state: boolean[],
  setState: Dispatch<SetStateAction<boolean[]>>,
  index: number,
  isOpen: boolean
) => {
  const newHoverStates = [...state];
  newHoverStates[index] = isOpen;
  setState(newHoverStates);
};
