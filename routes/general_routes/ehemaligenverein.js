const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", { mainContent: '../views/partials/general/ehemaligenverein.ejs', title: 'Ehemaligenverein | Städtisches Gymnasium Wermelskirchen' })
});

module.exports = router;