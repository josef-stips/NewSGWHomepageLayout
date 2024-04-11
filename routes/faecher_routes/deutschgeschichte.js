const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", {
        mainContent: '../views/partials/faecher/deutschgeschichte.ejs',
        title: "Deutsch/ Geschichte | Städtisches Gymnasium Wermelskirchen"
    })
});


module.exports = router;