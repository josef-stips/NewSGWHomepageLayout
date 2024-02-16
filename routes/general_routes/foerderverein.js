const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", { mainContent: '../views/partials/general/foerderverein.ejs', title: 'Förderverein | Städtisches Gymnasium Wermelskirchen' })
});

module.exports = router;