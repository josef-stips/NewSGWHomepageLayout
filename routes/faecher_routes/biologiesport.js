const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", {
        mainContent: '../views/partials/faecher/biologiesport.ejs',
        title: "Biologie/ Sport | Städtisches Gymnasium Wermelskirchen"
    })
});


module.exports = router;