function showImage(card) {
  const overlay = document.getElementById('overlay');
  const overlayImage = document.getElementById('overlayImage');
  const imgSrc = card.querySelector('img').src;
  overlayImage.src = imgSrc;
  overlay.style.display = 'flex';
}

function hideImage() {
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
}
