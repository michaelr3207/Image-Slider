import {UIDisplay} from "./Classes/UIDisplay";

let timeLeft = 5;

function main() {
    const uiDisplay = new UIDisplay();
    addEventListenerToButtons(uiDisplay);

    const allImages = uiDisplay.allImages;
    const bruh  = setTimeout(uiDisplay.nextImage, 2000);

     timeoutId = setTimeout(() => {
        console.log("hey...I'm 2 seconds in")
    }, 2000);
    imageTimer(uiDisplay);

    uiDisplay.addImageToDisplay(uiDisplay.indexOfCurrentImage);
}

function addEventListenerToButtons(uiDisplay) {
    const nextButton = document.getElementById("nextBtn");
    const previousButton = document.getElementById("prevBtn");
    nextButton.addEventListener("click",() => {
        clearTimeoutNew();
        // imageTimer(uiDisplay);
        uiDisplay.nextImage();
    });
    previousButton.addEventListener("click",() => {
        clearTimeoutNew();
        // imageTimer(uiDisplay);
        uiDisplay.previousImage();
    });
}

function imageTimer(uiDisplay) {
    const timeoutId = setTimeout(() => {
        console.log('br');
        uiDisplay.nextImage();
    }, 2000);

    if(!timeoutId)
        clearTimeout(timeoutId);
}

function clearTimeoutNew() {
    clearTimeout(timeoutId);
}

export {main, addEventListenerToButtons, imageTimer, clearTimeoutNew, timeoutId};