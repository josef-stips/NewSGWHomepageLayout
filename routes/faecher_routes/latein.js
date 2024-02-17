const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", { fachContent: '../faecher/latein.ejs', mainContent: '../views/partials/general/faecher.ejs', title: "Latein | Städtisches Gymnasium Wermelskirchen" })
});


module.exports = router;