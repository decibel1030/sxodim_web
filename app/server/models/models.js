import { model, Model } from "mongoose";

import { 
    userSchema,
    comment, 
    event
 } from "./schema.js";

const UserModel = model("User", userSchema)
const CommentModel = model("Comment", comment)
const EventModel = model("Event", event)

export {
    UserModel, 
    CommentModel, 
    EventModel
}
