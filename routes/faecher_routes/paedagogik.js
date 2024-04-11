const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", {
        mainContent: '../views/partials/faecher/paedagogik.ejs',
        title: "Pädagogik | Städtisches Gymnasium Wermelskirchen"
    })
});


module.exports = router;