const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", {
        mainContent: '../views/partials/faecher/biologie.ejs',
        title: "Biologie | Städtisches Gymnasium Wermelskirchen"
    })
});


module.exports = router;