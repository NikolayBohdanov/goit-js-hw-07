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
    galleryEl.insertAdjacentHTML("afterbegin",imagesGalleryMarkup);
};

galleryEl.addEventListener('click', onImageClickEnlargeImg)


function onImageClickEnlargeImg(evn) {
    evn.preventDefault()
    if (evn.target.nodeName != "IMG") {
        return
    }
    
    const instance = basicLightbox.create(`<img width-"1400" height-"900" src="${evn.target.dataset.source}"> alt="${evn.target.alt}"`,
        {
            onShow: addEscapeCloseListener ,
            onClose: removeEventListenerOnClose 
        })
    
    instance.show()

    function closeOnEscape(evnt) {
        if (evnt.key === "Escape") {
                console.log("Tu nazal esc")
                instance.close();
                
            }

    }
    function addEscapeCloseListener() {
    window.addEventListener('keydown', closeOnEscape)
    }
    function removeEventListenerOnClose() {
    window.removeEventListener("keydown",closeOnEscape)
    }
}








// const instance = basicLightbox.create();

//      if (instance.visible()) {
//         window.addEventListener('keydown', (event) => {
//         if (event.key === "Escape") {
//             instance.close();
//         }
//     })
//   }