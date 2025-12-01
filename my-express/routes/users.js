const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/", (req, res) => {
  const data = req.body;

  res.json(data);
});

router.get("/info", (req, res) => {
  res.sendStatus(400);
});

router.get("/:userId", (req, res) => {
  const params = req.params;

  res.send(params.userId);
});

router.all("/", (req, res) => {
  res.status(405).json({ message: "Niet toegestaan" });
});

module.exports = router;
