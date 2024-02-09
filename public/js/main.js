class App {
    constructor() {

    };

    // init. app
    init = () => {
        this.init_DOM();
    };

    // init. DOM
    init_DOM = () => {
        // create slide show for home page
        PageSlideShow();
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

    setInterval(nextImage, 5900000);
};