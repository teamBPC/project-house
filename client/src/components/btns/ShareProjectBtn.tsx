import { Link } from "react-router-dom";

function ShareProjectBtn() {
  return (
    <aside className="flex items-center">
      <Link to="post-upload">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
          className="transition-colors rounded-full w-9 h-9 fill-white hover:bg-white hover:fill-blue-500"
        >
          <title>프로젝트 공유하기</title>
          <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
        </svg>
      </Link>
    </aside>
  );
}
export default ShareProjectBtn;
