const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", {
        mainContent: '../views/partials/faecher/sozialwissenschaften-politik-0.ejs',
        title: "Sozialwissenschaften/ Politik | Städtisches Gymnasium Wermelskirchen"
    })
});


module.exports = router;