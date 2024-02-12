const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", { title: "Kontakt | Städtisches Gymnasium Wermelskirchen", mainContent: "../views/partials/kontakt.ejs" })
});

module.exports = router;