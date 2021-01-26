function Gallery(gallery) {
    if (!gallery) {
      throw new Error('No Gallery Found!');
    }
    // select the elements we need
    const images = Array.from(gallery.querySelectorAll('img'));
    const modal = document.querySelector('.modal');
    const prevButton = modal.querySelector('.prev');
    const nextButton = modal.querySelector('.next');
    let currentImage;
  
    function openModal() {
      console.info('Opening Modal...');
      // First check if the modal is already open
      if (modal.matches('.open')) {
        console.info('Madal already open');
        return; // stop the function from running
      }
      modal.classList.add('open');
    }
      // Event listeners to be bound when we open the modal:
      function closeModal() {
          modal.classList.remove('open');
          // TODO: add event listeners for keyboard
      }

    function handleClickOutside(e) {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    }

    function handleKeyUp(e) {
        if (e.key === 'Escape') closeModal();
    }

    function showImage(el) {
        if (!el) {
          console.info('no image to show');
          return;
        }
        // update the modal with this info
        console.log(el);
        modal.querySelector('img').src = el.src;
        modal.querySelector('h2').textContent = el.title;
        modal.querySelector('figure p').textContent = el.dataset.description;
        currentImage = el;
        openModal();
      }


    images.forEach(image => image.addEventListener('click', (e) => showImage(e.currentTarget)));

    modal.addEventListener('click', handleClickOutside);
    window.addEventListener('keyup', handleKeyUp);
}

// Use it on the page

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));