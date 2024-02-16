const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", { mainContent: '../views/partials/general/kind-im-chat.ejs', title: 'Kind-im-Chat | Städtisches Gymnasium Wermelskirchen' })
});

module.exports = router;