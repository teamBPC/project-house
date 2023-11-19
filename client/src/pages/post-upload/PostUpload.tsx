import { useState, ChangeEvent, useEffect } from "react";
import { useCommonForm } from "../../libs/useCommonForm";
import { FieldErrors } from "react-hook-form";
import SearchSkills from "./SearchSkills";
import Crop from "./Crop";
import Editer from "./Editor";
import { ISkill } from "../../interface/skill";
import { cls } from "../../libs/utils";
import { createBrowserHistory, Transition } from "history";
import { useSelector } from "react-redux";
import { IModalState } from "../../interface/modal";
import PrevCropImgModal from "../../components/modal/post-upload/PrevCropImgModal";

function PostUpload() {
  const modalState = useSelector(
    ({ modalStateSlice }: { modalStateSlice: IModalState }) => {
      return modalStateSlice.modalState;
    }
  );
  const {
    register,
    handleSubmit,
    reset,
    submitFormData,
    resetField,
  } = useCommonForm();
  const [croppedImage, setCroppedImage] = useState<string>("");
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

  const [selectedImage, setSelectedImage] = useState<string>("");
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        setSelectedImage(imageUrl);
      };

      reader.readAsDataURL(file);
    }
  };

  const history = createBrowserHistory();
  useEffect(() => {
    // 뒤로가기시에 block되지 않는 문제
    const unblock = history.block((tx: Transition) => {
      if (tx.action === "POP") {
        const answer = window.confirm(
          "입력하신 데이터들이 초기화 됩니다. 뒤로 가시겠습니까?"
        );
        if (!answer) {
          tx.retry();
        }
      }
    });
    return () => {
      unblock();
    };
  }, [history]);

  // useBeforeUnload(()=>{
  //   localStorage.setItem =
  // })
  return (
    <div className="p-24 px-72">
      <div className="flex flex-col justify-center">
        <div className="mb-12">
          <span className="text-4xl font-bold">프로젝트 게시물 올리기</span>
        </div>
        <form onSubmit={handleSubmit(onValid, onInvalid)} className="space-y-6">
          <div className="flex gap-4">
            <div
              className={cls(
                "flex items-center flex-1  rounded-md aspect-video",
                selectedImage ? "" : "border border-black"
              )}
            >
              <div className="relative flex flex-col items-center justify-center w-full h-full">
                <Crop
                  resetField={resetField}
                  selectedImage={selectedImage}
                  setSelectedImage={setSelectedImage}
                  setCroppedImage={setCroppedImage}
                />
                <label
                  htmlFor="thumbnail"
                  className={cls(
                    "px-3 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md shadow-sm cursor-pointer hover:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:ring-orange-500",
                    selectedImage ? "hidden" : ""
                  )}
                >
                  프로젝트 게시물의 썸네일로 사용할 사진을 올려주세요.
                  <input
                    id="thumbnail"
                    type="file"
                    {...register("thumbnail", { required: true })}
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
      <PrevCropImgModal croppedImage={croppedImage} modalState={modalState} />
    </div>
  );
}
export default PostUpload;
