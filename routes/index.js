const router = require("express").Router();
const path = require("path");

router.use("/api", require("./api"));

// get index
router.get("/", (req, res) => {
  res.render("index");
});

// get pricing
router.get("/pricing", (req, res) => {
  res.render("pricing");
});

// get about
router.get("/about", (req, res) => {
  res.render("about");
});

// get contacts
router.get("/contacts", (req, res) => {
  res.render("contacts");
});

// get faqs
router.get("/faqs", (req, res) => {
  res.render("faqs");
});

// get terms
router.get("/terms", (req, res) => {
  res.render("terms");
});

// get features
router.get("/features", (req, res) => {
  res.render("features");
});

module.exports = router;
