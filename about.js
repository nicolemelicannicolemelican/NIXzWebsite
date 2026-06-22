const topBtn = document.getElementById("topBtn");
const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function toggleMusic() {
  if (bgMusic.paused) {
    bgMusic.play();
    musicBtn.innerHTML = "❚❚";
  } else {
    bgMusic.pause();
    musicBtn.innerHTML = "♫";
  }
}
let currentSong = new Audio();
let currentBtn = null;
let currentPath = "";

function playLocalSong(songPath, btn) {
  if (currentPath === songPath) {
    if (currentSong.paused) {
      currentSong.play();
      btn.textContent = "⏸";
    } else {
      currentSong.pause();
      btn.textContent = "▶";
    }
    return;
  }

  currentSong.pause();
  currentSong.currentTime = 0;

  if (currentBtn) {
    currentBtn.textContent = "▶";
  }

  currentSong.src = songPath;
  currentPath = songPath;
  currentBtn = btn;

  currentSong.play();
  btn.textContent = "⏸";
}

currentSong.addEventListener("ended", function () {
  if (currentBtn) currentBtn.textContent = "▶";
  currentPath = "";
});
function openPhotoCard(imgSrc, captionText) {
  document.getElementById("photoCardImg").src = imgSrc;
  document.getElementById("photoCardCaption").textContent = captionText;
  document.getElementById("photoCardOverlay").style.display = "flex";
}

function closePhotoCard() {
  document.getElementById("photoCardOverlay").style.display = "none";
}