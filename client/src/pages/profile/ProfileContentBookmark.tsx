function ProfileContentBookmark() {
  return (
    <div>
      <ul className="p-4">
        {[1, 2, 3, 4].map((list) => (
          <li key={list} className="mb-8">
            <div>
              <img
                src="https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/782af772-bca9-407b-c5ec-fd02980f4000/public"
                alt="default"
                className="object-cover shadow-2xl rounded-xl aspect-video "
              />
            </div>
            <div className="flex justify-between p-2 pt-3 font-bold">
              <div className="flex items-center gap-2">
                <img
                  className="w-8 h-8 rounded-full"
                  src={`https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/f7fa91bd-bd76-4274-5220-e796e1565100/avatar`}
                  alt="avatar"
                />
                <div className="flex flex-col">
                  <span className="text-lg leading-3">awwwards my app</span>
                  <span className="text-sm font-normal text-gray-500">
                    park hae chan
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-[0.1rem]">
                  <span className="material-symbols-outlined">favorite</span>
                  <span>12</span>
                </div>
                <div className="flex items-center gap-[0.1rem]">
                  <span className="material-symbols-outlined">bookmark</span>
                  <span>7</span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileContentBookmark;
