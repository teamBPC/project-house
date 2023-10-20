function PostComment() {
  return (
    <div className="grid grid-cols-10 gap-4 mb-12">
      <div className="col-span-7 p-4 bg-gray-100 rounded-xl">
        <div className="flex items-start gap-4 p-4 pb-6 ">
          <img
            className="w-10 h-10 rounded-full"
            src={`https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/f7fa91bd-bd76-4274-5220-e796e1565100/avatar`}
            alt="avatar"
          />
        </div>
        <div className="p-4">
          {[1, 2, 3, 4, 5].map((list) => (
            <div key={list} className="flex items-start gap-2 mb-4">
              <img
                className="w-10 h-10 rounded-full"
                src={`https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/f7fa91bd-bd76-4274-5220-e796e1565100/avatar`}
                alt="avatar"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold">
                  baek-si-hyun{" "}
                  <span className="text-xs font-bold text-gray-500">
                    30분전
                  </span>
                </span>
                <div className="text-sm">
                  <span>
                    댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col col-span-3 gap-4">
        <div className="flex items-center flex-1 gap-2 p-6 bg-gray-100 rounded-xl">
          <img
            className="w-10 h-10 rounded-full"
            src={`https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/f7fa91bd-bd76-4274-5220-e796e1565100/avatar`}
            alt="avatar"
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold">baek-si-hyun</span>
            <span className="text-sm font-bold">2023-06-08</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-6 bg-gray-100 rounded-xl">
          <span className="font-bold">프로젝트 참여인원</span>
          <div className="grid grid-cols-2 gap-2">
            {[1, 2, 3, 4].map((list) => (
              <div key={list} className="flex items-center gap-2">
                <img
                  className="w-6 h-6 rounded-full"
                  src={`https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/f7fa91bd-bd76-4274-5220-e796e1565100/avatar`}
                  alt="avatar"
                />
                <span className="text-sm font-bold truncate">baek-si-hyun</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 p-6 bg-gray-100 rounded-xl">
          <span className="font-bold ">제작 프로젝트</span>
          <div className="flex flex-col">
            <span>당근마켓 클론 코딩</span>
            <span>개인웹이트 </span>
            <span>에어이엔비 클론코딩</span>
            <span>토스 클론코딩</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-6 bg-gray-100 rounded-xl">
          <span className="font-bold ">관련 키워드</span>
          <div className="flex flex-wrap gap-1">
            {[1, 2, 3, 4, 5, 6].map((list) => (
              <kbd
                key={list}
                className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100  border border-gray-200 rounded-lg"
              >
                개인 홈페이지
              </kbd>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default PostComment;
