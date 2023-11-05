export const register = {
    "/auth/register": {
        post: {
            tags: ["Auth"],
            summary: "회원가입",
            requestBody: {
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                userEmail: {
                                    type: "string",
                                },
                                userPw: {
                                    type: "string",
                                },
                                userNm: {
                                    type: "string",
                                },
                            },
                        },
                    },
                },
            },
            responses: {
                200: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    accessToken: {
                                        type: "string",
                                    },
                                    refreshToken: {
                                        type: "string",
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

export const login = {
    "/auth/login": {
        post: {
            tags: ["Auth"],
            summary: "로그인",
            requestBody: {
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                userEmail: {
                                    type: "string",
                                },
                                userPw: {
                                    type: "string",
                                },
                            },
                        },
                    },
                },
            },
            responses: {
                200: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    accessToken: {
                                        type: "string",
                                    },
                                    refreshToken: {
                                        type: "string",
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

export const refresh = {
    "/auth/refresh": {
        post: {
            tags: ["Auth"],
            summary: "토큰 초기화",
            security: [
                {
                    bearAuth: [],
                },
            ],
            requestBody: {
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                accessToken: {
                                    type: "string",
                                },
                                refreshToken: {
                                    type: "string",
                                },
                            },
                        },
                    },
                },
            },
            responses: {
                200: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    accessToken: {
                                        type: "string",
                                    },
                                    refreshToken: {
                                        type: "string",
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

export const testForAfterLogin = {
    "/auth/test": {
        post: {
            tags: ["Auth"],
            summary: "인증 후 토큰값 활용",
            security: [
                {
                    bearAuth: [],
                },
            ],
            requestBody: {
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                accessToken: {
                                    type: "string",
                                },
                                refreshToken: {
                                    type: "string",
                                },
                            },
                        },
                    },
                },
            },
            responses: {
                200: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    accessToken: {
                                        type: "string",
                                    },
                                    refreshToken: {
                                        type: "string",
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