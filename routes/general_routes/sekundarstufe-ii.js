const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", { mainContent: '../views/partials/general/sekundarstufe-ii.ejs', title: 'Sekundarstufe II | Städtisches Gymnasium Wermelskirchen' })
});

module.exports = router;