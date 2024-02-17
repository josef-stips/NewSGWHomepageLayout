const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", { fachContent: '../faecher/musik.ejs', mainContent: '../views/partials/general/faecher.ejs', title: "Musik | Städtisches Gymnasium Wermelskirchen" })
});


module.exports = router;