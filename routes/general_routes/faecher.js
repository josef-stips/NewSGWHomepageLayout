const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", {
        fachContentWidth: "NullWidth",
        faecherIMG: "assets/sgw-official/Faecher.png",
        mainContent: '../views/partials/general/faecher.ejs',
        title: 'Fächer | Städtisches Gymnasium Wermelskirchen',
        alternativeMainPageStyle: "alternativeMainPageStyle"
    })
});

module.exports = router;