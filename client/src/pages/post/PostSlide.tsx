function PostSlide() {
  return (
    <div className="grid grid-cols-4 gap-8 p-12">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((list) => (
        <div key={list} className="flex flex-col gap-2">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/782af772-bca9-407b-c5ec-fd02980f4000/public"
              alt="default"
              className="object-cover aspect-video"
            />

            <div className="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full transition-opacity opacity-0 hover:opacity-100 bg-gradient-to-b from-transparent to-black/70">
              <a
                href="#"
                className="px-4 py-2 text-white transition-colors border border-white rounded-lg hover:text-black hover:bg-white"
              >
                보러가기
              </a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img
              className="w-6 h-6 rounded-full"
              src={`https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/f7fa91bd-bd76-4274-5220-e796e1565100/avatar`}
              alt="avatar"
            />
            <div>
              <span className="text-sm font-bold">park hae chan</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default PostSlide;
