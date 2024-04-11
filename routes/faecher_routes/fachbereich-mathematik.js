const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", {
        mainContent: '../views/partials/faecher/fachbereich-mathematik.ejs',
        title: "Fachbereich Mathematik | Städtisches Gymnasium Wermelskirchen"
    })
});


module.exports = router;