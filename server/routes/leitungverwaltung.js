const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index", { mainContent: '../views/partials/LeitungVerwaltung.ejs', title: "Leitung/Verwaltung | Städtisches Gymnasium Wermelskirchen" })
});


module.exports = router;