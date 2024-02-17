const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", { fachContent: '../faecher/biologie.ejs', mainContent: '../views/partials/general/faecher.ejs', title: "Biologie | Städtisches Gymnasium Wermelskirchen" })
});


module.exports = router;