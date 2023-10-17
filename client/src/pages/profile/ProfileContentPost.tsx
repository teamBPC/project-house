function ProfileContentPost() {
  return (
    <div>
      <ul className="p-4">
        {[1, 2, 3, 4].map((list) => (
          <li key={list} className="mb-8">
            <div>
              <img
                src="https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/f5ab0fb1-5c42-400c-c8a2-50ab4bd61800/public"
                alt="default"
                className="object-cover shadow-2xl rounded-xl aspect-video"
              />
            </div>
            <div className="flex justify-between p-2 font-bold">
              <span className="text-lg ">awwwards my app</span>
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

export default ProfileContentPost;
