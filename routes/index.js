const router = require("express").Router();
const path = require("path");

router.use("/api", require("./api"));

// get index
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "index.html"));
});

// get pricing
router.get("/pricing", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "pricing.html"));
});

// get about
router.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "about.html"));
});

// get contacts
router.get("/contacts", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "contacts.html"));
});

// get faqs
router.get("/faqs", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "faqs.html"));
});

// get terms
router.get("/terms", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "terms.html"));
});

// get features
router.get("/features", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "features.html"));
});

module.exports = router;
