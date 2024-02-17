const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", { fachContent: '../faecher/erdkunde.ejs', mainContent: '../views/partials/general/faecher.ejs', title: "Erdkunde | Städtisches Gymnasium Wermelskirchen" })
});


module.exports = router;