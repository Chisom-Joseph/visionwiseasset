const router = require("express").Router();
const path = require("path");

// get plans
router.get("/get-plans", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "public", "plans.json"));
});

module.exports = router;
