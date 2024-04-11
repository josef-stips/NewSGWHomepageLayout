const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", {
        mainContent: '../views/partials/faecher/differenzierungskurs-biologie-chemie.ejs',
        title: "Diff. Biologie/ Chemie | Städtisches Gymnasium Wermelskirchen"
    })
});


module.exports = router;