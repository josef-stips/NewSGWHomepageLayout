const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", { fachContent: '../faecher/kunst.ejs', mainContent: '../views/partials/general/faecher.ejs', title: "Kunst | Städtisches Gymnasium Wermelskirchen" })
});


module.exports = router;