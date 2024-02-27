import {UIDisplay} from "./Classes/UIDisplay";


function main() {
    console.log('sdfsfjsd');
    const uiDisplay = new UIDisplay();
    addEventListenerToButtons(uiDisplay);

    uiDisplay.addImageToDisplay(uiDisplay.indexOfCurrentImage);
}

function addEventListenerToButtons(uiDisplay) {
    const nextButton = document.getElementById("nextBtn");
    const previousButton = document.getElementById("prevBtn");
    nextButton.addEventListener("click",() => {
        uiDisplay.nextImage();
    });
    previousButton.addEventListener("click",() => {
        uiDisplay.previousImage();
    });
}

export {main, addEventListenerToButtons};