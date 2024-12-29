window.global = window; // `global` değişkenini `window` ile tanımla

  import SimpleLightbox from "/goit-js-hw-09/node_modules/simplelightbox";
  import "/goit-js-hw-09/node_modules/simplelightbox/dist/simple-lightbox.min.css";
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
  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
  