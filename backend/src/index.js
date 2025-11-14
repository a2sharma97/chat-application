import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});

import connectDB from "./db/index.js";
import { server } from "./socket/socket.js";

connectDB()
  .then(() => {
    server.on("error", (error) => {
      console.log("Application is unable to connect database", error);
      throw error;
    });
    server.listen(process.env.PORT || 8080, () => {
      console.log(`Server listen at port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MONGO db connection failed !!!", error);
  });
