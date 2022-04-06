window.onscroll = function() {myFunction()};


var header = document.getElementById("header");


var sticky = header.offsetTop;


function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    header.style.zIndex("999")
  } else {
    header.classList.remove("sticky");
  }
}