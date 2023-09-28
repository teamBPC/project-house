function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="grid w-full grid-cols-3 gap-12 p-12 ">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
          <>
            <div
              key={num}
              className="relative overflow-hidden bg-gray-100 border rounded-lg shadow-md hover:border-gray-200 min-w-[24rem] "
            >
              <img
                src="https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/f5ab0fb1-5c42-400c-c8a2-50ab4bd61800/public"
                alt="default"
                className="object-cover aspect-video"
              />
              <div
                className="absolute top-0 left-0 z-10 flex flex-col h-full w-full bg-gradient-to-b from-transparent to-black/100 text-white justify-end opacity-0
              hover:opacity-100 transition-opacity"
              >
                <div className="flex flex-col gap-2 p-6">
                  <span className="text-xl font-bold">제목이 들어갈 공간</span>
                  <div className="flex gap-1 py-4">
                    <img
                      src="https://img.shields.io/badge/React-fff?style=flat-square&logo=React&logoColor=black"
                      alt="default"
                      className="px-2 py-1 bg-white rounded-lg"
                    />
                    <img
                      src="https://img.shields.io/badge/kotlin-fff?style=flat-square&logo=kotlin&logoColor=black"
                      alt="default"
                      className="px-2 py-1 bg-white rounded-lg"
                    />
                    <img
                      src="https://img.shields.io/badge/Next.js-fff?style=flat-square&logo=nextdotjs&logoColor=black"
                      alt="default"
                      className="px-2 py-1 bg-white rounded-lg"
                    />
                  </div>
                  <div className="flex items-center justify-between font-bold ">
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
          </>
        ))}
      </div>
    </div>
  );
}

export default Home;
