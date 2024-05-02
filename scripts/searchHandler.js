const fs = require('fs');
const path = require('path');
const { compareTwoStrings } = require('string-similarity');

// Funktion zum Extrahieren von Informationen aus Routen
function extractRouteInfo(file, routeFile) {
    const content = fs.readFileSync(routeFile, 'utf-8');
    // Hier implementierst du die Logik, um relevante Informationen aus der Datei zu extrahieren
    // Zum Beispiel könntest du h2-Titel extrahieren
    return [file]; // Beispielwerte
};

// Funktion zur Berechnung der Textähnlichkeit
function calculateSimilarity(query, routeInfo) {
    console.log(query, routeInfo);

    // Hier könntest du eine Textähnlichkeitsmetrik wie Levenshtein-Distanz verwenden
    // Du könntest auch andere Metriken verwenden, die besser zu deinen Anforderungen passen
    return compareTwoStrings(query, routeInfo[0]);
};

// Funktion zur Durchführung der Suche
function search(query) {
    const routesFolder = path.join(__dirname, "../views/partials/faecher");
    let results = [];

    // Lese alle Dateien im angegebenen Ordner aus
    const files = fs.readdirSync(routesFolder);

    console.log(files);

    // Iteriere über alle Dateien im Ordner
    files.forEach(file => {
        let fileName = file.replace(".ejs", "");

        // Konstruiere den vollständigen Pfad zur Datei
        const routeFile = path.join(routesFolder, file);
        // Extrahiere Informationen aus der Datei
        const routeInfo = extractRouteInfo(fileName, routeFile);
        // Berechne die Ähnlichkeit und füge das Ergebnis hinzu
        const similarity = calculateSimilarity(query, routeInfo);
        results.push({ route: fileName, similarity });
    });

    console.log(results);

    // Sortiere die Ergebnisse nach Ähnlichkeit in aufsteigender Reihenfolge
    results = results.filter(a => a.similarity > 0.20);
    results.sort((a, b) => b.similarity - a.similarity);

    return results;
};

module.exports = {
    search
};