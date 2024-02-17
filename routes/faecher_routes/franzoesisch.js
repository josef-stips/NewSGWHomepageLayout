const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", { fachContent: '../faecher/franzoesisch.ejs', mainContent: '../views/partials/general/faecher.ejs', title: "Französisch | Städtisches Gymnasium Wermelskirchen" })
});


module.exports = router;