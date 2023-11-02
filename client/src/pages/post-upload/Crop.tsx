import Cropper from "react-easy-crop";
import {useState } from "react";
import { ICrop, ICroppedArea, ICroppedAreaPixels } from "../../interface/crop";
function Crop({ selectedImage }: { selectedImage: string | null }) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [cropImg, setCropImg] = useState<ICrop>();

  const onCropComplete = (
    croppedArea: ICroppedArea,
    croppedAreaPixels: ICroppedAreaPixels
  ) => {
    setCropImg({ area: croppedArea, areaPixels: croppedAreaPixels });
  };

  return (
    <>
      {selectedImage && (
        <div className="absolute inset-0">
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
      )}
    </>
  );
}
export default Crop;
