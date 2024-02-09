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
        PageSlideShow();
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

    setInterval(nextImage, 1000000);
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