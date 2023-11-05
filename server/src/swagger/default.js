const defaultSwagger = {
  openapi: "3.0.0",
  info: {
    version: "0.0.1",
    title: "projectManager",
    description: "프로젝트 메니저 API",
  },
  components: {
    securitySchemes: {
      bearAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
};
export default defaultSwagger;
