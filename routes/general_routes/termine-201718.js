const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", { mainContent: '../views/partials/LeitungVerwaltung.ejs', title: 'termine-201718 | Städtisches Gymnasium Wermelskirchen' })
});

module.exports = router;