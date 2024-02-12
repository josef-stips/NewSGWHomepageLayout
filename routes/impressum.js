const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", { title: "Impressum | Städtisches Gymnasium Wermelskirchen", mainContent: "../views/partials/impressum.ejs" })
});

module.exports = router;