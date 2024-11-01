import { Router } from "express";
import { userController } from "../controllers/userController.js";
import { verifyToken } from "../utils/auth.js";
const UserRouter = Router();

const { getAllUsers, getUserById, deleteUser, createUser, updateUser, loginUser, logOutUser } =
  userController;

UserRouter.route("/user")
  .all(verifyToken)
  .get((req, res) => {
    if (req.query.id) {
      // поиск по ID если он передан в query string
      getUserById(req, res);
    } else {
      // Получение всех пользователей если нет такого параметра в query string
      getAllUsers(req, res);
    }
  })
  .delete(deleteUser)
  .put(updateUser)

UserRouter.post("/user/register",  createUser)
UserRouter.post("/user/login/",  loginUser)
UserRouter.post("/user/logout/", logOutUser)
export default UserRouter;