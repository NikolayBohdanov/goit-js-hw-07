import { galleryItems } from './gallery-items.js';
// import * as basicLightbox from 'basiclightbox';
// Change code below this line

console.log(galleryItems);
// <li class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
    // <img
    //   class="gallery__image"
    //   src="small-image.jpg"
    //   data-source="large-image.jpg"
    //   alt="Image description"
    // />
//   </a>
// </li>
const galleryEl = document.querySelector(".gallery")
window.addEventListener('load', renderImagesGallery);

function createImagesGalleryMarkup(items) {
    return items.map(item =>
        `<li class="gallery__item">
     <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
    </a>
    </li>`).join('');
}

function renderImagesGallery(evn) {
    const imagesGalleryMarkup = createImagesGalleryMarkup(galleryItems)
    galleryEl.innerHTML = imagesGalleryMarkup;
};

galleryEl.addEventListener('click', onImageClickEnlargeImg)

function onImageClickEnlargeImg(evn) {
    evn.preventDefault()
    if (evn.target.nodeName != "IMG") {
        return
    }
    let url = evn.target.getAttribute('data-source');
    const instance = basicLightbox.create(`<img width-"1400" height-"900" src="${evn.target.dataset.source}"> alt="${evn.target.alt}"`, { closable: false });
    instance.show()
     if (instance.visible()) {
        window.addEventListener('keydown', (event) => {
        if (event.key === "Escape") {
            instance.close();
        }
    })
  }
}




