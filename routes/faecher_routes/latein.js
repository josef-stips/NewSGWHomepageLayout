const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", {
        mainContent: '../views/partials/faecher/latein.ejs',
        title: "Latein | Städtisches Gymnasium Wermelskirchen"
    })
});


module.exports = router;