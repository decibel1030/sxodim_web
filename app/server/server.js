import express from "express";
import UserRouter from "./routes/UserRouter.js"; // Проверьте путь к вашему маршруту
import cookieParser from 'cookie-parser';
import { db } from "./dbConnection.js";
const app = express();
const PORT = 3000;

app.use(cookieParser())
app.use(express.json()); // Если вы ожидаете JSON в теле запроса
app.use("/api", UserRouter); // Подключение маршрутов

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});