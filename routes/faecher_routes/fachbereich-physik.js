const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", { fachContent: '../faecher/fachbereich-physik.ejs', mainContent: '../views/partials/general/faecher.ejs', title: "Fachbereich Physik | Städtisches Gymnasium Wermelskirchen" })
});


module.exports = router;