const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", {
        mainContent: '../views/partials/faecher/philosophie.ejs',
        title: "Philosophie | Städtisches Gymnasium Wermelskirchen"
    })
});


module.exports = router;