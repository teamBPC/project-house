import { ISideTreeData } from "../../interface/sidebar";
import SideItem from "./SideItem";

function SideTree() {
  const data: ISideTreeData[] = [
    {
      id: 1,
      title: "project house",
      children: [
        {
          id: 1,
          title: "frontend",
          children: [
            { id: 1, title: "퍼블리싱" },
            { id: 2, title: "디자인" },
          ],
        },
        {
          id: 2,
          title: "backend",
          children: [{ id: 1, title: "서버" }],
        },
      ],
    },
    {
      id: 2,
      title: "visual coin",
      children: [
        {
          id: 1,
          title: "frontend",
          children: [{ id: 1, title: "퍼블리싱" }],
        },
        {
          id: 2,
          title: "backend",
          children: [{ id: 1, title: "서버" }],
        },
      ],
    },
  ];
  return (
    <div>
      {data.map((item, index) => (
        <SideItem key={index} data={item} />
      ))}
    </div>
  );
}
export default SideTree;
