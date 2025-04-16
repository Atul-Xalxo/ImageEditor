import express from "express";
// import user from "..//models/user.model.js";
// import bcrypt from "bcryptjs";
import {getUser, loginUser, logoutUser, registerUser} from "../controller/user.controller.js";

const router = express.Router();


//CREATE USER

// router.post("/create", async (req, res) => {
//   const userInfo = req.body;

//   const hashedPassword = await bcrypt.hash(req.body.password, 10);

//   const newUser = { ...userInfo, hashedPassword };

//   await user.create(newUser);

//   console.log(userInfo);
//   return res.json("user created");
// });

//FETCH USER

// router.get('/fetch',async(req,res)=>{
//   const users = await user.find({ userame: "me" });
//   return res.json(users)
// })

router.get("/:username", getUser);
router.post("/auth/register",registerUser);
router.post("/auth/login",loginUser);
router.post("/auth/logout",logoutUser);

export default router;
