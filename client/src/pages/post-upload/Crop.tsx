import Cropper from "react-easy-crop";
import { Dispatch, SetStateAction, useState } from "react";
import { ICroppedArea, ICroppedAreaPixels } from "../../interface/crop";
import getCroppedImg from "./getCroppedImg";
import { UseFormResetField } from "react-hook-form";
import { modalHandle } from "../../libs/modalHandle";
import { useDispatch } from "react-redux";

function Crop({
  resetField,
  selectedImage,
  setSelectedImage,
  setCroppedImage,
}: {
  resetField: UseFormResetField<any>;
  selectedImage: string;
  setSelectedImage: Dispatch<SetStateAction<string>>;
  setCroppedImage: Dispatch<SetStateAction<string>>;
}) {
  const dispatch = useDispatch();
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const [croppedAreaPixels, setCroppedAreaPixels] = useState<
    ICroppedAreaPixels
  >();

  const onCropComplete = (
    _: ICroppedArea,
    croppedAreaPixels: ICroppedAreaPixels
  ) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const showCroppedImage = async () => {
    try {
      if (selectedImage && croppedAreaPixels) {
        const croppedImg = (await getCroppedImg(
          selectedImage,
          croppedAreaPixels
        )) as string;
        setCroppedImage(croppedImg);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const resetCroppedImage = () => {
    setSelectedImage("");
  };

  return (
    <>
      {selectedImage && (
        <>
          <div className="relative flex flex-col w-full h-full">
            <div className="absolute inset-0 ">
              <Cropper
                image={selectedImage}
                crop={crop}
                zoom={zoom}
                aspect={16 / 9}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
              />
            </div>
          </div>
          <div className="flex justify-center gap-4 p-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                resetCroppedImage();
                resetField("thumbnail", { keepTouched: true });
              }}
              className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-800 "
            >
              다시하기
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                showCroppedImage();
                modalHandle(dispatch, "prevCropImgModalOpen", true);
              }}
              className="relative z-50 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-800 "
            >
              미리보기
            </button>
          </div>
        </>
      )}
    </>
  );
}
export default Crop;
