import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password"); //all users in database expect for user not equal(ne) to loggedInUserId so everyone except you

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("Error in getUsers controller ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
