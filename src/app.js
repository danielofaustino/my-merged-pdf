import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import { routers } from "./routes/index.routes.js";


const app = express();
app.set('view engine', 'ejs')


app.use(express.json());
app.use(morgan("dev"));
//app.use(helmet("*"));
app.use(cors());

app.use("/", routers);

export { app };
