const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("layout", { title: "Anmeldung | Städtisches Gymnasium Wermelskirchen", mainContent: "../views/login", mainContent: "../views/login" });
});

// user tries to log in
router.post("/", (req, res) => {
    res.redirect("/");
});

module.exports = router;