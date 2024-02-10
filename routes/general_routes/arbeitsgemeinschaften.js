const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", { mainContent: '../views/partials/general/arbeitsgemeinschaften.ejs', title: 'arbeitsgemeinschaften | Städtisches Gymnasium Wermelskirchen' })
});

module.exports = router;