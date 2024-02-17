const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", { fachContent: '../faecher/spanisch.ejs', mainContent: '../views/partials/general/faecher.ejs', title: "Spanisch | Städtisches Gymnasium Wermelskirchen" })
});


module.exports = router;