import { useState, ChangeEvent } from "react";
import { ISkill } from "../../interface/skill";
import { cls } from "../../libs/utils";
function SearchSkills() {
  const skillList = [
    { id: "firebase", value: "firebase" },
    { id: "React", value: "react" },
    { id: "React Native", value: "react" },
    { id: "kotlin", value: "kotlin" },
    { id: "JetpackCompose", value: "jetpackcompose" },
    { id: "Next.js", value: "nextdotjs" },
    { id: "Nuxt.js", value: "nuxtdotjs" },
    { id: "NestJS", value: "nestjs" },
    { id: "Vue.js", value: "vuedotjs" },
    { id: "Node.js", value: "nodedotjs" },
    { id: "Three.js", value: "threedotjs" },
    { id: "AngularJS", value: "angularjs" },
    { id: "JavaScript", value: "javascript" },
    { id: "TypeScript", value: "typescript" },
    { id: "Python", value: "python" },
    { id: "PHP", value: "php" },
    { id: "Pug", value: "pug" },
    { id: "Recoil", value: "recoil" },
    { id: "Redux", value: "redux" },
    { id: "Prisma", value: "prisma" },
    { id: "sass", value: "sass" },
    { id: "Tailwind CSS", value: "tailwindcss" },
    { id: "styled components", value: "styledcomponents" },
    { id: "Ruby", value: "ruby" },
    { id: "Socket.io", value: "socketdotio" },
    { id: "Spring", value: "spring" },
    { id: "Spring Boot", value: "springboot" },
    { id: "Vitess", value: "vitess" },
    { id: "Oracle", value: "oracle" },
    { id: "OpenAI", value: "openai" },
    { id: "Gatsby", value: "gatsby" },
    { id: "MySQL", value: "mysql" },
    { id: "PostgresSQL", value: "postgresql" },
    { id: "MongoDB", value: "mongodb" },
    { id: "MariaDB", value: "mariadb" },
    { id: "jQuery", value: "jquery" },
    { id: "Jest", value: "jest" },
    { id: "flutter", value: "flutter" },
    { id: "Dart", value: "dart" },
    { id: "C", value: "c" },
    { id: "C#", value: "csharp" },
    { id: "C++", value: "cplusplus" },
    { id: "Amazon RDS", value: "amazonrds" },
    { id: "Amazon EC2", value: "amazonec2" },
  ];

  const [search, setSearch] = useState<(ISkill | null)[]>([]);
  const [showBox, setShowBox] = useState(false);
  const searchSkills = (e: ChangeEvent) => {
    const searchWord = (e.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
    const searching = searchWord
      ? skillList.filter((item) => item.id.toLowerCase().includes(searchWord))
      : [];
    setSearch(searching);
    // input에 onBlur 처리 시 skill을 선책하려고 클릭해도 선택되지 않는 문제
    setShowBox(searching.length > 0);
  };

  const [skills, setSkills] = useState<(ISkill | null)[]>([]);

  const addSkills = (data: ISkill | null) => {
    const duplication = skills.findIndex((item) => item?.id === data?.id);
    if (duplication === -1) {
      setSkills((prev) => [...prev, data]);
    } else {
      return;
    }
  };

  const deleteSkill = (data: ISkill | null) => {
    const findIndex = skills.findIndex((item) => item?.id === data?.id);
    if (findIndex !== -1) {
      const newSkills = [...skills];
      newSkills.splice(findIndex, 1);
      setSkills(newSkills);
    }
  };

  return (
    <div className="flex flex-col gap-2 ">
      <div className="relative">
        <label
          htmlFor="skills"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          사용 언어
        </label>
        <input
          type="text"
          id="skills"
          autoComplete="off"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-blue-500"
          required
          onChange={searchSkills}
        />
        <div
          className={cls(
            "absolute inset-x-0 z-10 w-52 overflow-y-scroll bg-white rounded-md shadow-2xl max-h-96",
            showBox && search ? "visible" : "hidden"
          )}
        >
          <ul className="flex flex-col py-2 text-sm text-gray-700">
            {search.map((data) => (
              <li
                key={data?.id}
                className="p-2 transition-colors hover:bg-blue-600 hover:text-white"
              >
                <button
                  onClick={() => addSkills(data)}
                  className="w-full h-full"
                >
                  <span>{data?.id}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <ul className="flex flex-wrap gap-1">
          {skills &&
            skills.map((data) => (
              <li className="flex items-center px-2 py-1 bg-blue-700 rounded-lg">
                <img
                  src={`https://img.shields.io/badge/${data?.id}-1a56db?style=flat-square&logo=${data?.value}&logoColor=white`}
                  alt="default"
                  key={data?.id}
                />
                <button onClick={() => deleteSkill(data)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                    className="w-4 h-4 rounded-sm fill-white hover:bg-white hover:fill-blue-600"
                  >
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                  </svg>
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
export default SearchSkills;
