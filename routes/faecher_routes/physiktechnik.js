const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", { fachContent: '../faecher/physiktechnik.ejs', mainContent: '../views/partials/general/wahlpflichtfaecher-89.ejs', title: "Physik/ Technik | Städtisches Gymnasium Wermelskirchen" })
});


module.exports = router;