const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", { fachContent: '../faecher/paedagogik.ejs', mainContent: '../views/partials/general/faecher.ejs', title: "Pädagogik | Städtisches Gymnasium Wermelskirchen" })
});


module.exports = router;