const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", {
        mainContent: '../views/partials/faecher/kunstpolitik.ejs',
        title: "Kunst/ Politik | Städtisches Gymnasium Wermelskirchen"
    })
});


module.exports = router;