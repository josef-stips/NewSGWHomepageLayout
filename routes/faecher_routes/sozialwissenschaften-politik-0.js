const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", { fachContent: '../faecher/sozialwissenschaften-politik-0.ejs', mainContent: '../views/partials/general/wahlpflichtfaecher-89.ejs', title: "Sozialwissenschaften/ Politik | Städtisches Gymnasium Wermelskirchen" })
});


module.exports = router;