// window.global = window; 

import SimpleLightbox from "./node_modules/simplelightbox/dist/simple-lightbox.esm.js"
  import "https://cdn.jsdelivr.net/npm/simplelightbox/dist/simple-lightbox.min.css";
  import { images as galleryImages } from '/goit-js-hw-09/src/data/images.js';


  
  const galleryContainer = document.querySelector(".gallery");
  
  // Galeri öğelerini dinamik olarak oluşturma
  const galleryMarkup = galleryImages
    .map(
      ({ preview, original, description }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img
            class="gallery-image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>
    `
    )
    .join("");
  
  // Galeri markup'u ekle
  galleryContainer.innerHTML = galleryMarkup;
  
  // SimpleLightbox başlatma
  const gallery  = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
  