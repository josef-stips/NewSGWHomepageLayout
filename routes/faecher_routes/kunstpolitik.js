const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", { mainContent: '../views/partials/LeitungVerwaltung.ejs', title: "Kunst/ Politik | Städtisches Gymnasium Wermelskirchen" })
});


module.exports = router;