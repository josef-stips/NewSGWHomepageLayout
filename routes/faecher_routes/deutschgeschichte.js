const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", { fachContent: '../faecher/deutschgeschichte.ejs', mainContent: '../views/partials/general/wahlpflichtfaecher-89.ejs', title: "Deutsch/ Geschichte | Städtisches Gymnasium Wermelskirchen" })
});


module.exports = router;