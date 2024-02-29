import Bell from '../Images/bell-outline.png';
import Check from '../Images/check-outline.png';
import Face from '../Images/facebook-messenger.png';
import Face2 from '../Images/fbFace.jpg';
import Magnify from '../Images/magnify.png';
import {clearTimeoutNew, imageTimer, timeoutId} from "../loadApp";

class UIDisplay {

    constructor() {
        this.indexOfLastImage = 4;
        this.indexOfFirstImage = 0;
        this.indexOfCurrentImage = 0;
        this.allImages = this.createArrayOfImages();
        this.imageDisplay = document.getElementById('displayOfImage');
    }

    nextImage(){
        if(this.indexOfCurrentImage === this.indexOfLastImage)  // sets image back to first
            this.indexOfCurrentImage = this.indexOfFirstImage;
        else
            this.indexOfCurrentImage ++;
        this.addImageToDisplay(this.indexOfCurrentImage);
        this.changeImageSelectorColor(this.indexOfCurrentImage);
    }

    previousImage() {
        if(this.indexOfCurrentImage === this.indexOfFirstImage)
            this.indexOfCurrentImage = 4;
        else
            this.indexOfCurrentImage --;
        this.addImageToDisplay(this.indexOfCurrentImage);
        this.changeImageSelectorColor(this.indexOfCurrentImage);
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
        bell.id = '0';
        check.id = '1';
        face.id = '2';
        face2.id = '3';
        magnify.id = '4';
        bell.className = 'imgOnDisplay';
        check.className = 'imgOnDisplay';
        face.className = 'imgOnDisplay';
        face2.className = 'imgOnDisplay';
        magnify.className = 'imgOnDisplay';
        images.push(bell);
        images.push(check);
        images.push(face);
        images.push(face2);
        images.push(magnify);

        return images;
    }

    addImageToDisplay(index) {
        const imageToBeAdded = this.allImages[index];
        this.imageDisplay.innerHTML = '';
        this.imageDisplay.appendChild(imageToBeAdded);
    }

    changeImageSelectorColor(indexOfImage) {
        const allSelectors = document.querySelectorAll('.displayImageBtn');
        const selectorToBeChanged = document.getElementById(`${this.indexOfCurrentImage.toString()}displayImageBtn`);
        allSelectors.forEach((selector) => {
            selector.style.background = 'red';
        })
        selectorToBeChanged.style.background = 'green';
    }
}

export {UIDisplay};