const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", {
        mainContent: '../views/partials/faecher/physiktechnik.ejs',
        title: "Physik/ Technik | Städtisches Gymnasium Wermelskirchen"
    })
});


module.exports = router;