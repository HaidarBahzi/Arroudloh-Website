// loading

const loadingPage = document.getElementById("loading");

window.addEventListener("load", function () {
  loadingPage.style.display = "none";
});

// image slide

const previous = document.getElementById("btn-prev").addEventListener("click", changePicturePrev);
const next = document.getElementById("btn-next").addEventListener("click", changePictureNext);
let imageslide = document.getElementById("image");
let i = 0;
const imageItems = [
  "/Gambar/gambar-gerbang.jpg",
  "/Gambar/kegiatan-bahasa.webp",
  "/Gambar/kegiatan-ziarah.webp",
  "/Gambar/brosur.jpg",
  "/Gambar/penghargaan.jpg",
];

function changeImage() {
  imageslide.src = imageItems[i];

  if (i < imageItems.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout(changeImage, 3000);
}

window.onload = changeImage;

function changePictureNext() {
  i++;

  if (i >= imageItems.length) {
    i = 0;
  }

  imageslide.src = imageItems[i];
}

function changePicturePrev() {
  i--;

  if (i < 0) {
    i = imageItems.length - 1;
  }

  imageslide.src = imageItems[i];
}
