const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", { mainContent: '../views/partials/general/faecher.ejs', fachContent: '../faecher/englisch.ejs', title: "Englisch | Städtisches Gymnasium Wermelskirchen" })
});


module.exports = router;