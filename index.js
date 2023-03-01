const images = [
  "img/interstellar.jpg",
  "img/moon.jpg",
  "img/launch 2.jpg",
  "img/launch.jpg",
  "img/space.jpg",
  "img/space1.jpg",
  "img/stargazing.jpg",
];

const lingerImageIndex = 2;
const normalDuration = 3500;
const lingerDuration = 7000;

let currentImage = 0;

function changeImage() {
  document.getElementById("stars").src = images[currentImage];
  currentImage++;
  if (currentImage === images.length) {
    currentImage = 0;
  }

  if (currentImage === lingerImageIndex) {
    setTimeout(changeImage, lingerDuration);
  } else {
    setTimeout(changeImage, normalDuration);
  }
}

changeImage();
