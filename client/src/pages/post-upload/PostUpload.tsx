import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";
import { useEffect, useState } from "react";
import { useCommonForm } from "../../libs/useCommonForm";
import { FieldErrors } from "react-hook-form";

function PostUpload() {
  const { register, handleSubmit, reset, submitFormData } = useCommonForm();
  const onValid = async () => {};
  const onInvalid = (error: FieldErrors) => {};
  const [mdValue, setMdValue] = useState<string | undefined>(``);
  useEffect(() => {
    console.log(mdValue);
  }, [mdValue]);
  return (
    <div className="p-24 px-72">
      <div className="flex flex-col justify-center">
        <div className="mb-12">
          <span className="text-4xl font-bold">프로젝트 게시물 올리기</span>
        </div>
        <form onSubmit={handleSubmit(onValid, onInvalid)} className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              프로젝트 제목
            </label>
            <input
              type="text"
              id="title"
              {...register("title", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-blue-500"
              required
            />
          </div>
          <div className="flex items-center gap-4">
            <label
              htmlFor="thumbnail"
              className="px-3 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md shadow-sm cursor-pointer hover:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Change
              <input
                name="thumbnail"
                id="thumbnail"
                type="file"
                className="hidden"
                accept="image/*"
              />
            </label>
          </div>
          <div>
            <label
              htmlFor="maker"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              만든 사람
            </label>
            <input
              type="text"
              id="maker"
              {...register("maker", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="githubLink"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              깃허브 주소
            </label>
            <input
              type="text"
              id="githubLink"
              {...register("githubLink", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="projectLink"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              라이브 주소
            </label>
            <input
              type="text"
              id="projectLink"
              {...register("projectLink", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="skills"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              사용 언어
            </label>
            <input
              type="text"
              id="skills"
              {...register("skills", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-blue-500"
              required
            />
          </div>

          <div>
            <MDEditor
              height={865}
              value={mdValue}
              onChange={setMdValue}
              preview="live"
              previewOptions={{
                rehypePlugins: [[rehypeSanitize]],
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
export default PostUpload;
