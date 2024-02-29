import {UIDisplay} from "./Classes/UIDisplay";

//ToDO add in button to allow the user to choose between manually running the slideshow and it auto running

function main() {
    const uiDisplay = new UIDisplay();
    addEventListenerToButtons(uiDisplay);
    uiDisplay.addImageToDisplay(uiDisplay.indexOfCurrentImage);
}

function addEventListenerToButtons(uiDisplay) {
    let timeOut;
    const allSelectors = document.querySelectorAll('.displayImageBtn');
    const nextButton = document.getElementById("nextBtn");
    const previousButton = document.getElementById("prevBtn");
    const startButton = document.getElementById('startBtn');
    const endButton = document.getElementById('endBtn');
    nextButton.addEventListener("click",() => {
        uiDisplay.nextImage();
        clearInterval(timeOut);
        uiDisplay.setSlideShowRunning(false);
    });

    previousButton.addEventListener("click",() => {
        uiDisplay.previousImage();
        clearInterval(timeOut);
        uiDisplay.setSlideShowRunning(false);
    });

    startButton.addEventListener("click", () => {
        if(uiDisplay.checkIfSlideShowIsRunning()){
            alert(`ERROR: SLideshow is running already!`);
            return;
        }
       timeOut =  setInterval(() => {
            uiDisplay.nextImage();
        }, 4000);
        uiDisplay.setSlideShowRunning(true);
    });

    endButton.addEventListener("click", () => {
        if(!uiDisplay.checkIfSlideShowIsRunning()) {
            alert(`ERROR: Slideshow is not running!`);
            return;
        }
       clearInterval(timeOut);
        uiDisplay.setSlideShowRunning(false);
    });

    for(let item of allSelectors) {
        item.addEventListener("click", () => {
           uiDisplay.addImageToDisplay(Number.parseInt(item.id));
            clearInterval(timeOut);
            uiDisplay.setSlideShowRunning(false);
        });
    }
}

// function startOrEndSlideShow(uiDisplay) {
//     if(uiDisplay.checkIfSlideShowIsRunning()){}
// }


export {main, addEventListenerToButtons};