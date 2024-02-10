const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", { mainContent: '../views/partials/LeitungVerwaltung.ejs', title: 'schülervertretung | Städtisches Gymnasium Wermelskirchen' })
});

module.exports = router;