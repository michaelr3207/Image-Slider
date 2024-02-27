import Bell from '../Images/bell-outline.png';
import Check from '../Images/check-outline.png';
import Face from '../Images/facebook-messenger.png';
import Face2 from '../Images/fbFace.jpg';
import Magnify from '../Images/magnify.png';

class UIDisplay {

    constructor() {
        this.indexOfCurrentImage = 0;
        this.allImages = this.createArrayOfImages();
        this.currentImage = document.getElementById('displayedImg');
        this.imageDisplay = document.getElementById('displayOfImage');
    }

    nextImage(){
        if(this.indexOfCurrentImage === 4)
            this.indexOfCurrentImage = 0;
        else
            this.indexOfCurrentImage ++;
        this.addImageToDisplay(this.indexOfCurrentImage);
    }

    previousImage() {
        if(this.indexOfCurrentImage === 0)
            this.indexOfCurrentImage = 4;
        else
            this.indexOfCurrentImage --;
        this.addImageToDisplay(this.indexOfCurrentImage);
    }

    createArrayOfImages() {
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
}

export {UIDisplay};