const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", { fachContent: '../faecher/fachbereich-mathematik.ejs', mainContent: '../views/partials/general/faecher.ejs', title: "Fachbereich Mathematik | Städtisches Gymnasium Wermelskirchen" })
});


module.exports = router;