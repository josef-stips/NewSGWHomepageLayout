const express = require("express");
const router = express.Router();

// use the public folder also within this route, otherwise the inner routes of this route will search for directories that don't exist
router.use(express.static("./public"));

// all node inner routes
const NodeRoutes = [
    2139, 2147, 2150, 2152, 2153, 2157, 2162, 2163, 2164, 2165,
    2166, 2167, 2168, 2169, 2176, 2177, 2178, 2179, 2180, 2183,
    2197, 2206, 2218, 2221, 2236, 2249, 2250, 2263, 2298, 2424,
    2443, 2494, 2544, 2548, 2580, 2594, 2609, 2610, 2616, 2698, 2578, 2119, 2173
];

const NodeContent = [
    '../views/partials/nodes/node_2139.ejs',
    '../views/partials/nodes/node_2147.ejs',
    '../views/partials/nodes/node_2150.ejs',
    '../views/partials/nodes/node_2152.ejs',
    '../views/partials/nodes/node_2153.ejs',
    '../views/partials/nodes/node_2157.ejs',
    '../views/partials/nodes/node_2162.ejs',
    '../views/partials/nodes/node_2163.ejs',
    '../views/partials/nodes/node_2164.ejs',
    '../views/partials/nodes/node_2165.ejs',
    '../views/partials/nodes/node_2166.ejs',
    '../views/partials/nodes/node_2167.ejs',
    '../views/partials/nodes/node_2168.ejs',
    '../views/partials/nodes/node_2169.ejs',
    '../views/partials/nodes/node_2176.ejs',
    '../views/partials/nodes/node_2177.ejs',
    '../views/partials/nodes/node_2178.ejs',
    '../views/partials/nodes/node_2179.ejs',
    '../views/partials/nodes/node_2180.ejs',
    '../views/partials/nodes/node_2183.ejs',
    '../views/partials/nodes/node_2197.ejs',
    '../views/partials/nodes/node_2206.ejs',
    '../views/partials/nodes/node_2218.ejs',
    '../views/partials/nodes/node_2221.ejs',
    '../views/partials/nodes/node_2236.ejs',
    '../views/partials/nodes/node_2249.ejs',
    '../views/partials/nodes/node_2250.ejs',
    '../views/partials/nodes/node_2263.ejs',
    '../views/partials/nodes/node_2298.ejs',
    '../views/partials/nodes/node_2424.ejs',
    '../views/partials/nodes/node_2443.ejs',
    '../views/partials/nodes/node_2494.ejs',
    '../views/partials/nodes/node_2544.ejs',
    '../views/partials/nodes/node_2548.ejs',
    '../views/partials/nodes/node_2580.ejs',
    '../views/partials/nodes/node_2594.ejs',
    '../views/partials/nodes/node_2609.ejs',
    '../views/partials/nodes/node_2610.ejs',
    '../views/partials/nodes/node_2616.ejs',
    '../views/partials/nodes/node_2698.ejs',
    '../views/partials/nodes/node_2578.ejs',
    '../views/partials/nodes/node_2119.ejs',
    '../views/partials/nodes/node_2173.ejs',
];

// corresponding titles
const NodeTitles = [
    '..\\views\\partials\\nodes\\node_2139.ejs',
    '..\\views\\partials\\nodes\\node_2147.ejs',
    'Unsere Schule',
    'Leitbild',
    'Schulprogramm',
    'Gestaltung der einzelnen Schulstufen',
    'Strukturierung von Lernprozessen',
    'Leistungsbewertung',
    'Beratung und pädagogische Betreuung',
    'Studien- und Berufsorientierung',
    'Gestaltung des Schullebens',
    'Fahrtenprogramm',
    'Koorperationen',
    'Förderkonzept für die Sekundarstufe I',
    '..\\views\\partials\\nodes\\node_2176.ejs',
    'Methodenkonzept für die SI und SII',
    'Hausaufgabenkonzept für die Sek I',
    'Medienkonzept',
    'Schwerpunkte der Fachbereiche',
    'Hilfe im Schulumfeld',
    '..\\views\\partials\\nodes\\node_2197.ejs',
    '..\\views\\partials\\nodes\\node_2206.ejs',
    'Patenkinder unserer Schule',
    'Unterrichtsorganisation',
    'Pausenregelungen',
    'Anmeldung',
    'Anmeldung Kl. 5',
    '..\\views\\partials\\nodes\\node_2263.ejs',
    '..\\views\\partials\\nodes\\node_2298.ejs',
    '..\\views\\partials\\nodes\\node_2424.ejs',
    'Anmeldung Kl. 7-10',
    '..\\views\\partials\\nodes\\node_2494.ejs',
    '..\\views\\partials\\nodes\\node_2544.ejs',
    '..\\views\\partials\\nodes\\node_2548.ejs',
    'Anmeldung Kl. 6',
    '..\\views\\partials\\nodes\\node_2594.ejs',
    'Mathematik',
    '..\\views\\partials\\nodes\\node_2610.ejs',
    'Anmeldung EF',
    '..\\views\\partials\\nodes\\node_2698.ejs',
    'Digitale Selbstverteidigung',
    'Französisch',
    'Forder- bzw. Förderunterricht'
];

// main route which just returns the main page
router.get('/', (req, res) => {
    res.render("layout", { mainContent: '../views/partials/HomePageContent.ejs', title: "Node | Städtisches Gymnasium Wermelskirchen" });
});

// create each route with its content
NodeRoutes.forEach((route, i) => {
    if (route !== 2119 && route !== 2609) {

        router.get(`/${route}`, (req, res) => {
            res.render("layout", {
                title: `${NodeTitles[i]} | Städtisches Gymnasium Wermelskirchen`,
                mainContent: NodeContent[i]
            });
        });

    } else if (route === 2119) { // französisches Wahlpflichtfach

        router.get(`/${route}`, (req, res) => {
            res.render("layout", {
                title: `${NodeTitles[i]} | Städtisches Gymnasium Wermelskirchen`,
                mainContent: '../views/partials/general/wahlpflichtfaecher-89.ejs',
                fachContent: '../nodes/node_2119.ejs',
            });
        });

    } else if (route === 2609) { // mathematik fach

        router.get(`/${route}`, (req, res) => {
            res.render("layout", {
                title: `${NodeTitles[i]} | Städtisches Gymnasium Wermelskirchen`,
                mainContent: '../views/partials/general/faecher.ejs',
                fachContent: '../nodes/node_2609.ejs',
            });
        });

    };
});

module.exports = router;