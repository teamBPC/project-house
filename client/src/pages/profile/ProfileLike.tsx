function ProfileLike() {
  return (
    <div>
      <ul className="p-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((list) => (
          <li key={list} className="flex gap-12 mb-8">
            <div className="flex items-center gap-2">
              <img
                className="w-8 h-8 rounded-full"
                src={`https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/f7fa91bd-bd76-4274-5220-e796e1565100/avatar`}
                alt="avatar"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-3 break-words ">
                  awwwards my app
                </span>
                <span className="text-sm font-normal text-gray-500">
                  park hae chan
                </span>
              </div>
            </div>
            <span className="text-sm">3시간전</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileLike;
