const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", { fachContent: '../faecher/evangelische-religion.ejs', mainContent: '../views/partials/general/faecher.ejs', title: "Evangelische Religion | Städtisches Gymnasium Wermelskirchen" })
});


module.exports = router;