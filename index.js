"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
//load env if enviroment is not equal to production
if (process.env.NODE_ENV !== "production") {
    dotenv_1.default.config();
}
const express_1 = __importDefault(require("express"));
const express_handlebars_1 = require("express-handlebars");
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const routers_1 = require("./routers");
const app = (0, express_1.default)();
exports.app = app;
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app.engine(".hbs", (0, express_handlebars_1.engine)({ extname: ".hbs", defaultLayout: "main" }));
app.set("view engine", ".hbs");
app.set("views", "./views");
app.get('/', routers_1.indexRouter);
app.use((req, res, next) => {
    res.status(404).render("404");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("web app running on port " + PORT);
});
