import express from "express";
import userController from "../controller/user-controller.js";

const publicRouter = new express.Router()



publicRouter.post("/login", userController.login)

publicRouter.get("/user", (req, res)=>{
    res.json({
        data: "Halo"
    })
})

publicRouter.post("/send_email", userController.send_email)
publicRouter.post("/send_code", userController.send_code)
publicRouter.post("/send_repass", userController.send_repass)
export {publicRouter}