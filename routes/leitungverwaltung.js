const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", { mainContent: '../views/partials/general/LeitungVerwaltung.ejs', title: "Leitung/Verwaltung | Städtisches Gymnasium Wermelskirchen" })
});


module.exports = router;