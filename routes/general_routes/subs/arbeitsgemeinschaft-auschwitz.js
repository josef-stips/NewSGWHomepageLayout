const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", { mainContent: '../views/partials/general/subs/arbeitsgemeinschaft-auschwitz.ejs', title: 'Arbeitsgemeinschaft Ausschwitz | Städtisches Gymnasium Wermelskirchen' })
});

module.exports = router;