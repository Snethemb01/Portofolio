
document.getElementById('hamburger').addEventListener('click', function() {
  document.querySelector('.navbar').classList.toggle('active');
});
const modal = document.getElementById('netflixModal');
const images = document.querySelectorAll('.image-container img');
const closeModal = document.querySelector('.close-modal');

// Get the specific text elements inside the modal
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');

images.forEach(img => {
  img.addEventListener('click', function() {
    modal.style.display = 'block';
    modal.style.backgroundImage = `url(${this.src})`;
    
    // Grab the custom data attributes from the HTML and put them in the modal
    // The || part is a fallback just in case you forget to add a description to an image!
    modalTitle.innerText = this.getAttribute('data-title') || 'Project Image';
    modalDesc.innerText = this.getAttribute('data-desc') || 'No description available.';
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});
