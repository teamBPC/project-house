function TaskDetailModalComment() {
  return (
    <div className="flex flex-col justify-between col-span-4 px-8 pt-5 pb-6 border-l h-full min-h-[calc(100vh-2rem)] max-h-[calc(100vh-2rem)] ">
      <span className="py-1 text-sm font-medium text-gray-900">전달사항</span>
      <div className="flex flex-col-reverse h-full py-2 pr-1 overflow-hidden overflow-y-scroll border-y ">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((list) => (
          <div key={list} className="flex items-start gap-2 mt-2">
            <img
              className="rounded-full h-7 w-7"
              src={`https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/f7fa91bd-bd76-4274-5220-e796e1565100/avatar`}
              alt="avatar"
            />
            <div className="flex flex-col">
              <span className="text-sm font-bold">
                baek-si-hyun{" "}
                <span className="text-xs font-bold text-gray-500 ">30분전</span>
              </span>
              <div className="max-w-sm p-2 text-sm bg-gray-100 rounded-lg whitespace-break-spaces">
                <span>
                  댓글댓글댓글댓댓글댓글댓글댓댓글댓글댓글댓댓글댓글댓글 {list}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <form className="flex py-2">
        <div className="w-full">
          <textarea
            id="comment"
            className="block p-1 w-full text-sm text-gray-900 bg-gray-50 rounded-l-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 min-h-[80px] resize-none"
            required
          />
        </div>
        <div className="flex justify-end ">
          <button
            type="submit"
            className="w-full px-2 text-sm font-medium text-center text-white bg-blue-700 rounded-r-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              className="fill-white"
            >
              <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
export default TaskDetailModalComment;
