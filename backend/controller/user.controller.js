import userModel from "../models/user.model.js";

const getUser = async(req, res) => {
 const {username} = req.params;

 const user = await userModel.findOne({username});

 const {hashedPassword, ...detailsWithoutPassword} = user.toObject()

 res.status(200).json(detailsWithoutPassword)

};
export {getUser};
