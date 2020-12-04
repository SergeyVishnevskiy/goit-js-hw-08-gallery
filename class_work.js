import galleryItems from "./gallery-items.js";

class Gallery {
  constructor() {
    this.listGalleryRef = document.querySelector(".js-gallery");
    this.modalRef = document.querySelector(".js-lightbox");
    this.imageModalRef = document.querySelector(".lightbox__image");
    this.closeModalButton = document.querySelector(
      'button[data-action="close-lightbox"]'
    );
    this.overlayRef = document.querySelector(".lightbox__overlay");
    this.indexCurrentImage = 0;
  }
}

const gallery = new Gallery();
console.log(gallery.listGalleryRef);
console.log(gallery.modalRef);
console.log(gallery.imageModalRef);
console.log(gallery.closeModalButton);
console.log(gallery.overlayRef);
console.log(gallery.indexCurrentImage);
