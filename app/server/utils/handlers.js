const createUserErrorHandler = (res, err) =>{
    res.status(501).json({error: "Internal server error on create new user"})
    console.error(err);
}
const serverErrorHandler= (res, err) =>{
    console.error(err);
    res.status(500).json({error: "Server iternal error"})
}

export  {createUserErrorHandler, serverErrorHandler}