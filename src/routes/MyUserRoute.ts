import express from "express";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { createCurrentUser, getCurrentUser, updateCurrentUser } from "../controllers/MyUserController";
import { validateMyUserRequest } from "../middleware/validation";



const router = express.Router();

// /api/my/user
router.get("/", jwtCheck, jwtParse, getCurrentUser);
router.post("/", jwtCheck, createCurrentUser);
router.put(
  "/",
  jwtCheck,
  jwtParse,
  validateMyUserRequest,
  updateCurrentUser
);

export default router;
