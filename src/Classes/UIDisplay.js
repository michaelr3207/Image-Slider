import Bell from '../Images/bell-outline.png';
import Check from '../Images/check-outline.png';
import Face from '../Images/facebook-messenger.png';
import Face2 from '../Images/fbFace.jpg';
import Magnify from '../Images/magnify.png';
import {clearTimeoutNew, imageTimer, timeoutId} from "../loadApp";

class UIDisplay {

    constructor() {
        this.slideShowRunning = false;
        this.indexOfLastImage = 4;
        this.indexOfFirstImage = 0;
        this.indexOfCurrentImage = 0;  // set to first image
        this.allImages = this.createArrayOfImages();
        this.imageDisplay = document.getElementById('displayOfImage');
    }

    nextImage(){
        if(this.indexOfCurrentImage === this.indexOfLastImage)  // sets image back to first
            this.indexOfCurrentImage = this.indexOfFirstImage;
        else
            this.indexOfCurrentImage ++;
        this.addImageToDisplay(this.indexOfCurrentImage);
    }

    previousImage() {
        if(this.indexOfCurrentImage === this.indexOfFirstImage)
            this.indexOfCurrentImage = 4;
        else
            this.indexOfCurrentImage --;
        this.addImageToDisplay(this.indexOfCurrentImage);
    }

    createArrayOfImages() {  // ToDO - refactor code into its own Image class
        let images = [];
        const bell = new Image();
        const check = new Image();
        const face = new Image();
        const face2 = new Image();
        const magnify = new Image();
        bell.src = Bell;
        check.src = Check;
        face.src = Face;
        face2.src = Face2;
        magnify.src = Magnify;
        images.push(bell);
        images.push(check);
        images.push(face);
        images.push(face2);
        images.push(magnify);
        let count = 0;
        images.forEach(image => {
            image.className = 'imgOnDisplay';
            image.id = count.toString();
            count++;
        });
        return images;
    }

    addImageToDisplay(index) {
        console.log(`${index} pppp`)
        this.imageDisplay.innerHTML = '';
        this.imageDisplay.appendChild( this.allImages[index]);
        this.changeImageSelectorColor(index);
    }

    changeImageSelectorColor(indexOfImage) {
        const allSelectors = document.querySelectorAll('.displayImageBtn');
        const selectorToBeChanged = document.getElementById(`${indexOfImage.toString()}displayImageBtn`);
        allSelectors.forEach((selector) => {
            selector.style.background = 'red';
        })
        selectorToBeChanged.style.background = 'green';
    }

    checkIfSlideShowIsRunning() {
        return this.slideShowRunning;
    }

    setSlideShowRunning(entry) {
        this.slideShowRunning = entry;
    }
}

export {UIDisplay};