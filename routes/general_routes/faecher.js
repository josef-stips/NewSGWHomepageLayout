const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", { mainContent: '../views/partials/general/fächer.ejs', title: 'Fächer | Städtisches Gymnasium Wermelskirchen' })
});

module.exports = router;