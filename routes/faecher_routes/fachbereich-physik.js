const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", {
        mainContent: '../views/partials/faecher/fachbereich-physik.ejs',
        title: "Fachbereich Physik | Städtisches Gymnasium Wermelskirchen"
    })
});


module.exports = router;