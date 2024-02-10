const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", { mainContent: '../views/partials/LeitungVerwaltung.ejs', title: 'wahlpflichtfächer-89 | Städtisches Gymnasium Wermelskirchen' })
});

module.exports = router;