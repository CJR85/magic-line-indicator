let marker = document.querySelector('#marker'),
  list = document.querySelectorAll('ul li');

function moveIndicator(e) {
  marker.style.left = e.offsetLeft + 'px';
  marker.style.width = e.offsetWidth + 'px';
}

list.forEach((link) => {
  link.addEventListener('mousemove', (e) => {
    moveIndicator(e.target);
  });
});
