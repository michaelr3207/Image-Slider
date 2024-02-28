import {UIDisplay} from "./Classes/UIDisplay";


function main() {
    let currentImage = 0;
    const uiDisplay = new UIDisplay(currentImage);
    const arrOfImages = uiDisplay.allImages;
    // addImageToDisplay2(uiDisplay.indexOfCurrentImage, uiDisplay);

    setInterval(() => {
        const uiDisplayNew = new UIDisplay(currentImage);
        uiDisplayNew.imageDisplay.innerHTML = '';
        uiDisplayNew.nextImage();
        currentImage = uiDisplayNew.indexOfCurrentImage;
        addEventListenerToButtons(uiDisplayNew);
    },  3000);
}
// comm ent
function addEventListenerToButtons(uiDisplay, currentImage) {
    const nextButton = document.getElementById("nextBtn");
    const previousButton = document.getElementById("prevBtn");
    nextButton.addEventListener("click",() => {
        uiDisplay.nextImage();
        currentImage ++;
        adjustId(currentImage);
    });
    previousButton.addEventListener("click",() => {
        uiDisplay.previousImage();
        currentImage --;
        adjustId(currentImage);
    });
}

function  addImageToDisplay2(index, uIDisplay) {
    console.log(`this is the index -----> ${index}`);
    const imageToBeAdded = uIDisplay.allImages[index];
    uIDisplay.imageDisplay.innerHTML = '';
    uIDisplay.imageDisplay.appendChild(imageToBeAdded);
}

function adjustId(currentImage) {
    if(currentImage === 4)
        currentImage = 0;
    else if (currentImage === 0)
        currentImage = 4;
    return currentImage;
}

export {main, addEventListenerToButtons, addImageToDisplay2};