import { galleryItems } from "./gallery-items.js";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
const newGalleryItems = [];

galleryItems.forEach(e => {
    const galleryItemLink = document.createElement("a");
    const galleryItemImage = document.createElement("img");
    
    galleryItemLink.className = "gallery__link";
    galleryItemImage.className = "gallery__image";

    galleryItemLink.href = e.original;
    galleryItemImage.src = e.preview;
    galleryItemImage.setAttribute("title", e.description);
    galleryItemImage.alt = e.description;
    
    galleryItemLink.append(galleryItemImage);
    newGalleryItems.push(galleryItemLink);
});

gallery.append(...newGalleryItems);

new SimpleLightbox(".gallery a", { captionDelay: 250, });

console.log(galleryItems);