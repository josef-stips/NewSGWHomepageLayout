const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", { mainContent: '../views/partials/general/sekundarstufe-i.ejs', title: 'Sekundarstufe I | Städtisches Gymnasium Wermelskirchen' })
});

module.exports = router;