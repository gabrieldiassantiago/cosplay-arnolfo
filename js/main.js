let toggleBtn = document.getElementById("toggle-btn");
let mobNav = document.getElementById("mob-nav");
let sections = document.getElementsByTagName("section");
let navLinks = document.getElementsByClassName("nav-link");
toggleBtn.addEventListener("click", function () {
  mobNav.classList.toggle("show");
});
for (i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    mobNav.classList.toggle("show");
  });
}
let header = document.getElementsByTagName("header");
document.addEventListener("scroll", function () {
  if (scrollY > 300) {
    header[0].style.borderBottom = "2px solid #CCC";
  } else if (scrollY < 300) {
    header[0].style.borderBottom = "none";
  }
});

let dateSpan = document.getElementById("datenow");
let year = new Date().getFullYear();
console.log(year);
dateSpan.textContent = year;

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); 
}

function dark() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  var disp = document.querySelector('.darkmode-icon-desktop').style.display;
    disp = "none";
}

var slideIndex2 = 0;
carousel2();

  function carousel2() {
    var i;
    var x = document.getElementsByClassName("slides2");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
  slideIndex2++;
  if (slideIndex2 > x.length) {slideIndex2 = 1}
  x[slideIndex2-1].style.display = "block";
  setTimeout(carousel2, 2000); 
}


var now = new Date();
var theevent = new Date("Dec 04 2022 00:00:01");
var seconds = (theevent - now) / 1000;
var minutes = seconds / 60;
var hours = minutes / 60;
var input = document.getElementById('days')
var days = hours / 24;
ID = window.setTimeout("update();", 1000);
input.style.display = 'block'

if (now == "Dec 03 2022") {
  document.contagemregressiva.days.value = 'Faltam poucas horas'
  if (now <= "Dec 02 2022"  ){
    document.contagemregressiva.days.value = document.contagemregressiva.days.value
  }
}

function update() {
  now = new Date();
  seconds = (theevent - now) / 1000;
  seconds = Math.round(seconds);
  minutes = seconds / 60;
  minutes = Math.round(minutes);
  hours = minutes / 60;
  hours = Math.round(hours);
  days = hours / 24;
  days = Math.round(days);
  document.contagemregressiva.days.value = 'Em apenas ' + days + ' dias';
  ID = window.setTimeout("update();", 1000);
}