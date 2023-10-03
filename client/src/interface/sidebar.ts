export interface IStructureTreeData {
  id: number;
  title: string;
  parentId?: number[];
  children?: IStructureTreeData[];
}
