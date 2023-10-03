import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IStructureTreeData } from "../../interface/sidebar";
import { cls } from "../../libs/utils";

function StructureItem({
  data,
  depth = 0,
}: {
  data: IStructureTreeData;
  depth?: number;
}) {
  const [link, setLink] = useState("");
  const [showTree, setShowTree] = useState(false);
  const toggleShowTree = () => {
    setShowTree((showTree) => !showTree);
  };

  const generateLink = (depth: number, data: IStructureTreeData) => {
    let to: string;
    if (depth === 0) to = `projects/${data.id}`;
    if (data.parentId && depth === 1)
      to = `projects/${data.parentId[0]}/board/${data.id}`;
    if (data.parentId && depth > 1)
      to = `projects/${data.parentId[0]}/board/${data.parentId[1]}`;
    setLink(() => to);
  };
  useEffect(() => {
    generateLink(depth, data);
  }, [data]);
  return (
    <>
      {data && (
        <div
          style={{ paddingLeft: `${depth === 0 ? 0 : 12}px` }}
          className="flex flex-col pl-4"
        >
          <div
            className={cls(
              "flex items-center focus:text-blue-700",
              !data.children ? "pl-6" : ""
            )}
          >
            {data.children && (
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
              <Link to={link}>{data.title}</Link>
            </div>
          </div>
          <div>
            {showTree &&
              data.children?.map((child, index) => (
                <StructureItem key={index} data={child} depth={depth + 1} />
              ))}
          </div>
        </div>
      )}
    </>
  );
}
export default StructureItem;
