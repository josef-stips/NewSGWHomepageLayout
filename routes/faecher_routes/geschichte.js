const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", { fachContent: '../faecher/geschichte.ejs', mainContent: '../views/partials/general/faecher.ejs', title: "Geschichte | Städtisches Gymnasium Wermelskirchen" })
});


module.exports = router;