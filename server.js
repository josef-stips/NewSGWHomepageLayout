const express = require("express");
const expressLayouts = require("express-ejs-layouts");

// set up
const app = express();
const PORT = process.env.PORT || 8080;

// static files
app.use(express.static("./public"));

// set templating engine
app.use(expressLayouts);
app.set('view engine', 'ejs');

// routes (URI's)
const LeitungVerwaltungRouter = require("./routes/leitungverwaltung.js");
const NodeRouter = require("./routes/node.js");
const LogInRouter = require("./routes/login.js");

app.use('/leitungverwaltung', LeitungVerwaltungRouter);
app.use('/node', NodeRouter);
app.use('/login', LogInRouter);

// all general routes
const GeneralRouteMappings = [
    { route: 'arbeitsgemeinschaften', router: 'arbeitsgemeinschaftenRouter' },
    { route: 'ehemaligenverein', router: 'ehemaligenvereinRouter' },
    { route: 'fachbuch', router: 'fachbuchRouter' },
    { route: 'faecher', router: 'fächerRouter' },
    { route: 'foerderverein', router: 'fördervereinRouter' },
    { route: 'haus-und-schulordnung', router: 'hausUndSchulordnungRouter' },
    { route: 'interessante-angebote-für-eltern', router: 'interessanteAngeboteFürElternRouter' },
    { route: 'kind-im-chat', router: 'kindImChatRouter' },
    { route: 'leitungverwaltung', router: 'leitungverwaltungRouter' },
    { route: 'mensa-cafeteria', router: 'mensaCafeteriaRouter' },
    { route: 'schulpflegschaft', router: 'schulpflegschaftRouter' },
    { route: 'schuelervertretung', router: 'schülervertretungRouter' },
    { route: 'termine-201718', router: 'termine201718Router' },
    { route: 'terminuebersicht', router: 'terminübersichtRouter' },
    { route: 'ueber-mittag', router: 'ueberMittagRouter' },
    { route: 'unterrichtszeiten-und-stundentafel', router: 'unterrichtszeitenUndStundentafelRouter' },
    { route: 'urkunden-und-auszeichnungen', router: 'urkundenUndAuszeichnungenRouter' },
    { route: 'wahlpflichtfaecher-89', router: 'wahlpflichtfächer89Router' }
];

// all faecher routes
const routeMappings = [
    { route: 'biologie', router: 'biologieRouter' },
    { route: 'biologiesport', router: 'biologiesportRouter' },
    { route: 'chemie', router: 'chemieRouter' },
    { route: 'deutsch', router: 'deutschRouter' },
    { route: 'deutschgeschichte', router: 'deutschgeschichteRouter' },
    { route: 'differenzierungskurs-biologie-chemie', router: 'differenzierungskursBiologieChemieRouter' },
    { route: 'englisch', router: 'englischRouter' },
    { route: 'erdkunde', router: 'erdkundeRouter' },
    { route: 'evangelische-religion', router: 'evangelischeReligionRouter' },
    { route: 'fachbereich-mathematik', router: 'fachbereichMathematikRouter' },
    { route: 'fachbereich-physik', router: 'fachbereichPhysikRouter' },
    { route: 'franzoesisch', router: 'französischRouter' },
    { route: 'geschichte', router: 'geschichteRouter' },
    { route: 'katholische-religion', router: 'katholischeReligionRouter' },
    { route: 'kunst', router: 'kunstRouter' },
    { route: 'kunstpolitik', router: 'kunstpolitikRouter' },
    { route: 'latein', router: 'lateinRouter' },
    { route: 'mathematikinformatik', router: 'mathematikInformatikRouter' },
    { route: 'musik', router: 'musikRouter' },
    { route: 'philosophie', router: 'philosophieRouter' },
    { route: 'physiktechnik', router: 'physikTechnikRouter' },
    { route: 'paedagogik', router: 'pädagogikRouter' },
    { route: 'sozialwissenschaften-politik-0', router: 'sozialwissenschaftenPolitik0Router' },
    { route: 'spanisch-0', router: 'spanisch0Router' },
    { route: 'spanisch', router: 'spanischRouter' },
    { route: 'sport', router: 'sportRouter' },
];

GeneralRouteMappings.forEach(({ route, router }) => {
    const routerName = require(`./routes/general_routes/${route}.js`);
    app.use(`/${route}`, routerName);
});

routeMappings.forEach(({ route, router }) => {
    const routerName = require(`./routes/faecher_routes/${route}.js`);
    app.use(`/${route}`, routerName);
});

// navigation
app.get('', (req, res) => {
    res.render("layout", { mainContent: '../views/partials/HomePageContent.ejs', title: "Städtisches Gymnasium Wermelskirchen" });
});

// set up 404 page
app.use("*", (req, res) => {
    res.status(404).render("404", { layout: "404", title: "404 | Städtisches Gymnasium Wermelskirchen" });
});

// listen to port
app.listen(PORT, () => {
    console.info(`server is running on port ${PORT}`);
});