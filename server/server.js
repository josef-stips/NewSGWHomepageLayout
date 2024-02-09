const express = require("express");
const expressLayouts = require("express-ejs-layouts");

// set up
const app = express();
const PORT = process.env.PORT || 8080;

// static files
app.use(express.static("../public"));

// set templating engine
app.use(expressLayouts);
app.set('view engine', 'ejs');

// routes (URI's)
const LeitungVerwaltungRouter = require("./routes/leitungverwaltung.js");

app.use('/leitungverwaltung', LeitungVerwaltungRouter);

// navigation
app.get('', (req, res) => {
    res.render("layout", { mainContent: '../views/partials/HomePageContent.ejs', title: "Städtisches Gymnasium Wermelskirchen" });
});

// set up 404 page
app.use((req, res) => {
    res.status(404).render("404", { layout: "404", title: "404 | Städtisches Gymnasium Wermelskirchen" });
});

// listen to port
app.listen(PORT, () => {
    console.info(`server is running on port ${PORT}`);
});