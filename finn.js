document.querySelector("button")
  .addEventListener("click", changeColor);

function changeColor() {
   document.body.style.backgroundColor = 
     "rgb(" + getRandomColorValue() + "," + 
              getRandomColorValue() + "," + 
              getRandomColorValue() + ")"; 
}

function getRandomColorValue() {
    return Math.floor(Math.random() * 255);
}