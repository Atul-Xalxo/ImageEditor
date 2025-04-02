import express from "express";
import { test } from "../controller/user.controller.js";
import User from "..//models/user.model.js";
import bcrypt from "bcryptjs";

const router = express.Router();


//CREATE USER

router.post("/create", async (req, res) => {
  const userInfo = req.body;

  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const newUser = { ...userInfo, hashedPassword };

  await User.create(newUser);

  console.log(userInfo);
  return res.json("user created");
});

//FETCH USER

router.get('/fetch',async(req,res)=>{
  const users = await User.find({ userame: "me" });
  return res.json(users)
})

router.get("/test", test);

export default router;
