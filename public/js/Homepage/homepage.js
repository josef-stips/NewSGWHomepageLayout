// quote fade in effect on site loaded
window.addEventListener('DOMContentLoaded', () => {
    QuoteFadeInEffect();
    MainBoxesAnimation();
});

// quote fade in effect on start page
function QuoteFadeInEffect() {
    const quoteText = document.getElementById('quote-text');
    const authorText = document.getElementById('author-text');

    // Teilen Sie den Text in einzelne Buchstaben auf
    const quoteLetters = ["„", "D", "i", "e", " ", "b", "e", "s", "t", "e", " ", "B", "i", "l", "d", "u", "n", "g", " ", "f", "i", "n", "d", "e", "t", " ", "e", "i", "n", " ", "g", "e", "s", "c", "h", "e", "i", "t", "e", "r", " ", "M", "e", "n", "s", "c", "h", " ", "a", "u", "f", " ", "R", "e", "i", "s", "e", "n", "“", " "]
    const authorLetters = ["~", " ", "J", "o", "h", "a", "n", "n", " ", "W", "o", "l", "f", "g", "a", "n", "g", " ", "v", "o", "n", " ", "G", "o", "e", "t", "h", "e"]

    fadeInLetters = (letters, element) => {
        return new Promise((resolve) => {
            letters.forEach((letter, index) => {
                const span = document.createElement('span');
                span.textContent = letter;
                span.style.opacity = 0;

                element.appendChild(span);

                setTimeout(() => {
                    span.style.opacity = 1;

                    if (index === letters.length - 1) {
                        resolve();
                    };
                }, index * 10);
            });
        });
    };

    fadeInLetters(quoteLetters, quoteText)
        .then(() => {
            return fadeInLetters(authorLetters, authorText)
        });
};

// When page is loaded the main boxes get a fade in animation
function MainBoxesAnimation() {
    let boxes = [...mainBoxGrid.children];

    setTimeout(() => {
        let index = 0;
        let interval = setInterval(() => {
            boxes[index].style.opacity = "1";

            if (index >= boxes.length - 1) {
                clearInterval(interval);
                interval = null;
            };

            index++;
        }, 100);
    }, 300);
};

// search function
class search {
    constructor() {

    }

    // on start
    init = () => {
        this.DOM_events();
    };

    // load event listener
    DOM_events = () => {
        searchButton.addEventListener("click", () => {
            this.search("full");
        });

        searchInput.addEventListener("keyup", () => {

        });
    };

    search = (display_type) => {
        switch (display_type) {
            case "dropdown":
                this.dropdown_list();
                break;

            case "full":
                this.full_display();
                break;
        };
    };

    dropdown_list = () => {

    };

    full_display = () => {
        search_fullDisplay_Wrapper.style.display = "flex";
        homepage_content.style.display = "none";
    };
};

let searchInstance = new search();
searchInstance.init();