// Clicked code
let body = document.body;
let pic = document.querySelector(".pic");

function handlePic(evt) {
  console.log("Picture clicked");
  evt.stopPropagation();
}

function handleClick(e) {
  console.log("Body Clicked");
}

body.addEventListener("click", handleClick);
pic.addEventListener("click", handlePic);
