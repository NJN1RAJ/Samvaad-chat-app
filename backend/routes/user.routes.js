import express from "express";
import checkAuth from "../middleware/checkAuth.js";
import { getUsers } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", checkAuth, getUsers);

export default router;
