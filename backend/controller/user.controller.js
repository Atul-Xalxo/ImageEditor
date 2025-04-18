import userModel from "../models/user.model.js";
import FollowModel from "../models/follow.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const getUser = async (req, res) => {
  const { username } = req.params;

  const user = await userModel.findOne({ username });

  const { hashedPassword, ...detailsWithoutPassword } = user.toObject();

  const followerCount = await FollowModel.countDocuments({
    following: user._id,
  });

  const followingCount =await FollowModel.countDocuments({
    follower: user._id,
  });

  const token = req.cookies.token;

  if (!token) {
    res.status(200).json({
      ...detailsWithoutPassword,
      followerCount,
      followingCount,
      isFollowing: false,
    });
  } else {
    jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
      if (!err) {
        const isExists = await FollowModel.exists({
          follower: payload.userId,
          following: user._id,
        });
        res.status(200).json({
          ...detailsWithoutPassword,
          followerCount,
          followingCount,
          isFollowing: isExists ? true : false,
        });
      }
    });
  }


};

const registerUser = async (req, res) => {
  const { username, displayName, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required !!" });
  }

  const newHashPassword = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    username,
    displayName,
    email,
    hashedPassword: newHashPassword,
  });

  //JWT

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY);

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7 * 1000,
  });

  const { hashedPassword, ...detailsWithoutPassword } = user.toObject();

  res.status(201).json(detailsWithoutPassword);
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ message: "All fields are required !!" });

  const user = await userModel.findOne({ email });

  if (!user) return res.status(404).json({ message: "User not found !!" });

  const isPasswordCorrect = await bcrypt.compare(password, user.hashedPassword);
  if (!isPasswordCorrect)
    return res.status(400).json({ message: "Invalid email or password !" });

  //JWT

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY);

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7 * 1000,
  });

  const { hashedPassword, ...detailsWithoutPassword } = user.toObject();

  res.status(200).json(detailsWithoutPassword);
};

const logoutUser = async (req, res) => {
  res.clearCookie("token");

  res.status(200).json({ message: "Logout successfull" });
};

export const followUser = async (req, res) => {
  const { username } = req.params;
  const user = await userModel.findOne({username});

  const isFollowing = await FollowModel.exists({
    follower: req.userId,
    following: user._id,
  });
  if (isFollowing) {
    await FollowModel.deleteOne({ follower: req.userId, following: user._id });
  } else {
    await FollowModel.create({ follower: req.userId, following: user._id });
  }

  res.status(200).json({ message: "Successful" });
};

export { getUser, registerUser, loginUser, logoutUser };
