const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", { mainContent: '../views/partials/general/haus-und-schulordnung.ejs', title: 'Haus und Schulordnung | Städtisches Gymnasium Wermelskirchen' })
});

module.exports = router;