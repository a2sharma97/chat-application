import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Application is unable to connect database", error);
      throw error;
    });
    app.listen(process.env.PORT || 8080, () => {
      console.log(`Server listen at port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MONGO db connection failed !!!", error);
  });
