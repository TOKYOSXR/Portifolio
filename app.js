const video1 = document.getElementById("projectvid1");
const video2 = document.getElementById("projectvid2");
const video3 = document.getElementById("projectvid3");
const hoverSign = document.querySelector(".hover-sign");

const sidebar = document.querySelector(".sidebar");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");

const videoList = [video1, video2, video3];

videoList.forEach(video => {
   video.addEventListener('mouseover', () => {
      video.play();
      hoverSign.classList.add("active");
   });
   video.addEventListener('mouseout', () => {
      video.pause();
      hoverSign.classList.remove("active");
   });
});

menuIcon.addEventListener('click', () => {
    sidebar.classList.remove("close-sidebar");
    sidebar.classList.add("open-sidebar");
});

closeIcon.addEventListener('click', () => {
   sidebar.classList.remove("open-sidebar");
   sidebar.classList.add("close-sidebar");
});