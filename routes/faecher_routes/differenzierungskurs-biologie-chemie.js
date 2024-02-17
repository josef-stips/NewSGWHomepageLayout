const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", {
        fachContent: '../faecher/differenzierungskurs-biologie-chemie.ejs',
        mainContent: '../views/partials/general/wahlpflichtfaecher-89.ejs',
        title: "Diff. Biologie/ Chemie | Städtisches Gymnasium Wermelskirchen"
    })
});


module.exports = router;