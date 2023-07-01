let images = document.querySelectorAll('img');
let wrapper = document.querySelector('.wrapper');

images.forEach((img) => {
  let counter = 0;
  let imgContainer = document.createElement('div');
  let span = document.createElement('span');

  img.addEventListener('click', () => {
    counter++;
    span.innerHTML = counter;
  });

  imgContainer.appendChild(img);
  imgContainer.appendChild(span);
  wrapper.appendChild(imgContainer);
});
