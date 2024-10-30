import { UserModel } from "../models/models.js"
import { generateToken } from "../utils/auth.js"
import {createUserErrorHandler, serverErrorHandler} from "../utils/handlers.js"
export const userController = {
    // name: {type: String, required: true, max: 100},
    // password: {type: String, required: true, min: 8, max: 200},
    // userIcon: {type: String, default: "", required: false},
    // birthday: {type: Date, required: true},
    // address: {type: String}
    getAllUsers: async (req, res) =>{
        try{
            const listUsers = await UserModel.find();
            res.status(201).json({message: "Success", list: listUsers})
        }
        catch(err){
            console.error(err);
            res.status(500).json({error: "Iternal server error"})
        }
    },
    getUserById: async(req, res)=>{
        await res.send("get by id")
    },
    createUser: async(req, res) =>{
        try{
            const {name, password, birthday, address} = req.body;
            const user = new UserModel({
                name,
                password,
                birthday,
                address
            })
            const savedUser = await user.save();
            const token = generateToken(savedUser);

            res.status(201).json({message: "Success created", user: user, token: token})
        }
        catch(err){
            console.error(err);
            createUserErrorHandler(res, err)
        }
    },
    loginUser: async(req, res)=>{
        const {name, password} = req.body;
        const user = await UserModel.findOne({name});
        if(!user || user.password !== password){
            return res.status(401).json({error: "Нерпавильный пароль или логин"})
        }
        // генерация токена
        const token = generateToken(user)
        
        return res.status(201).json({message: "Success enter"})
    },
    deleteUser: async(req, res)=>{
        try{
            const {name, password} = req.body
            await UserModel.deleteOne({name, password})
            res.status(202).json({message: "deleted succes"})
        }
        catch(err){
            serverErrorHandler(res, err)
        }
    },
    updateUser: async(req, res)=>{
        await res.status(201).json({message: "update user"})
    }
}
