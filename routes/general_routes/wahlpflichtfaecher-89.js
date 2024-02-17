const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", { fachContentWidth: "NullWidth", faecherIMG: "assets/sgw-official/Wahlpflichtfaecher.png", mainContent: '../views/partials/general/wahlpflichtfaecher-89.ejs', title: 'Wahlpflichtfächer | Städtisches Gymnasium Wermelskirchen' })
});

module.exports = router;