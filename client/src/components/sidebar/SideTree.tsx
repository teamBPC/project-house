import SideItem from "./SideItem";

function SideTree() {
  const data = [
    {
      id: 0,
      title: "qwe",
      children: [
        {
          id: 0,
          title: "qwe",
        },
        {
          id: 1,
          title: "qwe",
        },
        {
          id: 2,
          title: "qwe",
        },
      ],
    },
    {
      id: 1,
      title: "qwe",
      children: [
        {
          id: 3,
          title: "qwe",
        },
        {
          id: 4,
          title: "qwe",
        },
        {
          id: 5,
          title: "qwe",
        },
      ],
    },
    {
      id: 2,
      title: "qwe",
      children: [
        {
          id: 6,
          title: "qwe",
        },
        {
          id: 7,
          title: "qwe",
        },
        {
          id: 8,
          title: "qwe",
        },
      ],
    },
  ];
  return (
    <div>
      {data.map((item, index) => (
        <SideItem item={item} key={item.id} />
      ))}
    </div>
  );
}
export default SideTree;
