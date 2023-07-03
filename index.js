const images = document.querySelectorAll('img');
const wrapper = document.querySelector('.wrapper');

images.forEach((img) => {
  let counter = 0;
  const imgContainer = document.createElement('div');
  const span = document.createElement('span');

  img.addEventListener('click', () => {
    counter++;
    span.innerHTML = counter;
  });

  imgContainer.appendChild(img);
  imgContainer.appendChild(span);
  wrapper.appendChild(imgContainer);
});
