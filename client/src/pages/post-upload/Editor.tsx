import MDEditor from "@uiw/react-md-editor";
import { Dispatch, SetStateAction } from "react";
function Editer({
  description,
  setDescription,
}: {
  description: string | undefined;
  setDescription: Dispatch<SetStateAction<string | undefined>>;
}) {
  return (
    <div>
      <MDEditor
        height={865}
        value={description}
        onChange={setDescription}
        preview="live"
        previewOptions={{
          allowedElements: [
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "p",
            "a",
            "span",
            "br",
            "div",
            "img",
          ],
        }}
      />
    </div>
  );
}
export default Editer;
