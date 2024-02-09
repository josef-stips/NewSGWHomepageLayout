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
    res.render("layout", { mainContent: '../views/partials/HomePageContent.ejs' });
});

// listen to port
app.listen(PORT, () => {
    console.info(`server is running on port ${PORT}`);
});