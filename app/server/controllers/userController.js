import { UserModel } from "../models/models.js";
import { generateToken } from "../utils/auth.js";
import {
  createUserErrorHandler,
  serverErrorHandler,
} from "../utils/handlers.js";
export const userController = {

  getAllUsers: async (req, res) => {
    try {
      const listUsers = await UserModel.find();
      res.status(201).json({ message: "Success", list: listUsers });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Iternal server error" });
    }
  },
  getUserById: async (req, res) => {
    try{
        const userId = req.query.id
        const user = await UserModel.findById(userId)

        res.status(200).json({user})
    }
    catch(err){
        serverErrorHandler(res, err)
    }
  },
  createUser: async (req, res) => {
    try {
        const { name, password, birthday, address } = req.body; // Объявляем переменные в начале
        const user = new UserModel({
            name,
            password,
            birthday,
            address,
        });

        const savedUser = await user.save(); 
        const token = generateToken(savedUser); 

        res.cookie("authToken", token, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 9999999,
        });
        
        res.status(201).json({ message: "Success created", user: savedUser, token });
    } catch (err) {
        console.error(err);
        createUserErrorHandler(res, err);
    }
},
  loginUser: async (req, res) => {
    const { name, password } = req.body;
    const user = await UserModel.findOne({ name });
    if (!user || user.password !== password) {
      return res.status(401).json({ error: "Нерпавильный пароль или логин" });
    }
    // генерация токена
    const token = generateToken(user);
    res.cookie("authToken", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 9999999,
    });
    return res.status(201).json({ message: "Успешный вход", token });
  },
  logOutUser: async (req, res) => {
    res.clearCookie("authToken");
    res.status(200).json({ message: "Успешный выход" });
  },
  deleteUser: async (req, res) => {
    try {
      const { name, password } = req.body;
      await UserModel.deleteOne({ name, password });
      res.status(202).json({ message: "deleted succes" });
    } catch (err) {
      serverErrorHandler(res, err);
    }
  },
  updateUser: async (req, res) => {
    await res.status(201).json({ message: "update user" });
  },
};
