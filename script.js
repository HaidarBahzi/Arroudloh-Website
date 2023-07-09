// loading

const loadingPage = document.getElementById("loading");

window.addEventListener("load", function () {
  loadingPage.style.display = "none";
});

//observer

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElement = document.querySelectorAll(".hidden");
hiddenElement.forEach((el) => observer.observe(el));

// slide

let i = 0;
const images = [];
const slideTime = 2500;

images[0] = "Gambar/gambar-gerbang.jpg";
images[1] = "Gambar/kegiatan-bahasa.webp";

function changePicture() {
  document.querySelector(".background-slider").style.backgroundImage = "url(" + images[i] + ")";

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout(changePicture, slideTime);
}

window.onload = changePicture;

// slide testimoni
let j = 0;
let isiTestimoni = document.getElementById("testimoni-isi");
let testimoniOrang = document.getElementById("testimoni-person");

const testimony = [
  ["Haidar Bahzi", "Salah satu pondok pesantren yang sangat fleksibel!"],
  ["Ulil Albab", "Pondok ini sangat responsif terhadap perkembangan santri"],
  ["Reyhan", "Alhamdulillah, karena pondok ini saya sudah menghafal 15 juz"],
];

function changeTestimony() {
  testimoniOrang.innerHTML = testimony[j][0];
  isiTestimoni.innerHTML = testimony[j][1];

  if (j < testimony.length - 1) {
    j++;
  } else {
    j = 0;
  }

  setTimeout(changeTestimony, slideTime);
}

changeTestimony();
