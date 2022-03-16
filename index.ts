import { config } from "dotenv";
//load env if enviroment is not equal to production
if(process.env.NODE_ENV !== "production") {
    config();
}
import express from "express";
import { engine } from "express-handlebars";
import cors  from "cors";
import path from "path";
import { indexRouter } from "./routers";

const app = express();

app.use(express.urlencoded({ extended : false }));
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.engine(".hbs", engine({ extname: ".hbs", defaultLayout: "main" }));
app.set("view engine", ".hbs");
app.set("views", "./views");

// app.use(express.static("./public", "./public))
app.get('/', indexRouter);

app.use((req, res, next) => {
  res.status(404).send("404 Not Found");
});

const PORT:number|string = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("web app running on port " + PORT)
});