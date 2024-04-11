const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", {
        mainContent: '../views/partials/faecher/spanisch.ejs',
        title: "Spanisch | Städtisches Gymnasium Wermelskirchen"
    })
});


module.exports = router;