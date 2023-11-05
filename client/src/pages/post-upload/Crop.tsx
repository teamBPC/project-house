import Cropper from "react-easy-crop";
import { useEffect, useState } from "react";
import {
  ICropData,
  ICroppedArea,
  ICroppedAreaPixels,
} from "../../interface/crop";
import getCroppedImg from "./getCroppedImg";
function Crop({ selectedImage }: { selectedImage: string | null }) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const [croppedAreaPixels, setCroppedAreaPixels] = useState<
    ICroppedAreaPixels
  >();

  const onCropComplete = (
    croppedArea: ICroppedArea,
    croppedAreaPixels: ICroppedAreaPixels
  ) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const [croppedImage, setCroppedImage] = useState<string | undefined>();

  const showCroppedImage = async () => {
    try {
      if (selectedImage && croppedAreaPixels) {
        const croppedImg = await getCroppedImg(
          selectedImage,
          croppedAreaPixels
        ) as string;
        setCroppedImage(croppedImg);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      {selectedImage && (
        <div className="absolute inset-0 flex">
          <div>
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
          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
                showCroppedImage();
              }}
              className="relative z-50"
            >
              asdasd
            </button>
          </div>
          <img src={croppedImage} alt="" className="z-50" />
        </div>
      )}
    </>
  );
}
export default Crop;
