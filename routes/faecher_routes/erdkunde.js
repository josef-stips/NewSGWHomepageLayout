const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", {
        mainContent: '../views/partials/faecher/erdkunde.ejs',
        title: "Erdkunde | Städtisches Gymnasium Wermelskirchen"
    })
});


module.exports = router;