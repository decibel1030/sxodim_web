import { EventModel } from "../models/models.js";
import { serverErrorHandler } from "../utils/handlers.js";
import { checkValidValue } from "../utils/check.js";

export const postController = {
  getAllPosts: async (req, res) => {
    try {
      const list = await EventModel.find();
      res.status(201).json({ list });
    } catch (err) {
      serverErrorHandler(res, err);
    }
  },
  getPostById: async (req, res) => {
    try {
      const postId = req.query.id;
      const post = await EventModel.findById(postId);
      if (!post)
        return res.status(404).json({ error: "Такое событие не найдено" });
      else return res.status(202).json({ post });
    } catch (err) {
      serverErrorHandler(res, err);
    }
  },
  deletePost: async (req, res) => {
    try {
      const id = req.query.id;
      if(!id || id.length < 12){
        return res.status(404).json({error: "not valid id"})
      }
      const findPost =  await EventModel.findById(id);
      if(!findPost){
        return res.status(404).json({message: "not found"})
      }
      else{
        await EventModel.deleteOne({ _id: id });
        return res.status(201).json({message: "Удалено"})
      }
    } catch (err) {
      serverErrorHandler(res, err);
    }
  },
  createPost: async (req, res) => {
    try {
      checkValidValue(
        [
          "name",
          "description",
          "organizer",
          "address",
          "entrance",
          "eventDate",
        ],
        req,
        res
      );
      const newPost = new EventModel({
        ...req.body,
        guests: req.body.guests || [],
      });
      const savedPost = await newPost.save();
      res.status(201).json({ savedPost });
    } catch (err) {
      serverErrorHandler(res, err);
    }
  },
  updatePost: async (req, res) => {
    res.status(200).json({ message: "Изменить" });
  },
};
