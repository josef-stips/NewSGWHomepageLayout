const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", { fachContent: '../faecher/sozialwissenschaften-politik-0.ejs', mainContent: '../views/partials/general/faecher.ejs', title: "Sozialwissenschaften/ Politik | Städtisches Gymnasium Wermelskirchen" })
});


module.exports = router;