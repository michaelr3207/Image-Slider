import {UIDisplay} from "./Classes/UIDisplay";

//ToDO add in button to allow the user to choose between manually running the slideshow and it auto running

function main() {
    const uiDisplay = new UIDisplay();
    addEventListenerToButtons(uiDisplay);
    uiDisplay.addImageToDisplay(uiDisplay.indexOfCurrentImage);
}

function addEventListenerToButtons(uiDisplay) {
    let timeOut;
    const nextButton = document.getElementById("nextBtn");
    const previousButton = document.getElementById("prevBtn");
    const startButton = document.getElementById('startBtn');
    const endButton = document.getElementById('endBtn');
    nextButton.addEventListener("click",() => {
        uiDisplay.nextImage();
    });
    previousButton.addEventListener("click",() => {

        uiDisplay.previousImage();
    });
    startButton.addEventListener("click", () => {
       timeOut =  setInterval(() => {
            uiDisplay.nextImage();
        }, 4000);
    });
    endButton.addEventListener("click", () => {
       clearInterval(timeOut);
    });
}


export {main, addEventListenerToButtons};