import PostComment from "./PostComment";
import PostSideBtns from "../../components/PostSideBtns";
import PostOther from "./PostOther";

function Post() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[1440px] ">
        <div className="flex gap-4">
          <PostSideBtns />
          <div className="flex flex-col gap-4 mt-12">
            <div className="flex items-center justify-between w-full pt-4 ">
              <div className="flex items-center gap-2">
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
              <div className="flex gap-2">
                <button>
                  <span className="p-1 rounded-lg material-symbols-outlined hover:bg-blue-500 hover:text-white">
                    favorite
                  </span>
                </button>
                <button>
                  <span className="p-1 rounded-lg material-symbols-outlined hover:bg-blue-500 hover:text-white">
                    bookmark
                  </span>
                </button>
                <button>
                  <span className="p-1 rounded-lg material-symbols-outlined hover:bg-blue-500 hover:text-white">
                    share
                  </span>
                </button>
              </div>
            </div>
            <div className="relative w-full">
              <img
                src="https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/9a3c9ee7-1f22-43ad-e386-35d840d5e700/public"
                alt="default"
                className="object-cover w-full rounded-xl"
              />
              <div className="absolute top-0 left-0 z-10 flex flex-col justify-end w-full h-full gap-2 p-8 opacity-100 bg-gradient-to-b from-transparent to-black/100 rounded-xl">
                <span className="mb-4 font-bold text-white text-7xl">
                  awwwards my app
                </span>
                <div className="flex flex-wrap gap-1">
                  <img
                    src="https://img.shields.io/badge/React-fff?style=flat-square&logo=React&logoColor=black"
                    alt="default"
                    className="px-2 py-1 bg-white rounded-xl"
                  />
                  <img
                    src="https://img.shields.io/badge/kotlin-fff?style=flat-square&logo=kotlin&logoColor=black"
                    alt="default"
                    className="px-2 py-1 bg-white rounded-xl"
                  />
                  <img
                    src="https://img.shields.io/badge/Next.js-fff?style=flat-square&logo=nextdotjs&logoColor=black"
                    alt="default"
                    className="px-2 py-1 bg-white rounded-xl"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col p-10 tracking-widest ">
              <span className="mb-10 text-2xl font-bold">간단소개</span>
              <span className="">
                21세기는 인공 지능(AI)의 급격한 발전과 함께 우리의 삶을 크게
                변화시키고 있습니다. AI는 이미 우리의 일상생활에서 다양한 역할을
                수행하며, 예측하기 어려운 과학적, 의학적, 경제적 문제를 해결하는
                데도 활용되고 있습니다. 그러나 이러한 기술의 발전은 동시에
                인간의 일자리와 개인정보 보호 등에 대한 우려도 불러일으키고
                있습니다. 그래서 우리는 인간과 인공 지능 간의 협력이 미래를 향한
                중요한 키가 될 것이라고 생각해야 합니다. 인간과 인공 지능은
                각각의 강점과 약점을 가지고 있습니다. 인간은 창의성, 감정, 직관,
                윤리적 판단과 같은 영역에서 뛰어나며, 사회적 상호작용과
                커뮤니케이션 능력을 갖추고 있습니다.
              </span>
            </div>
            {[1, 2, 3, 4].map((list) => (
              <div key={list}>
                <div className="w-full">
                  <img
                    src="https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/9a3c9ee7-1f22-43ad-e386-35d840d5e700/public"
                    alt="default"
                    className="object-cover w-full rounded-xl"
                  />
                </div>
                <div className="flex flex-col p-10 tracking-widest">
                  <span className="mb-10 text-2xl font-bold">
                    인간-인공 지능 협력의 미래(자율)
                  </span>
                  <span className="">
                    21세기는 인공 지능(AI)의 급격한 발전과 함께 우리의 삶을 크게
                    변화시키고 있습니다. AI는 이미 우리의 일상생활에서 다양한
                    역할을 수행하며, 예측하기 어려운 과학적, 의학적, 경제적
                    문제를 해결하는 데도 활용되고 있습니다. 그러나 이러한 기술의
                    발전은 동시에 인간의 일자리와 개인정보 보호 등에 대한 우려도
                    불러일으키고 있습니다. 그래서 우리는 인간과 인공 지능 간의
                    협력이 미래를 향한 중요한 키가 될 것이라고 생각해야 합니다.
                    인간과 인공 지능은 각각의 강점과 약점을 가지고 있습니다.
                    인간은 창의성, 감정, 직관, 윤리적 판단과 같은 영역에서
                    뛰어나며, 사회적 상호작용과 커뮤니케이션 능력을 갖추고
                    있습니다. 반면 인공 지능은 대량의 데이터를 신속하게 분석하고
                    패턴을 발견하는 데 뛰어나며, 무한한 정보를 저장하고 검색할
                    수 있습니다. 따라서 인간과 인공 지능은 상호 보완적인 관계를
                    형성할 수 있습니다. 먼저, 인간과 인공 지능의 협력은 의료
                    분야에서 중요한 역할을 할 것입니다.
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <PostComment />
        <PostOther />
      </div>
    </div>
  );
}
export default Post;
