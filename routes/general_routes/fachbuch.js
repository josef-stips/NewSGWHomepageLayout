const express = require("express");
const router = express.Router();

router.use(express.static("./public"));

router.get("/literatur", (req, res) => {
    res.render("layout", { fachContent: '../general/fachbuch_literatur.ejs', mainContent: '../views/partials/general/faecher.ejs', title: "Literatur | Städtisches Gymnasium Wermelskirchen" })
});


module.exports = router;