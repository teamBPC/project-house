import { useState, ChangeEvent, useEffect } from "react";
import { useCommonForm } from "../../libs/useCommonForm";
import { FieldErrors } from "react-hook-form";
import SearchSkills from "./SearchSkills";
import Crop from "./Crop";
import Editer from "./Editor";
import { ISkill } from "../../interface/skill";

function PostUpload() {
  const { register, handleSubmit, reset, submitFormData } = useCommonForm();
  const [skills, setSkills] = useState<(ISkill | null)[]>([]);
  const [description, setDescription] = useState<
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

  const onValid = async (data: any) => {
    const dataCustomer = {
      ...data,
      skills: skills,
      description: description,
    };
    console.log(dataCustomer);
  };
  const onInvalid = (error: FieldErrors) => {};

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const flie = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(flie);
    reader.onload = () => {
      setSelectedImage(reader.result as string);
    };
  };
  useEffect(() => {
    console.log(selectedImage);
  }, [selectedImage]);
  return (
    <div className="p-24 px-72">
      <div className="flex flex-col justify-center">
        <div className="mb-12">
          <span className="text-4xl font-bold">프로젝트 게시물 올리기</span>
        </div>
        <form onSubmit={handleSubmit(onValid, onInvalid)} className="space-y-6">
          <div className="flex gap-4">
            <div className="flex items-center flex-1 border border-black rounded-md aspect-video">
              <div className="relative flex items-center justify-center w-full h-full">
                <Crop selectedImage={selectedImage} />
                <label
                  htmlFor="thumbnail"
                  className="px-3 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md shadow-sm cursor-pointer hover:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  프로젝트 게시물의 썸네일로 사용할 사진을 올려주세요.
                  <input
                    name="thumbnail"
                    id="thumbnail"
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </label>
              </div>
            </div>
            <div className="flex flex-col flex-1 gap-2">
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
              <SearchSkills skills={skills} setSkills={setSkills} />
            </div>
          </div>
          <Editer description={description} setDescription={setDescription} />
          <div>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4  focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              올리기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default PostUpload;
