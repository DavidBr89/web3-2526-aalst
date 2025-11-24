// const express = require("express");
import express, {
  type Request,
  type Response,
  type NextFunction,
} from "express";
const router = express.Router();

/* GET home page. */
router.get("/", function (req: Request, res: Response, next: NextFunction) {
  res.render("index", { title: "Express" });
});

export default router;

// module.exports = router;
