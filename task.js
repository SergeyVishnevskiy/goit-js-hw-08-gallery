import images from "./gallery-items.js";

const refs = {
  gallery: document.querySelector(".js-gallery"),
  modal: document.querySelector(".js-lightbox"),
  modalImage: document.querySelector(".lightbox__image"),
  backdrop: document.querySelector(".lightbox__overlay"),
  closeButton: document.querySelector('button[data-action="close-lightbox"]'),
};

refs.gallery.insertAdjacentHTML("afterbegin", createGallery(images));
refs.gallery.addEventListener("click", onGallaryClick);
refs.closeButton.addEventListener("click", onButtonClick);
refs.backdrop.addEventListener("click", onBackdropClick);

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
function onGallaryClick(event) {
  event.preventDefault();
  const imageRef = event.target;
  if (imageRef.nodeName !== "IMG") {
    return;
  }
  const largeImageURL = imageRef.dataset.source;
  openModal(largeImageURL, imageRef);
}

function openModal(largeImageURL, imageRef) {
  refs.modal.classList.add("is-open");
  refs.modalImage.src = largeImageURL;
  refs.modalImage.alt = imageRef;
  refs.modalImage.dataset.index = imageRef.dataset.index;
  window.addEventListener("keydown", closeByEsc);
}
function closeModal() {
  refs.modal.classList.remove("is-open");
  refs.modalImage.src = "";
  refs.modalImage.alt = "";
}
function onButtonClick() {
  closeModal();
}
function onBackdropClick() {
  closeModal();
}
function closeByEsc(event) {
  if (event.code === "Escape") {
    closeModal();
  }
}
