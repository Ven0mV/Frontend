// JavaScript Document

//Hamburger animatie js
(() => {
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("overlay");
    let open = false;
  
    const change = () => {
      if (!open) {
        hamburger.classList.add("open");
        menu.classList.add("menu");
      } else {
        hamburger.classList.remove("open");
        menu.classList.remove("menu");
      }
      open = !open;
    };
  
    hamburger.addEventListener("click", change);
  })(); 
//https://codepen.io/ainalem/pen/LJYRxz


//Audio button
var playSong = document.querySelector("#playSong");
var audioElement= document.getElementById("audio");

function togglePlay() {
  if (audioElement.paused) {
      audioElement.play();
      playSong.src= "images/cursemark.png"; 
  } else {
      audioElement.pause()
      playSong.src= "images/cursemarkBlue.png"; 
  }
}

playSong.addEventListener('click', togglePlay); 
