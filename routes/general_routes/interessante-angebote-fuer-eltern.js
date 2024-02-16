const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", { mainContent: '../views/partials/general/interessante-angebote-fuer-eltern.ejs', title: 'Interessante Angebote für Eltern | Städtisches Gymnasium Wermelskirchen' })
});

module.exports = router;