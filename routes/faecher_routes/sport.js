const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", { fachContent: '../faecher/sport.ejs', mainContent: '../views/partials/general/faecher.ejs', title: "Sport | Städtisches Gymnasium Wermelskirchen" })
});


module.exports = router;