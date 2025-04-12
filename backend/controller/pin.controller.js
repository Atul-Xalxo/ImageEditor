import Pin from "../models/pin.model.js";
export const getPins = async (req, res) => {
  try {
    const pageNumber = Number(req.query.cursor) || 0;
    const search = req.query.search || "";
    const userId = req.query.userId || "" 
    const LIMIT = 21;
    const pins = await Pin.find(
      search
        ? {
            $or: [
              { title: { $regex: search, $options: "i" } },
              { tags: { $in: [search] } },
            ],
          }
        : userId ? {user:userId}:{}
    )
      .limit(LIMIT)
      .skip(pageNumber * LIMIT);

    const hasNextPage = pins.length === LIMIT;

    //await new Promise((resolve) => setTimeout(resolve, 1000));

    res
      .status(200)
      .json({ pins, nextCursor: hasNextPage ? pageNumber + 1 : null });
  } catch (error) {
    console.log("Error fetching pins", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getPin = async (req, res) => {
  try {
    const pinId = req.params.id;
    const pin = await Pin.findById(pinId).populate(
      "user",
      "username userImage displayName"
    );
    if (!pin) {
      return res.status(404).json({ message: "Pin not found" });
    }
    res.status(200).json(pin);
  } catch (error) {
    console.log("Error fetching pin", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
