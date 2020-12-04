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
 createLi({ original, preview, description }, index) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  const img = document.createElement("img");

  li.classList.add("gallery__item");
  a.classList.add("gallery__link");
  img.classList.add("gallery__image");

  a.href = original;
  img.src = preview;
  img.alt = description;
  img.setAttribute("data-source", original);
  img.setAttribute("data-index", index);
  a.append(img);
  li.append(a);
  return li;
}

 createGallery(galleryItems) {
  return galleryItems.map((liItem, index) => {
    return createLi(
      {
        original: liItem.original,
        preview: liItem.preview,
        description: liItem.description,
      },
      index
    );
  });
}

listGalleryRef.append(...createGallery(galleryItems));

 onOpenModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  indexCurrentImage = Number(event.target.dataset.index);
  modalRef.classList.add("is-open");
  imageModalRef.src = event.target.dataset.source;
  imageModalRef.alt = event.target.alt;
  closeModalButton.addEventListener("click", onCloseModal);
  overlayRef.addEventListener("click", onCloseModal);
  window.addEventListener("keydown", onPressKey);
}

 onCloseModal() {
  modalRef.classList.remove("is-open");
  imageModalRef.src = "";
}

 onPressKey(event) {
  switch (event.code) {
    case "Escape":
      onCloseModal();
      break;
    case "ArrowRight":
      indexCurrentImage + 1 === galleryItems.length
        ? (indexCurrentImage = 0)
        : (indexCurrentImage += 1);
      imageModalRef.src = galleryItems[indexCurrentImage].original;
      break;

    case "ArrowLeft":
      indexCurrentImage === 0
        ? (indexCurrentImage = galleryItems.length - 1)
        : (indexCurrentImage -= 1);
      imageModalRef.src = galleryItems[indexCurrentImage].original;
      break;

    default:
      break;
  }
}

}
const gallery = new Gallery();
