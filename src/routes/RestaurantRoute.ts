import express from "express";
import { param } from "express-validator";
import { getRestaurant, searchRestaurant } from "../controllers/RestaurantController";


const router = express.Router();

router.get(
  "/:restaurantId",
  param("restaurantId")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("RestaurantId paramenter must be a valid string"),
  getRestaurant
);

router.get(
  "/search/:city",
  param("city")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("City paramenter must be a valid string"),
  searchRestaurant
);

export default router;
