class App {
    constructor() {

    };

    // init. app
    init = () => {
        this.init_DOM();
        this.load_localstorage();
    };

    // init. DOM
    init_DOM = () => {
        // create slide show for home page
        // PageSlideShow();
        HideAllInnerLists();
    };

    // check local storage
    load_localstorage = () => {
        this.load_theme();
    };

    load_theme = () => {
        if (localStorage.getItem("dark-theme") == null) {
            localStorage.setItem("dark-theme", "white");

        } else if (localStorage.getItem("dark-theme") == "dark") {
            document.body.classList.add("dark-theme");
        }
    };
};

const AppInstance = new App();
AppInstance.init();

// create slide show for home page with the 4 images stored in css in :root
function PageSlideShow() {
    let SlideShow = homepageImageSlideshow;
    let currentImageIndex = 0;

    let images = [
        getComputedStyle(document.documentElement).getPropertyValue('--image1'),
        getComputedStyle(document.documentElement).getPropertyValue('--image2'),
        getComputedStyle(document.documentElement).getPropertyValue('--image3'),
        getComputedStyle(document.documentElement).getPropertyValue('--image4')
    ];

    const nextImage = () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        SlideShow.style.backgroundImage = images[currentImageIndex];
    };

    setInterval(nextImage, 2000);
};

// hides all inner lists in the left side bar
function HideAllInnerLists() {
    AnmeldungList.style.display = "none";
    UnterrichtsorganisationList.style.display = "none";
    SchulprogrammList.style.display = "none";
    LernprozesseList.style.display = "none";
    SchulpflegschaftList.style.display = "none";

    if (sessionStorage.getItem("OpenedInnerList")) {
        switch (sessionStorage.getItem("OpenedInnerList")) {

            case "orga":
                UnterrichtsorganisationList.style.display = "block";
                break;
            case "schulprogramm":
                SchulprogrammList.style.display = "block";
                break;
            case "lernprozess":
                SchulprogrammList.style.display = "block";
                LernprozesseList.style.display = "block";
                break;
            case "anmeldung":
                AnmeldungList.style.display = "block";
                break;
            case "schulpflegschaft":
                SchulpflegschaftList.style.display = "block";
                break;
        };
    };
};

// switch to light/dark theme btn click event
themeBtn.addEventListener("click", () => {
    if (document.body.classList.contains("dark-theme")) {
        document.body.classList.remove("dark-theme");
        localStorage.setItem("dark-theme", "white");

    } else {
        document.body.classList.add("dark-theme");
        localStorage.setItem("dark-theme", "dark");
    };
});

// on bars in header click 
HeaderBars.addEventListener("click", () => {
    mainBarLeft.style.left = "0";
    mainBarLeft.style.opacity = "1";
});

LeftBarCloseBtn.addEventListener("click", () => {
    mainBarLeft.style.left = "-50vh";
    mainBarLeft.style.opacity = "0";
});

UnterrichtsorganisationListBtn.addEventListener("click", () => {
    HideAllInnerLists();
    UnterrichtsorganisationList.style.display = "block";

    sessionStorage.setItem("OpenedInnerList", "orga");
});

SchulprogrammListBtn.addEventListener("click", () => {
    HideAllInnerLists();
    SchulprogrammList.style.display = "block";

    sessionStorage.setItem("OpenedInnerList", "schulprogramm");
});

LernprozessListBtn.addEventListener("click", () => {
    HideAllInnerLists();
    LernprozesseList.style.display = "block";

    sessionStorage.setItem("OpenedInnerList", "lernprozess");
});

AnmeldungListBtn.addEventListener("click", () => {
    HideAllInnerLists();
    AnmeldungList.style.display = "block";

    sessionStorage.setItem("OpenedInnerList", "anmeldung");
});

SchulpflegschaftListBtn.addEventListener("click", () => {
    HideAllInnerLists();
    SchulpflegschaftList.style.display = "block";

    sessionStorage.setItem("OpenedInnerList", "schulpflegschaft");
});