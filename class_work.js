import galleryItems from "./gallery-items.js";

class Gallery {
  constructor() {
    const listGalleryRef = document.querySelector(".js-gallery");
    const modalRef = document.querySelector(".js-lightbox");
    const imageModalRef = document.querySelector(".lightbox__image");
    const closeModalButton = document.querySelector(
      'button[data-action="close-lightbox"]'
    );
    const overlayRef = document.querySelector(".lightbox__overlay");
    let indexCurrentImage;
  }
}

const gallery = new Gallery();
