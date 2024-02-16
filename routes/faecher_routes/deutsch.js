const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", { fachContent: '../faecher/deutsch.ejs', mainContent: '../views/partials/general/faecher.ejs', title: "Deutsch | Städtisches Gymnasium Wermelskirchen" })
});


module.exports = router;