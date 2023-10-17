import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IStructureTreeData } from "../../../../interface/sidebar";
import { cls } from "../../../../libs/utils";

function StructureItem({
  mapItem,
  depth = 0,
}: {
  mapItem: IStructureTreeData;
  depth?: number;
}) {
  const [link, setLink] = useState("");
  const [showTree, setShowTree] = useState(false);
  const toggleShowTree = () => {
    setShowTree((showTree) => !showTree);
  };

  const generateLink = (depth: number, mapItem: IStructureTreeData) => {
    let to: string;
    if (depth === 0) to = `projects/${mapItem.id}`;
    if (mapItem.parentId && depth === 1)
      to = `projects/${mapItem.parentId[0]}/board/${mapItem.id}`;
    if (mapItem.parentId && depth > 1)
      to = `projects/${mapItem.parentId[0]}/board/${mapItem.parentId[1]}`;
    setLink(() => to);
  };
  useEffect(() => {
    generateLink(depth, mapItem);
  }, [depth, mapItem]);

  return (
    <>
      {mapItem && (
        <div
          style={{ paddingLeft: `${depth === 0 ? 0 : 15}px` }}
          className="flex flex-col pl-4"
        >
          <div
            className={cls(
              "flex items-center focus:text-blue-700",
              !mapItem.children ? "pl-6" : ""
            )}
          >
            {mapItem.children && (
              <button
                onClick={() => toggleShowTree()}
                className="flex items-center rounded-md"
              >
                {showTree ? (
                  <span className="material-symbols-outlined">
                    keyboard_arrow_down
                  </span>
                ) : (
                  <span className="material-symbols-outlined">
                    keyboard_arrow_right
                  </span>
                )}
              </button>
            )}
            <div className="w-full truncate">
              <Link to={link}>{mapItem.title}</Link>
            </div>
          </div>
          <div>
            {showTree &&
              mapItem.children?.map((child, index) => (
                <StructureItem key={index} mapItem={child} depth={depth + 1} />
              ))}
          </div>
        </div>
      )}
    </>
  );
}
export default StructureItem;
