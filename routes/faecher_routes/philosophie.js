const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", { fachContent: '../faecher/philosophie.ejs', mainContent: '../views/partials/general/faecher.ejs', title: "Philosophie | Städtisches Gymnasium Wermelskirchen" })
});


module.exports = router;