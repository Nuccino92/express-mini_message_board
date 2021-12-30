const messages = [
  {
    text: "Hi there!",
    user: "Anthony",
    added: new Date(),
  },
  { text: "Hello World!", user: "Charles", added: new Date() },
];

var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.post("/new", (req, res, next) => {
  text = req.body.text;
  user = req.body.user;
  added = req.body.added;

  messages.push({ text: text, user: user, added: added });
  res.redirect("/");
});

module.exports = router;
