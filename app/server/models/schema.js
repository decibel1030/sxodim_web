import { request } from "express";
import { Schema } from "mongoose";

const userSchema = new Schema({
    name: {type: String, required: true, max: 100},
    password: {type: String, required: true, min: 8, max: 200},
    userIcon: {type: String, default: "", required: false},
    birthday: {type: Date, required: true},
    address: {type: String}
}, {timestamps: true, versionKey: false})

const comment = new Schema({
    text: {type: String, required: true, max: 5000},
    author: {type: Schema.ObjectId, ref: "User"},
}, {timestamps: true})

const event = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true, },
    organizer: {type: String, required: true},
    address: {type: String, required: true},
    entrance: {
        type: String, 
        enum: [
            "Платный", 
            "Бесплатный",
            "По приглашению"
        ],
        required: true
    },
    eventDate: {type: Date, required: true },
    guests: {type: Array},
    comments: []
}, {timestamps: true})

export {
    userSchema, 
    comment, 
    event
}