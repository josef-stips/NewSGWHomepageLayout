const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", { fachContent: '../faecher/biologiesport.ejs', mainContent: '../views/partials/general/wahlpflichtfaecher-89.ejs', title: "Biologie/ Sport | Städtisches Gymnasium Wermelskirchen" })
});


module.exports = router;