import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const checkAuth = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ error: "Unauthorized - no token found" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ error: "Invalid token" });
    } // decodes the info from which the token was created (payload is decoded) in our case userId is decoded.

    const user = await User.findById(decoded.userId).select("-password"); //here we use the decoded userId.

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("Error in check auth middleware ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default checkAuth;
