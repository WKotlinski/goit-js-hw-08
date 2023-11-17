// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import '../css/01-gallery.css';
// Change code below this line
const ul = document.querySelector('.gallery');

galleryItems.map(({ preview, original, description }) => {
  const li = document.createElement('li');
  li.innerHTML = `
  <div>
      <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
  </div>`;

  ul.insertAdjacentElement('beforeend', li);
});

new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
