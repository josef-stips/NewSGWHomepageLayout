const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", {
        mainContent: '../views/partials/faecher/spanisch-0.ejs',
        title: "Spanisch | Städtisches Gymnasium Wermelskirchen"
    })
});


module.exports = router;