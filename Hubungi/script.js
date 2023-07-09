// loading

const loadingPage = document.getElementById("loading");

window.addEventListener("load", function () {
  loadingPage.style.display = "none";
});

// send to google sheet

const scriptURL = "https://script.google.com/macros/s/AKfycbxdgjKnZTdKrkyEUG6BgIbOKnNtW-zRNG2n6QF3ep-nXdpEIDcLtozVX8fGQ_hc178T/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => alert("Formulir Pendaftaran Telah Dikirim"), form.reset())
    .catch((error) => alert("Maaf Formulir Pendaftaran Gagal Dikirim"));
});
