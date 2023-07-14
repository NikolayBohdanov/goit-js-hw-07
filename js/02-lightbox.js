import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
const galleryEl = document.querySelector(".gallery")
window.addEventListener('load', renderImagesGallery);

function createImagesGalleryMarkup(items) {
    return items.map(item =>
    `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
         <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a>
    </li>`).join('')
}
function renderImagesGallery(evn) {
    const imagesGalleryMarkup = createImagesGalleryMarkup(galleryItems)
    galleryEl.insertAdjacentHTML("afterbegin",imagesGalleryMarkup);
    const lightbox = new SimpleLightbox('.gallery a', {captionsData: `alt`, captionDelay: 250});
};
// galleryEl.addEventListener('click', onImageClickEnlargeImg)
// function onImageClickEnlargeImg(evn) {
//     evn.preventDefault()
//     if (evn.target.nodeName != "IMG") {
//         return
//     }
//     gallery.on('show.simplelightbox', function () {});
//   }
