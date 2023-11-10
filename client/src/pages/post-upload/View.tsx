import { useEffect, useState } from "react";

function View({ croppedImage }: { croppedImage: string }) {
  const [selectedImage, setSelectedImage] = useState<string>("");
  useEffect(() => {

    // if (!croppedImage) return;
    // const reader = new FileReader();
    // reader.readAsDataURL(croppedImage);
    // reader.onload = () => {
    //   setSelectedImage(reader.result as string);
    // };
  }, [croppedImage]);
  return (
    <>{croppedImage && <img src={croppedImage} alt="" className="z-50" />}</>
  );
}
export default View;
