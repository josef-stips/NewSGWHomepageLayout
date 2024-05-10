const fs = require('fs');
const path = require('path');
const { compareTwoStrings } = require('string-similarity');
const { JSDOM } = require('jsdom');

class SearchEngine {
    constructor(query) {
        this.query = query;
    };

    extractRouteInfo(file, routeFile) {
        const content = fs.readFileSync(routeFile, 'utf-8');
        const dom = new JSDOM(content);
        const titleElements = dom.window.document.querySelectorAll("h1");
        let firstTitleText;

        if (titleElements.length > 0) {
            firstTitleText = titleElements[0].textContent;

        } else {
            firstTitleText = file;
        };

        return [firstTitleText];
    };

    calculateSimilarity(query, contentTitle) {
        return compareTwoStrings(query.toUpperCase(), contentTitle.toUpperCase());
    };

    modifyResults(results) {
        results = results.filter(a => a.similarity > 0.225);
        results.sort((a, b) => b.similarity - a.similarity);
        return results;
    };

    getFiles() {
        const routesFolder = path.join(__dirname, "../views/partials/faecher");
        const routesFolder2 = path.join(__dirname, "../views/partials/general");
        const routesFolder3 = path.join(__dirname, "../views/partials/nodes");

        const files = {
            [routesFolder]: fs.readdirSync(routesFolder),
            [routesFolder2]: fs.readdirSync(routesFolder2),
            [routesFolder3]: fs.readdirSync(routesFolder3)
        };

        return files;
    };

    search(query = this.query) {
        let results = [];
        let files = this.getFiles();

        for (let key in files) {
            files[key].map(file => {
                let fileName = file.replace(".ejs", "");

                if (fileName.includes("node")) {
                    fileName = fileName.replace("_", "/");
                };

                const routeFile = path.join(key, file);
                const [title] = this.extractRouteInfo(fileName, routeFile);
                const similarity = this.calculateSimilarity(query, title);

                results.push({ name: title, route: fileName, similarity });
            });
        };

        return this.modifyResults(results);
    };
};

module.exports = SearchEngine;