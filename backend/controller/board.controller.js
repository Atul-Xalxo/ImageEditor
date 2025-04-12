import Boards from "../models/board.model.js";
import pinModel from "../models/pin.model.js";

export const getUserBoards = async (req, res) => {
  const { userId } = req.params;

  const boards = await Boards.find({ user: userId });

  //can use mongoose aggregate function to get the first pin of each board

  const boardsWithPinDetails = await Promise.all(
    boards.map(async (board) => {
      const pinCount = await pinModel.countDocuments({ board: board._id });
      const firstPin = await pinModel.findOne({board:board._id})

      return {
        ...board.toObject(),
        pinCount,
        firstPin,
      };
    })
  );
  res.status(200).json(boardsWithPinDetails)
};
