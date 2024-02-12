const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", { title: "Neues | Städtisches Gymnasium Wermelskirchen", mainContent: "../views/partials/Neues.ejs" })
});

module.exports = router;