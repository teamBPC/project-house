export const getUser = {
  "/users/:email": {
    get: {
      tags: ["Users"],
      summary: "유저 정보 한명 불러오기",
      description: "유저 정보 한명을 불러옵니다.",
      parameters: [
        {
          in: "path",
          name: "userEmail",
          required: true,
          schema: {
            type: "string",
          },
        },
      ],
      requestBody: {},
      responses: {
        200: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  users: {
                    properties: {
                      userIdx: {
                        type: "number",
                      },
                      userEmail: {
                        type: "string",
                      },
                      userPw: {
                        type: "string",
                      },
                      userNm: {
                        type: "string",
                      },
                      userStatus: {
                        type: "string",
                      },
                      createdDt: {
                        type: "string",
                        format: "date",
                      },
                      updateDt: {
                        type: "string",
                        format: "date",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};
/*
export const createUser = {
  "/users": {
    post: {
      tags: ["Users"],
      summary: "유저 생성하기",
      description: "유저를 생성합니다.",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              example: {
                userEmail: "string",
                userPw: "string",
                userNm: "string",
              },
              extra: {
                userEmail: {
                  type: "string",
                  description: "사용자 이메일",
                },
                userPw: {
                  type: "string",
                  description: "사용자 비밀번호",
                },
                userNm: {
                  type: "string",
                  description: "사용자 이름",
                },
              },
            },
          },
        },
      },
      responses: {
        201: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  users: [{ newUserEmail: "string" }],
                },
              },
            },
          },
        },
      },
    },
  },
};
*/
export const updateUser = {
  "/users/:email": {
    patch: {
      tags: ["Users"],
      summary: "유저 수정하기",
      description: "유저를 수정합니다.",
      parameters: [
        {
          in: "path",
          name: "userEmail",
          required: true,
          schema: {
            type: "string",
          },
        },
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              example: {
                userEmail: "string",
                userPw: "string",
                userNm: "string",
              },
              extra: {
                userEmail: {
                  type: "string",
                  description: "사용자 이메일",
                },
                userPw: {
                  type: "string",
                  description: "사용자 비밀번호",
                },
                userNm: {
                  type: "string",
                  description: "사용자 이름",
                },
              },
            },
          },
        },
      },
      responses: {
        204: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {},
              },
            },
          },
        },
      },
    },
  },
};

export const deleteUser = {
  "/users/:email": {
    delete: {
      tags: ["Users"],
      summary: "유저 삭제하기",
      description: "유저를 삭제합니다.",
      parameters: [
        {
          in: "path",
          name: "userEmail",
          required: true,
          schema: {
            type: "string",
          },
        },
      ],
      requestBody: {},
      responses: {
        204: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {},
              },
            },
          },
        },
      },
    },
  },
};
