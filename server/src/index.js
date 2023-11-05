import express from "express";
import cors from "cors";
import helmet from "helmet";
import swaggerUi from "swagger-ui-express";
import { options, swaggerDocs } from "./swagger";
import { Controllers } from "./models";
import database from "./database";
import { jwtAuth } from "./middleware";

(async () => {
  const app = express();
  await database.$connect();

  app.use(express.json());
  app.use(cors());
  app.use(helmet());
  app.use(express.urlencoded({ extended: true, limit: "700mb" }));
  app.use(jwtAuth);

  Controllers.forEach((controller) => {
    app.use(controller.path, controller.router);
  });

  app.get("/swagger.json", (req, res) => {
    res.status(200).json(swaggerDocs);
  });

  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(undefined, options));

  app.get("/", (req, res) => {
    res.send("Nodejs 성공")
  })

  app.use((err, req, res, next) => {
    console.log(err)
    res
      .status(err.status || 500)
      .json({ message: err.message || "서버에서 에러가발생하였습니다." })
  });

  app.listen(8000, () => {
    console.log("서버가 시작되었습니다. PORT : 8000");
  });

})();