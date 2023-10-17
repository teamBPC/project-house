function ProfileSetting() {
  return (
    <div className="w-full">
      <div className="block pb-12">
        <span className="text-4xl font-bold">설정</span>
      </div>
      <div>
        <div>
          <span className="block mb-3 text-2xl font-bold">게시물 알림</span>
          <ul className="p-4 mb-4 border-b">
            <li className="flex items-center justify-between gap-4 mb-3">
              <div className="flex flex-col ">
                <span className="font-semibold">좋아요 알림</span>
                <span className="text-sm text-gray-500">
                  상대방이 내 게시물에 좋아요를 누르면 알림을 받게 됩니다.
                </span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </li>
            <li className="flex items-center justify-between gap-4 mb-3">
              <div className="flex flex-col ">
                <span className="font-semibold">저장 알림</span>
                <span className="text-sm text-gray-500">
                  상대방이 내 게시물을 저장하면 알림을 받게 됩니다.
                </span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </li>
            <li className="flex items-center justify-between gap-4 mb-3">
              <div className="flex flex-col ">
                <span className="font-semibold">댓글 알림</span>
                <span className="text-sm text-gray-500">
                  상대방이 내 게시물에 댓글을 쓰면 알림을 받게 됩니다.
                </span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </li>
          </ul>
        </div>
        <div>
          <span className="block my-3 text-2xl font-bold mt-9">
            칸반보드 알림
          </span>
          <ul className="p-4 mb-4 border-b">
            <li className="flex items-center justify-between gap-4 mb-3">
              <div className="flex flex-col ">
                <span className="font-semibold">태그 알림</span>
                <span className="text-sm text-gray-500">
                  칸반보드에서 상대방이 나를 태그하면 알림을 받게 됩니다.
                </span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </li>
            <li className="flex items-center justify-between gap-4 mb-3">
              <div className="flex flex-col ">
                <span className="font-semibold">댓글 알림</span>
                <span className="text-sm text-gray-500">
                  칸반보드에서 상대방이 내가 만든 테스크에 댓글을 쓰면 알림을
                  받게 됩니다.
                </span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </li>
            <li className="flex items-center justify-between gap-4 mb-3">
              <div className="flex flex-col ">
                <span className="font-semibold">변경 알림</span>
                <span className="text-sm text-gray-500">
                  칸반보드에서 칸반보드를 생성, 수정, 삭제하면 알림을 받게
                  됩니다.
                </span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </li>
          </ul>
        </div>
        <div>
          <span className="block my-3 text-2xl font-bold mt-9">팀 알림</span>
          <ul className="p-4 mb-4 border-b">
            <li className="flex items-center justify-between gap-4 mb-3">
              <div className="flex flex-col ">
                <span className="font-semibold">초대 알림</span>
                <span className="text-sm text-gray-500">
                  팀에 초대 받게 되면 알림을 받게 됩니다.
                </span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProfileSetting;
