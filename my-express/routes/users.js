const express = require("express");
const authMiddleware = require("../middlewares/auth_middleware");
const adminMiddleware = require("../middlewares/admin_middleware");
const loggerMiddleware = require("../middlewares/logger_middleware");
const router = express.Router();

router.use(authMiddleware);
router.use(loggerMiddleware);

/* GET users listing. */
router.get("/", function (req, res, next) {
  // res.status(204);
  res.send(req.myUserId);
  // res.json({ id: 1, name: "Web 3" });
});

router.post("/", (req, res) => {
  const data = req.body;

  res.json(data);
});

router.get("/info", (req, res) => {
  res.sendStatus(400);
});

router.get("/admin", [adminMiddleware, loggerMiddleware], (req, res, next) => {
  console.log(req.myUserId);

  res.send("ADMIN PAGE");
});

router.get("/:userId", (req, res) => {
  const params = req.params;

  res.send(params.userId + req.myUserId);
});

router.all("/", (req, res) => {
  res.status(405).json({ message: "Niet toegestaan" });
});

module.exports = router;
