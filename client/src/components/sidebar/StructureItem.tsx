import { useState } from "react";
import { Link } from "react-router-dom";
import { IStructureTreeData } from "../../interface/sidebar";

function StructureItem({
  data,
  depth = 0,
}: {
  data: IStructureTreeData;
  depth?: number;
}) {
  const [showTree, setShowTree] = useState(true);

  const toggleShowTree = () => {
    setShowTree((showTree) => !showTree);
  };
  return (
    <>
      {data && (
        <div
          style={{ paddingLeft: `${depth * 20}px` }}
          className="flex flex-col"
        >
          <div className="flex items-center">
            {data.children && (
              <button
                onClick={() => toggleShowTree()}
                className="rounded-md flex items-center"
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
            <div className="truncate w-full">
              <Link to="#">{data.title}</Link>
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
