const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", { fachContent: '../faecher/chemie.ejs', mainContent: '../views/partials/general/faecher.ejs', title: "Chemie | Städtisches Gymnasium Wermelskirchen" })
});


module.exports = router;