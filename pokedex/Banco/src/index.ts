import { app } from "./Controller/app";
import { serverRouter } from "./serverRoutes";

app.use("/services",serverRouter)