function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="grid w-full grid-cols-4 gap-12 p-12 ">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
          <div
            key={num}
            className="bg-gray-100 border rounded-lg shadow-md hover:border-gray-200 min-w-[24rem]"
          >
            <div className="sticky top-0 left-0 z-10 flex flex-col overflow-hidden bg-gray-100 rounded-t-lg h-18 ">
              <div className="flex items-start justify-between">
                <img
                  src="https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/f5ab0fb1-5c42-400c-c8a2-50ab4bd61800/public"
                  alt="default"
                  className="object-cover aspect-video"
                />
              </div>
              <div className="flex flex-col gap-2 p-3 pt-6">
                <span className="text-xl font-bold">제목이 들어갈 공간</span>
                <span>
                  설명이 들어갈 공간 설명이 들어갈 공간 설명이 들어갈 공간
                  설명이 들어갈 공간 설명이 들어갈 공간 설명이 들어갈 공간
                  설명이 들어갈 공간 설명이 들어갈 공간 설명이 들어갈 공간
                </span>
                <div className="flex gap-1 py-4">
                  <img
                    src="https://img.shields.io/badge/React-4b5563?style=flat-square&logo=React&logoColor=white"
                    alt="default"
                    className="px-2 py-1 bg-gray-600 rounded-lg"
                  />
                  <img
                    src="https://img.shields.io/badge/kotlin-4b5563?style=flat-square&logo=kotlin&logoColor=white"
                    alt="default"
                    className="px-2 py-1 bg-gray-600 rounded-lg"
                  />
                  <img
                    src="https://img.shields.io/badge/Next.js-4b5563?style=flat-square&logo=nextdotjs&logoColor=white"
                    alt="default"
                    className="px-2 py-1 bg-gray-600 rounded-lg"
                  />
                </div>
                <div className="flex items-center justify-between font-bold">
                  <span>팀이름 혹은 개인이름</span>
                  <div className="flex items-center gap-2 ">
                    <div className="flex items-center gap-[0.1rem]">
                      <span className="material-symbols-outlined">
                        visibility
                      </span>
                      <span>2345</span>
                    </div>
                    <div className="flex items-center gap-[0.1rem]">
                      <span className="material-symbols-outlined">
                        mode_comment
                      </span>
                      <span>12</span>
                    </div>
                    <div className="flex items-center gap-[0.1rem]">
                      <span className="material-symbols-outlined">
                        bookmark
                      </span>
                      <span>7</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
