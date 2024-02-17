const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", { fachContent: '../faecher/mathematikinformatik.ejs', mainContent: '../views/partials/general/wahlpflichtfaecher-89.ejs', title: "Mathematik/ Informatik | Städtisches Gymnasium Wermelskirchen" })
});


module.exports = router;