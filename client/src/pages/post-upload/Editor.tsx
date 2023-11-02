import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
function Editer() {
  const [mdValue, setMdValue] = useState<
    string | undefined
  >(`<h1 style="color:red">사용 방법</h1> <a href="#">링크</a> <br />
  <img
    src="https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/f5ab0fb1-5c42-400c-c8a2-50ab4bd61800/public"
    width="320"
  />
  <div style="display:flex; flexDirection:column">
    <span>사용할수 있는 태그</span>
    <span>
      "h1", "h2", "h3", "h4", "h5", "h6", "p", "a", "span", "br", "div",
      "img",
    </span>
    <span>속성은 반드시 영어로 입력하세요</span>
  </div>`);

  return (
    <div>
      <MDEditor
        height={865}
        value={mdValue}
        onChange={setMdValue}
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
