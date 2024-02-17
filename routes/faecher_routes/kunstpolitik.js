const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", { fachContent: '../faecher/kunstpolitik.ejs', mainContent: '../views/partials/general/wahlpflichtfaecher-89.ejs', title: "Kunst/ Politik | Städtisches Gymnasium Wermelskirchen" })
});


module.exports = router;