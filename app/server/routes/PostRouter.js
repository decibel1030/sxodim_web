import { Router } from "express";
import { verifyToken } from "../utils/auth.js";
import { postController } from "../controllers/postController.js";

const { createPost, deletePost, updatePost, getAllPosts, getPostById } =
  postController;
const PostRouter = Router();

// PostRouter.get("/", verifyToken ,getAllPosts);
// PostRouter.post("/", verifyToken, createPost);
// PostRouter.delete("/", verifyToken, deletePost);
// PostRouter.put("/", verifyToken ,updatePost);

// for testing
PostRouter.get("/", (req, res)=>{
  if(req.query.id){
    return getPostById(req, res)
  }
  return getAllPosts(req, res)
});
PostRouter.post("/", createPost);
PostRouter.delete("/", deletePost);
PostRouter.put("/", updatePost);

export default PostRouter