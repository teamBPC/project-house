import { useRef } from "react";
import { useDispatch } from "react-redux";
import { cls } from "../../../libs/utils";
import { IModalProps } from "../../../interface/modal";
import { modalHandle } from "../../../libs/modalHandle";

function PrevCropImgModal({
  croppedImage,
  modalState,
}: IModalProps & { croppedImage: string }) {
  const dispatch = useDispatch();
  const modalRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      className={cls(
        "fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen bg-black bg-opacity-50 flex justify-center items-center",
        modalState.prevCropImgModalOpen ? "" : "hidden"
      )}
    >
      <div ref={modalRef} className="relative flex rounded-lg">
        <button
          type="button"
          onClick={() => modalHandle(dispatch, "prevCropImgModalOpen", false)}
          className="absolute right-0 inline-flex items-center justify-center w-8 h-8 ml-auto text-sm text-white bg-transparent rounded-lg top-3 hover:bg-gray-200 hover:text-gray-900"
        >
          <svg
            className="w-3 h-3 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
        <div className="mt-12">
          <img src={croppedImage} alt="cropImg" className="w-[40rem]" />
        </div>
      </div>
    </div>
  );
}

export default PrevCropImgModal;
