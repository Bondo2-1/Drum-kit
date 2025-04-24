function playSound(key) {
  const soundMap = {
    w: "sounds/tom-1.mp3",
    a: "sounds/tom-3.mp3",
    s: "sounds/tom-2.mp3",
    d: "sounds/tom-4.mp3",
    j: "sounds/crash.mp3",
    k: "sounds/kick-bass.mp3",
    l: "sounds/snare.mp3",
  };

  const soundFile = soundMap[key.toLowerCase()]; //example:soundFile = soundMap["w"];

  if (soundFile) {
    const audio = new Audio(soundFile);
    audio.play();
    animation(key);
  }
}

// Handle click on drum buttons
function setupClickEvents() {
  const drumButtons = document.querySelectorAll(".drum");

  drumButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.innerHTML;
      playSound(key);   
    });
  });
}

// Handle keyboard press
function setupKeyboardEvents() {
  document.addEventListener("keydown", (event) => {
    playSound(event.key);
  });
}

function animation(key) {
    var btnAnimation = document.querySelector("." + key);
    btnAnimation.classList.add("pressed");
    setTimeout(function() {
        btnAnimation.classList.remove("pressed");
    }, 100);
}


// Initialize all events when DOM is ready
function initDrumKit() {
  setupClickEvents();
  setupKeyboardEvents();
}

// Run initializer
initDrumKit();

/* var audio = new Audio ("");
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
  });
}
function playSound(key) {
    let audio;
    switch (key) {
      case "w":
        audio = new Audio("sounds/tom-1.mp3");
        break;
      case "a":
        audio = new Audio("sounds/tom-3.mp3");
        break;
      case "s":
        audio = new Audio("sounds/tom-2.mp3");
        break;
      case "d":
        audio = new Audio("sounds/tom-4.mp3");
        break;
      case "j":
        audio = new Audio("sounds/crash.mp3");
        break;
      case "k":
        audio = new Audio("sounds/kick-bass.mp3");
        break;
      case "l":
        audio = new Audio("sounds/snare.mp3");
        break;
      default:
        return; // If an unrelated key is pressed, do nothing
    }
  
    audio.play();
  }
document.addEventListener("keydown", function (event) {
    playSound(event.key);
  }); */


