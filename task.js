import images from "./gallery-items.js";

const refs = {
  gallery: document.querySelector(".js-gallery"),
  modal: document.querySelector(".lightbox"),
  modalContent: document.querySelector(".lightbox__content"),
  modalImage: document.querySelector(".lightbox__image"),
  backdrop: document.querySelector(".lightbox__overlay"),
  closeButton: document.querySelector('button[data-action="close-lightbox"]'),
};

refs.gallery.insertAdjacentHTML("afterbegin", createGallery(images));

function createGallery(images) {
  const createImages = images.reduce(
    (acc, { preview, original, description }, index) => {
      acc += `<li class="gallery__item">
      <a href=${original} class="gallery__link">
      <img class="gallery__image"
      src=${preview} 
      data-source=${original} 
      alt=${description} 
      data-index=${index}/>
      </a>
      </li>`;
      return acc;
    },
    ""
  );
  return createImages;
}
