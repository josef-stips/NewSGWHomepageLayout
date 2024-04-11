const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", {
        mainContent: '../views/partials/faecher/englisch.ejs',
        title: "Englisch | Städtisches Gymnasium Wermelskirchen"
    })
});


module.exports = router;