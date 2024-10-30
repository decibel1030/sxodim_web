import mongoose from "mongoose";

const db_uri = "mongodb://localhost:27017/sxodim";
export const db = mongoose.connect(db_uri).then(
    ()=>{
        console.log(`success conection to ${db_uri}`);
    }
).catch((err)=>{
    console.error(err);
})