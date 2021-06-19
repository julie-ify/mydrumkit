// Listen for clicks
// Get all the buttons from the dom
const button = document.querySelectorAll(".drum");

//Get hold of each button
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", amClicked);
}

// Declare amclicked function
function amClicked() {
  //Get the innerhtml of the button that got clicked
  buttonClicked = this.innerHTML;
  checkKey(buttonClicked);

  // for css animation & style
  activeButton(buttonClicked);
}

// Listen For key press on the document
document.addEventListener("keypress", keyPressed);
//declare keyPressed function
function keyPressed(event) {
  checkKey(event.key);
  // for css style
  activeButton(event.key);
}

// Css style
function activeButton(active) {
  document.querySelector("." + active).classList.add("current");
  //Set time to remove the current class
  setTimeout(() => {
    document.querySelector("." + active).classList.remove("current");
  }, 200);
}

// Check for the button that got clicked or key that got pressed
function checkKey(key) {
  switch (key) {
    case "a":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "b":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "c":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "e":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "f":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "g":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console(key);
  }
}
